import type { EditorState } from '@milkdown/prose/state';

export const normalizeHref = (rawHref: string) => {
  const href = rawHref.trim();

  if (!href) {
    return '';
  }

  if (/^(https?:|mailto:|tel:|ftp:|\/|#|\?|\/\/)/i.test(href)) {
    return href;
  }

  return `https://${href}`;
};

export const getSelectionLinkRange = (state: EditorState) => {
  const { from, to, empty, $from } = state.selection;
  const linkMarkType = state.schema.marks.link;

  if (!linkMarkType || !empty) {
    return { from, to };
  }

  const cursorMarks = state.storedMarks ?? $from.marks();
  if (!linkMarkType.isInSet(cursorMarks)) {
    return { from, to };
  }

  let linkFrom = from;
  let linkTo = to;
  let found = false;

  const searchFrom = Math.max(0, from - 1);
  const searchTo = Math.min(state.doc.content.size, from + 1);

  state.doc.nodesBetween(searchFrom, searchTo, (node, pos) => {
    if (found || !node.isText) {
      return undefined;
    }
    if (!linkMarkType.isInSet(node.marks)) {
      return undefined;
    }
    const nodeFrom = pos;
    const nodeTo = pos + node.nodeSize;

    if (from < nodeFrom || from > nodeTo) {
      return undefined;
    }

    linkFrom = nodeFrom;
    linkTo = nodeTo;
    found = true;
    return false;
  });

  if (!found) {
    return { from, to };
  }

  while (linkFrom > 0) {
    const resolved = state.doc.resolve(linkFrom);
    const nodeBefore = resolved.nodeBefore;

    if (!nodeBefore?.isText || !linkMarkType.isInSet(nodeBefore.marks)) {
      break;
    }

    linkFrom -= nodeBefore.nodeSize;
  }

  while (linkTo < state.doc.content.size) {
    const resolved = state.doc.resolve(linkTo);
    const nodeAfter = resolved.nodeAfter;

    if (!nodeAfter?.isText || !linkMarkType.isInSet(nodeAfter.marks)) {
      break;
    }

    linkTo += nodeAfter.nodeSize;
  }

  return { from: linkFrom, to: linkTo };
};

export const getLinkHrefInRange = (state: EditorState, from: number, to: number) => {
  const linkMarkType = state.schema.marks.link;

  if (!linkMarkType) {
    return '';
  }

  let href = '';

  state.doc.nodesBetween(from, to, (node) => {
    if (href || !node.isText) {
      return undefined;
    }

    const mark = linkMarkType.isInSet(node.marks);
    if (!mark) {
      return undefined;
    }

    href = String(mark.attrs.href ?? '');
    return false;
  });

  return href;
};
