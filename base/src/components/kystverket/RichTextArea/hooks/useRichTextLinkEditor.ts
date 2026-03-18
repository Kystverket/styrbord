import { useState } from 'react';
import { editorViewCtx } from '@milkdown/core';
import type { Ctx } from '@milkdown/ctx';

import { getLinkHrefInRange, getSelectionLinkRange, normalizeHref } from '../utils/linkUtils';

export type LinkEditorState = {
  from: number;
  to: number;
  href: string;
  hasSelection: boolean;
};

type ExecuteInEditor = (fn: (ctx: Ctx) => void) => void;

type UseRichTextLinkEditorParams = {
  disabled: boolean;
  executeInEditor: ExecuteInEditor;
};

export const useRichTextLinkEditor = ({ disabled, executeInEditor }: UseRichTextLinkEditorParams) => {
  const [linkEditorOpen, setLinkEditorOpen] = useState(false);
  const [linkEditorState, setLinkEditorState] = useState<LinkEditorState | null>(null);

  const closeLinkEditor = () => {
    setLinkEditorOpen(false);
    setLinkEditorState(null);
  };

  // Åpner lenkeeditor med riktig område og eksisterende href fra gjeldende selection.
  const openLinkEditor = () => {
    executeInEditor((ctx) => {
      const view = ctx.get(editorViewCtx);
      const range = getSelectionLinkRange(view.state);
      const href = getLinkHrefInRange(view.state, range.from, range.to);
      const hasSelection = range.from !== range.to || Boolean(href);

      setLinkEditorState({ from: range.from, to: range.to, href, hasSelection });
      setLinkEditorOpen(true);
    });
  };

  // Oppdaterer lenke i valgt område (fjerner gammel og legger til ny med normalisert href).
  const handleLinkSave = (nextHref: string) => {
    if (disabled || !linkEditorState) {
      return;
    }

    executeInEditor((ctx) => {
      const view = ctx.get(editorViewCtx);
      const linkMarkType = view.state.schema.marks.link;

      if (!linkMarkType) {
        closeLinkEditor();
        return;
      }

      const href = normalizeHref(nextHref);
      const tr = view.state.tr.removeMark(linkEditorState.from, linkEditorState.to, linkMarkType);

      if (href) {
        tr.addMark(linkEditorState.from, linkEditorState.to, linkMarkType.create({ href }));
      }

      view.dispatch(tr);
      closeLinkEditor();
    });
  };

  // Fjerner lenke og lukker editoren.
  const handleLinkRemove = () => {
    if (disabled || !linkEditorState) {
      return;
    }

    executeInEditor((ctx) => {
      const view = ctx.get(editorViewCtx);
      const linkMarkType = view.state.schema.marks.link;

      if (!linkMarkType) {
        closeLinkEditor();
        return;
      }

      view.dispatch(view.state.tr.removeMark(linkEditorState.from, linkEditorState.to, linkMarkType));
      closeLinkEditor();
    });
  };

  return {
    linkEditorOpen,
    linkEditorState,
    closeLinkEditor,
    openLinkEditor,
    handleLinkSave,
    handleLinkRemove,
  };
};
