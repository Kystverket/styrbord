import { useState } from 'react';
import { editorViewCtx } from '@milkdown/core';
import type { Ctx } from '@milkdown/ctx';

import type { BlockType } from '../components/Toolbar/toolbar';

export type ToolbarState = {
  isBoldActive: boolean;
  isItalicActive: boolean;
  isBulletListActive: boolean;
  isOrderedListActive: boolean;
  selectedFormat: BlockType;
  isLinkActive: boolean;
};

const INITIAL_TOOLBAR_STATE: ToolbarState = {
  isBoldActive: false,
  isItalicActive: false,
  isBulletListActive: false,
  isOrderedListActive: false,
  selectedFormat: 'paragraph',
  isLinkActive: false,
};

const isSameToolbarState = (a: ToolbarState, b: ToolbarState) => {
  return (
    a.isBoldActive === b.isBoldActive &&
    a.isItalicActive === b.isItalicActive &&
    a.isBulletListActive === b.isBulletListActive &&
    a.isOrderedListActive === b.isOrderedListActive &&
    a.selectedFormat === b.selectedFormat &&
    a.isLinkActive === b.isLinkActive
  );
};

export const useRichTextToolbarState = () => {
  const [toolbarState, setToolbarState] = useState<ToolbarState>(INITIAL_TOOLBAR_STATE);

  // Leser gjeldende markør/seleksjon i editoren og oppdaterer aktiv status for toolbar
  const updateToolbarState = (ctx: Ctx) => {
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

    const nextToolbarState: ToolbarState = {
      isBoldActive: hasMark(['strong']),
      isItalicActive: hasMark(['emphasis', 'em']),
      isBulletListActive: hasNode('bullet_list'),
      isOrderedListActive: hasNode('ordered_list'),
      selectedFormat: hasNode('heading') ? (`h${$from.node($from.depth).attrs.level}` as BlockType) : 'paragraph',
      isLinkActive: hasMark(['link']),
    };

    setToolbarState((prev) => {
      if (isSameToolbarState(prev, nextToolbarState)) {
        return prev;
      }

      return nextToolbarState;
    });
  };

  return {
    toolbarState,
    updateToolbarState,
  };
};
