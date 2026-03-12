import { Icon } from '~/main';
import type { IconId } from '~/main';
import classes from '../RichTextArea.module.css';

const BLOCK_TYPES = ['paragraph', 'h1', 'h2', 'h3'] as const;
export type BlockType = (typeof BLOCK_TYPES)[number];

type ToolbarProps = {
  disabled?: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  isBulletListActive: boolean;
  isOrderedListActive: boolean;
  selectedFormat: BlockType;
  onBold: () => void;
  onItalic: () => void;
  onBulletList: () => void;
  onOrderedList: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onFormatChange: (format: BlockType) => void;
};

type ToolbarButtonProps = {
  label: string;
  icon: IconId;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const ToolbarButton = ({ label, icon, active, disabled, onClick }: ToolbarButtonProps) => (
  <button
    type="button"
    className={classes.toolbarButton}
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    aria-pressed={active}
  >
    <Icon material={icon} size="sm" />
  </button>
);

export const Toolbar = ({
  disabled = false,
  isBoldActive,
  isItalicActive,
  isBulletListActive,
  isOrderedListActive,
  selectedFormat,
  onBulletList,
  onOrderedList,
  onBold,
  onItalic,
  onUndo,
  onRedo,
  onFormatChange,
}: ToolbarProps) => {
  return (
    <div className={classes.toolbar} role="toolbar" aria-label="Rich text formatting">
      <div className={classes.toolbarGroup}>
        <ToolbarButton label="Bold" icon="format_bold" active={isBoldActive} disabled={disabled} onClick={onBold} />
        <ToolbarButton
          label="Italic"
          icon="format_italic"
          active={isItalicActive}
          disabled={disabled}
          onClick={onItalic}
        />
        <ToolbarButton
          label="Bullet List"
          icon="format_list_bulleted"
          active={isBulletListActive}
          disabled={disabled}
          onClick={onBulletList}
        />
        <ToolbarButton
          label="Ordered List"
          icon="format_list_numbered"
          active={isOrderedListActive}
          disabled={disabled}
          onClick={onOrderedList}
        />
        <select
          className={classes.toolbarSelect}
          disabled={disabled}
          aria-label="Heading levels"
          value={selectedFormat}
          onChange={(e) => {
            const v = e.target.value;
            if (BLOCK_TYPES.includes(v as BlockType)) onFormatChange(v as BlockType);
          }}
        >
          <option value="paragraph">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>
      </div>
      <div className={classes.toolbarGroup}>
        <ToolbarButton label="Undo" icon="undo" disabled={disabled} onClick={onUndo} />
        <ToolbarButton label="Redo" icon="redo" disabled={disabled} onClick={onRedo} />
      </div>
    </div>
  );
};
