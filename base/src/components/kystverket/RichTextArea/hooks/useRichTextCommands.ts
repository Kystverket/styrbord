import { commandsCtx, editorViewCtx } from '@milkdown/core';
import type { Editor } from '@milkdown/core';
import type { Ctx } from '@milkdown/ctx';
import { liftListItemCommand, turnIntoTextCommand, wrapInHeadingCommand } from '@milkdown/preset-commonmark';

import type { ToolbarCommand } from '../richTextArea.types';
import type { BlockType } from '../components/Toolbar/toolbar';

type UseRichTextCommandsParams = {
  disabled: boolean;
  get: () => Editor | undefined;
  updateToolbarState: (ctx: Ctx) => void;
};

type UseRichTextCommandsReturn = {
  executeInEditor: (fn: (ctx: Ctx) => void) => void;
  runCommand: <T>(command: ToolbarCommand<T>) => void;
  runCommands: (commandsToRun: ToolbarCommand<unknown>[]) => void;
  toggleList: (params: {
    isTargetListActive: boolean;
    isOtherListActive: boolean;
    wrapCommand: ToolbarCommand<unknown>;
  }) => void;
  handleFormatChange: (format: BlockType) => void;
};

export const useRichTextCommands = ({
  disabled,
  get,
  updateToolbarState,
}: UseRichTextCommandsParams): UseRichTextCommandsReturn => {
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
  const runCommand = <T>(command: ToolbarCommand<T>) => {
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

  // Håndterer toggling av listeformatering.
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
      runCommand({ key: wrapInHeadingCommand.key, value: Number.parseInt(format.slice(1), 10) });
    }
  };

  return {
    executeInEditor,
    runCommand,
    runCommands,
    toggleList,
    handleFormatChange,
  };
};

export {
  toggleStrongCommand,
  toggleEmphasisCommand,
  wrapInBulletListCommand,
  wrapInOrderedListCommand,
} from '@milkdown/preset-commonmark';
