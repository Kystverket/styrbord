'use client';

import { useEffect, useRef, useState } from 'react';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { Editor, commandsCtx, defaultValueCtx, editorViewCtx, editorViewOptionsCtx, rootCtx } from '@milkdown/kit/core';
import { undoCommand, redoCommand } from '@milkdown/kit/plugin/history';
import {
  commonmark,
  liftListItemCommand,
  toggleEmphasisCommand,
  toggleStrongCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from '@milkdown/kit/preset/commonmark';
import { history } from '@milkdown/kit/plugin/history';
import { listener, listenerCtx } from '@milkdown/kit/plugin/listener';
import { replaceAll } from '@milkdown/kit/utils';
import '@milkdown/kit/prose/view/style/prosemirror.css';

import classes from './RichTextArea.module.css';
import { Toolbar } from './Toolbar';
import { Fieldset, LabelContent } from '~/main';

export type RichTextAreaProps = {
  value: string;
  onChange: (markdown: string) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  label?: string;
  description?: string | React.ReactNode;
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
};

type ToolbarCommand = { key: unknown };
type CommandToRun = { command: ToolbarCommand };

const RichTextAreaContainer = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  readOnly = false,
  label,
  description,
  optional = false,
  required = false,
}: RichTextAreaProps) => {
  const latestOnChangeRef = useRef(onChange);
  const lastKnownMarkdownRef = useRef(value);

  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isItalicActive, setIsItalicActive] = useState(false);
  const [isBulletListActive, setIsBulletListActive] = useState(false);
  const [isOrderedListActive, setIsOrderedListActive] = useState(false);

  const isLocked = disabled || readOnly;

  latestOnChangeRef.current = onChange;

  // Leser gjeldende markør/seleksjon i editoren og oppdaterer aktiv status for toolbar
  const updateToolbarState = (ctx: Parameters<Editor['action']>[0] extends (arg: infer T) => unknown ? T : never) => {
    const view = ctx.get(editorViewCtx);
    const { state } = view;
    const { from, to, empty, $from } = state.selection;

    const hasMark = (markNames: string[]) => {
      const markTypes = markNames
        .map((markName) => state.schema.marks[markName])
        .filter((markType): markType is NonNullable<typeof markType> => Boolean(markType));

      if (markTypes.length === 0) {
        return false;
      }

      if (empty) {
        const marks = state.storedMarks ?? $from.marks();
        return marks.some((mark) => markTypes.includes(mark.type));
      }

      let active = false;
      state.doc.nodesBetween(from, to, (node) => {
        if (active) {
          return false;
        }

        if (markTypes.some((markType) => markType.isInSet(node.marks))) {
          active = true;
          return false;
        }

        return undefined;
      });

      return active;
    };

    const hasNode = (nodeName: string) => {
      const nodeType = state.schema.nodes[nodeName];

      if (!nodeType) {
        return false;
      }

      if (empty) {
        for (let depth = $from.depth; depth >= 0; depth -= 1) {
          if ($from.node(depth).type === nodeType) {
            return true;
          }
        }

        return false;
      }

      let active = false;
      state.doc.nodesBetween(from, to, (node) => {
        if (active) {
          return false;
        }

        if (node.type === nodeType) {
          active = true;
          return false;
        }

        return undefined;
      });

      return active;
    };

    setIsBoldActive(hasMark(['strong']));
    setIsItalicActive(hasMark(['emphasis', 'em']));
    setIsBulletListActive(hasNode('bullet_list'));
    setIsOrderedListActive(hasNode('ordered_list'));
  };

  // Oppretter Milkdown-editor med schema, historikk og listeners.
  const { loading, get } = useEditor(
    (root) =>
      Editor.make()

        .config((ctx) => {
          // Knytter editoren til DOM-root.
          ctx.set(rootCtx, root);

          // Setter initial markdown ved oppstart.
          ctx.set(defaultValueCtx, value);

          // Styrer redigerbarhet ut fra disabled/readOnly.
          ctx.update(editorViewOptionsCtx, (prev = {}) => ({
            ...prev,
            editable: () => !isLocked,
          }));

          // Synk markdown-endringer til parent og toolbar-state.
          ctx.get(listenerCtx).markdownUpdated((_ctx, markdown) => {
            if (markdown === lastKnownMarkdownRef.current) {
              updateToolbarState(_ctx);
              return;
            }

            lastKnownMarkdownRef.current = markdown;
            latestOnChangeRef.current(markdown);
            updateToolbarState(_ctx);
          });

          // Oppdaterer aktiv knappestatus når markør/seleksjon flyttes.
          ctx.get(listenerCtx).selectionUpdated((listenerContext) => {
            updateToolbarState(listenerContext);
          });
        })
        // Aktiverer commonmark, undo/redo og listener-plugin.
        .use(commonmark)
        .use(history)
        .use(listener),
    // Re-konfigurerer editor når lock-state endres.
    [isLocked],
  );

  // Synker ekstern verdi til editor ved endringer.
  useEffect(() => {
    const editor = get();

    if (!editor) {
      return;
    }

    if (value === lastKnownMarkdownRef.current) {
      return;
    }

    lastKnownMarkdownRef.current = value;
    editor.action(replaceAll(value));
  }, [get, value]);

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

  // Kjører toolbar-kommando og oppdaterer knappestatus.
  const runCommand = (command: ToolbarCommand) => {
    if (isLocked) {
      return;
    }

    const editor = get();

    if (!editor) {
      return;
    }

    editor.action((ctx) => {
      ctx.get(editorViewCtx).focus();
      const commands = ctx.get(commandsCtx);
      type CommandKey = Parameters<typeof commands.call>[0];

      commands.call(command.key as CommandKey);
      updateToolbarState(ctx);
    });
  };

  // Kjører flere kommandoer i rekkefølge og oppdaterer knappestatus.
  const runCommands = (commandsToRun: CommandToRun[]) => {
    if (isLocked) {
      return;
    }

    const editor = get();

    if (!editor) {
      return;
    }

    editor.action((ctx) => {
      ctx.get(editorViewCtx).focus();
      const commands = ctx.get(commandsCtx);
      type CommandKey = Parameters<typeof commands.call>[0];

      commandsToRun.forEach(({ command }) => {
        commands.call(command.key as CommandKey);
      });

      updateToolbarState(ctx);
    });
  };

  const toggleList = ({
    isTargetListActive,
    isOtherListActive,
    wrapCommand,
  }: {
    isTargetListActive: boolean;
    isOtherListActive: boolean;
    wrapCommand: ToolbarCommand;
  }) => {
    if (isTargetListActive) {
      runCommand(liftListItemCommand);
      return;
    }

    if (isOtherListActive) {
      runCommands([{ command: liftListItemCommand }, { command: wrapCommand }]);
      return;
    }

    runCommand(wrapCommand);
  };

  const showPlaceholder = !value && Boolean(placeholder);

  return (
    <Fieldset>
      <Fieldset.Legend>
        <LabelContent text={label} required={required} optional={optional} />
      </Fieldset.Legend>
      <Fieldset.Description>{description}</Fieldset.Description>

      <div className={classes.wrapper}>
        {!readOnly && (
          <Toolbar
            disabled={disabled || loading}
            isBoldActive={isBoldActive}
            isItalicActive={isItalicActive}
            isBulletListActive={isBulletListActive}
            isOrderedListActive={isOrderedListActive}
            onBold={() => runCommand(toggleStrongCommand)}
            onItalic={() => runCommand(toggleEmphasisCommand)}
            onUndo={() => runCommand(undoCommand)}
            onRedo={() => runCommand(redoCommand)}
            onBulletList={() =>
              toggleList({
                isTargetListActive: isBulletListActive,
                isOtherListActive: isOrderedListActive,
                wrapCommand: wrapInBulletListCommand,
              })
            }
            onOrderedList={() =>
              toggleList({
                isTargetListActive: isOrderedListActive,
                isOtherListActive: isBulletListActive,
                wrapCommand: wrapInOrderedListCommand,
              })
            }
          />
        )}

        <div
          className={`${classes.editorContainer} ${disabled ? classes.editorContainerDisabled : ''} ${readOnly ? classes.editorContainerReadOnly : ''}`}
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
