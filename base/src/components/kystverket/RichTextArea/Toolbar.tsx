import { Icon } from '~/main';
import classes from './RichTextArea.module.css';

type ToolbarProps = {
  disabled?: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  onBold: () => void;
  onItalic: () => void;
  onUndo: () => void;
  onRedo: () => void;
};

export const Toolbar = ({
  disabled = false,
  isBoldActive,
  isItalicActive,

  onBold,
  onItalic,
  onUndo,
  onRedo,
}: ToolbarProps) => {
  return (
    <div className={classes.toolbar}>
      <div className={classes.toolbarGroup}>
        <button
          type="button"
          className={classes.toolbarButton}
          onClick={onBold}
          disabled={disabled}
          aria-label="Bold"
          aria-pressed={isBoldActive}
        >
          <Icon material="format_bold" size="sm" />
        </button>
        <button
          type="button"
          className={classes.toolbarButton}
          onClick={onItalic}
          disabled={disabled}
          aria-label="Italic"
          aria-pressed={isItalicActive}
        >
          <Icon material="format_italic" size="sm" />
        </button>
      </div>
      <div className={classes.toolbarGroup}>
        <button type="button" className={classes.toolbarButton} onClick={onUndo} disabled={disabled} aria-label="Undo">
          <Icon material="undo" size="sm" />
        </button>
        <button type="button" className={classes.toolbarButton} onClick={onRedo} disabled={disabled} aria-label="Redo">
          <Icon material="redo" size="sm" />
        </button>
      </div>
    </div>
  );
};
