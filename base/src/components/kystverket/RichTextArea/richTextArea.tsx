'use client';

import { useEffect, useId, useRef } from 'react';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { Editor, commandsCtx, defaultValueCtx, editorViewCtx, editorViewOptionsCtx, rootCtx } from '@milkdown/core';
import type { CmdKey } from '@milkdown/core';
import type { Ctx } from '@milkdown/ctx';
import { undoCommand, redoCommand } from '@milkdown/plugin-history';
import {
  commonmark,
  liftListItemCommand,
  toggleEmphasisCommand,
  toggleStrongCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
  wrapInHeadingCommand,
  turnIntoTextCommand,
} from '@milkdown/preset-commonmark';
import { history } from '@milkdown/plugin-history';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { replaceAll } from '@milkdown/utils';
import '@milkdown/prose/view/style/prosemirror.css';

import classes from './richTextArea.module.css';

import { Fieldset, LabelContent, ValidationMessage } from '~/main';
import LinkEditor from './components/LinkEditor/linkEditor';
import { BlockType, Toolbar } from './components/Toolbar/toolbar';
import { normalizeHref } from './utils/linkUtils';
import { useRichTextToolbarState } from './hooks/useRichTextToolbarState';
import { useRichTextLinkEditor } from './hooks/useRichTextLinkEditor';

export type RichTextAreaProps = {
  value: string | null | undefined;
  onChange: (markdown: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
  description?: string | React.ReactNode;
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  error?: string;
};

type ToolbarCommand<T = unknown> = { key: CmdKey<T>; value?: T };

const normalizeMarkdownBreakTags = (value: string) => value.replace(/<br\s*\/?>/gi, '\n\n');

const blockedCommonmarkGroups = new Set(['CodeBlock', 'InlineCode', 'Blockquote', 'Hr', 'Html']);
const richTextCommonmarkPlugins = commonmark.filter((plugin) => {
  const group = plugin.meta?.group ?? '';
  return !blockedCommonmarkGroups.has(group);
});

const RichTextAreaContainer = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  label,
  description,
  optional = false,
  required = false,
  error,
}: RichTextAreaProps) => {
  const normalizedValue = normalizeMarkdownBreakTags(value ?? '');
  const latestOnChangeRef = useRef(onChange);
  const lastKnownMarkdownRef = useRef(normalizedValue);

  const { toolbarState, updateToolbarState } = useRichTextToolbarState();

  const linkEditorAnchorId = `rich-text-link-editor-${useId().replace(/:/g, '')}`;

  latestOnChangeRef.current = onChange;

  // Oppretter Milkdown-editor med schema, historikk og listeners.
  const { loading, get } = useEditor(
    (root) =>
      Editor.make()

        .config((ctx) => {
          ctx.set(rootCtx, root);
          ctx.set(defaultValueCtx, normalizedValue);
          ctx.update(editorViewOptionsCtx, (prev = {}) => ({
            ...prev,
            editable: () => !disabled,
            handleDOMEvents: {
              ...prev.handleDOMEvents,
              click: (_view, event) => {
                const target = event.target;

                if (!(target instanceof HTMLElement)) {
                  return false;
                }
                const anchor = target.closest('a[href]');

                if (!anchor) {
                  return false;
                }

                const href = anchor.getAttribute('href');

                if (!href) {
                  return false;
                }

                event.preventDefault();
                window.open(normalizeHref(href), '_blank', 'noopener,noreferrer');
                return true;
              },
              keydown: (view, event) => {
                if (event.key !== ' ' || event.ctrlKey || event.metaKey || event.altKey) {
                  return false;
                }

                const { state } = view;
                const { selection } = state;
                const linkMarkType = state.schema.marks.link;

                if (!linkMarkType || !selection.empty) {
                  return false;
                }

                const { from, $from } = selection;
                const nodeBefore = $from.nodeBefore;
                const nodeAfter = $from.nodeAfter;

                const linkInCursorMarks = linkMarkType.isInSet(state.storedMarks ?? $from.marks());
                const linkOnNodeBefore = !!(nodeBefore?.isText && linkMarkType.isInSet(nodeBefore.marks));

                if (!linkInCursorMarks && !linkOnNodeBefore) {
                  return false;
                }

                if (nodeAfter?.isText && linkMarkType.isInSet(nodeAfter.marks)) {
                  return false;
                }

                event.preventDefault();

                const tr = state.tr.setStoredMarks([]).insertText(' ', from, from);

                view.dispatch(tr);

                return true;
              },
            },
          }));
          ctx.get(listenerCtx).markdownUpdated((_ctx, markdown) => {
            const normalizedMarkdown = normalizeMarkdownBreakTags(markdown);

            if (normalizedMarkdown === lastKnownMarkdownRef.current) {
              updateToolbarState(_ctx);
              return;
            }
            lastKnownMarkdownRef.current = normalizedMarkdown;
            latestOnChangeRef.current(normalizedMarkdown);
            updateToolbarState(_ctx);
          });
          ctx.get(listenerCtx).selectionUpdated((listenerContext) => {
            updateToolbarState(listenerContext);
          });
        })
        .use(richTextCommonmarkPlugins)
        .use(history)
        .use(listener),
    [disabled],
  );

  // Synker ekstern verdi til editor ved endringer.
  useEffect(() => {
    const editor = get();

    if (!editor) {
      return;
    }

    if (normalizedValue === lastKnownMarkdownRef.current) {
      return;
    }

    // Ikke synk ekstern verdi mens bruker aktivt skriver i editoren.
    let isEditorFocused = false;
    editor.action((ctx) => {
      isEditorFocused = ctx.get(editorViewCtx).hasFocus();
    });

    if (isEditorFocused) {
      return;
    }

    lastKnownMarkdownRef.current = normalizedValue;
    editor.action(replaceAll(normalizedValue));
  }, [get, normalizedValue]);

  // Sett knappestatus når editoren er tilgjengelig.
  useEffect(() => {
    const editor = get();

    if (!editor) {
      return;
    }

    editor.action((ctx) => {
      updateToolbarState(ctx);
    });
  }, [get]);

  // Felles flyt for alle toolbar-kommandoer.
  const executeInEditor = (fn: (ctx: Ctx) => void) => {
    if (disabled) return;
    const editor = get();
    if (!editor) return;
    editor.action((ctx) => {
      ctx.get(editorViewCtx).focus();
      fn(ctx);
      updateToolbarState(ctx);
    });
  };

  // Kjører toolbar-kommando og oppdaterer knappestatus.
  const runCommand = <T,>(command: ToolbarCommand<T>) => {
    executeInEditor((ctx) => {
      const commands = ctx.get(commandsCtx);
      commands.call(command.key, command.value);
    });
  };

  // Kjører flere toolbar-kommandoer i rekkefølge og oppdaterer knappestatus.
  const runCommands = (commandsToRun: ToolbarCommand<unknown>[]) => {
    executeInEditor((ctx) => {
      const commands = ctx.get(commandsCtx);
      commandsToRun.forEach((command) => commands.call(command.key, command.value));
    });
  };

  const { linkEditorOpen, linkEditorState, closeLinkEditor, openLinkEditor, handleLinkSave, handleLinkRemove } =
    useRichTextLinkEditor({
      disabled,
      executeInEditor,
    });

  // Håndterer toggling av listeformatering
  const toggleList = ({
    isTargetListActive,
    isOtherListActive,
    wrapCommand,
  }: {
    isTargetListActive: boolean;
    isOtherListActive: boolean;
    wrapCommand: ToolbarCommand<unknown>;
  }) => {
    if (isTargetListActive) {
      runCommand(liftListItemCommand);
      return;
    }

    if (isOtherListActive) {
      runCommands([liftListItemCommand, wrapCommand]);
      return;
    }

    runCommand(wrapCommand);
  };

  const handleFormatChange = (format: BlockType) => {
    if (format === 'paragraph') {
      runCommand(turnIntoTextCommand);
    } else {
      runCommand({ key: wrapInHeadingCommand.key, value: parseInt(format.slice(1), 10) });
    }
  };

  const showPlaceholder = !normalizedValue && Boolean(placeholder);

  return (
    <Fieldset>
      {label && (
        <Fieldset.Legend>
          <LabelContent text={label} required={required} optional={optional} />
        </Fieldset.Legend>
      )}
      {description && <Fieldset.Description>{description}</Fieldset.Description>}

      <div>
        <div
          className={[
            classes.editorWrapper,
            error && classes.editorWrapperError,
            disabled && classes.editorWrapperDisabled,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <Toolbar
            disabled={disabled || loading}
            isBoldActive={toolbarState.isBoldActive}
            isItalicActive={toolbarState.isItalicActive}
            isBulletListActive={toolbarState.isBulletListActive}
            isOrderedListActive={toolbarState.isOrderedListActive}
            selectedFormat={toolbarState.selectedFormat}
            isLinkActive={toolbarState.isLinkActive}
            onBold={() => runCommand(toggleStrongCommand)}
            onItalic={() => runCommand(toggleEmphasisCommand)}
            onUndo={() => runCommand(undoCommand)}
            onRedo={() => runCommand(redoCommand)}
            onLink={openLinkEditor}
            linkPopoverTarget={linkEditorAnchorId}
            onBulletList={() =>
              toggleList({
                isTargetListActive: toolbarState.isBulletListActive,
                isOtherListActive: toolbarState.isOrderedListActive,
                wrapCommand: wrapInBulletListCommand,
              })
            }
            onOrderedList={() =>
              toggleList({
                isTargetListActive: toolbarState.isOrderedListActive,
                isOtherListActive: toolbarState.isBulletListActive,
                wrapCommand: wrapInOrderedListCommand,
              })
            }
            onFormatChange={handleFormatChange}
          />

          <div
            className={[classes.editorContainer, disabled && classes.editorContainerDisabled].filter(Boolean).join(' ')}
          >
            {showPlaceholder ? (
              <span className={classes.placeholder} aria-hidden="true">
                {placeholder}
              </span>
            ) : null}
            <div className={classes.editor}>
              <Milkdown />
            </div>
          </div>
          <LinkEditor
            open={linkEditorOpen}
            anchorId={linkEditorAnchorId}
            href={linkEditorState?.href ?? ''}
            hasSelection={linkEditorState?.hasSelection ?? false}
            onSave={handleLinkSave}
            onRemove={handleLinkRemove}
            onClose={closeLinkEditor}
          />
        </div>
        {error && <ValidationMessage className={classes.error}>{error}</ValidationMessage>}
      </div>
    </Fieldset>
  );
};

export const RichTextArea = ({ className, ...props }: RichTextAreaProps) => {
  return (
    <div className={className}>
      <MilkdownProvider>
        <RichTextAreaContainer {...props} />
      </MilkdownProvider>
    </div>
  );
};
