import { Icon } from '~/main';
import classes from './RichTextArea.module.css';

type ToolbarProps = {
  disabled?: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  isBulletListActive?: boolean;
  isOrderedListActive?: boolean;
  onBold: () => void;
  onItalic: () => void;
  onBulletList: () => void;
  onOrderedList: () => void;
  onUndo: () => void;
  onRedo: () => void;
};

export const Toolbar = ({
  disabled = false,
  isBoldActive,
  isItalicActive,
  isBulletListActive = false,
  isOrderedListActive = false,
  onBulletList,
  onOrderedList,
  onBold,
  onItalic,
  onUndo,
  onRedo,
}: ToolbarProps) => {
  return (
    <div className={classes.toolbar} role="toolbar" aria-label="Rich text formatting">
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
        <button
          type="button"
          className={classes.toolbarButton}
          onClick={onBulletList}
          disabled={disabled}
          aria-label="Bullet List"
          aria-pressed={isBulletListActive}
        >
          <Icon material="format_list_bulleted" size="sm" />
        </button>
        <button
          type="button"
          className={classes.toolbarButton}
          onClick={onOrderedList}
          disabled={disabled}
          aria-label="Ordered List"
          aria-pressed={isOrderedListActive}
        >
          <Icon material="format_list_numbered" size="sm" />
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
