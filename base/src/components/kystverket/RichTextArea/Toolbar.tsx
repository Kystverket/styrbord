import { Icon } from '~/main';
import classes from './RichTextArea.module.css';

type ToolbarProps = {
  disabled?: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  onBold: () => void;
  onItalic: () => void;
};

export const Toolbar = ({ disabled = false, isBoldActive, isItalicActive, onBold, onItalic }: ToolbarProps) => {
  return (
    <div className={classes.toolbar}>
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
  );
};
