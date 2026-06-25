import { Button, IconButton, Icon } from '~/main';
import type { IconId } from '~/main';
import styles from './toolbar.module.css';

const BLOCK_TYPES = ['paragraph', 'h1', 'h2', 'h3'] as const;
export type BlockType = (typeof BLOCK_TYPES)[number];

const FORMAT_LABELS: Record<BlockType, string> = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
};

type ToolbarProps = {
  disabled?: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  isBulletListActive: boolean;
  isOrderedListActive: boolean;
  isLinkActive: boolean;
  selectedFormat: BlockType;
  linkPopoverTarget?: string;

  onBold: () => void;
  onItalic: () => void;
  onBulletList: () => void;
  onOrderedList: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onFormatChange: (format: BlockType) => void;
  onLink: () => void;
};

type ToolbarButtonProps = {
  id?: string;
  popoverTarget?: string;
  label: string;
  icon: IconId;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const ToolbarButton = ({ id, popoverTarget, label, icon, active, disabled, onClick }: ToolbarButtonProps) => (
  <IconButton
    id={id}
    variant="ghost"
    color="neutral"
    size="sm"
    onClick={onClick}
    disabled={disabled}
    popoverTarget={popoverTarget}
    className={styles.toolbarButton}
    aria-label={label}
    aria-pressed={active}
  >
    <Icon material={icon} size="sm" />
  </IconButton>
);

type FormatSelectProps = {
  disabled?: boolean;
  selectedFormat: BlockType;
  onFormatChange: (format: BlockType) => void;
};

const FormatSelect = ({ disabled, selectedFormat, onFormatChange }: FormatSelectProps) => (
  <div className={styles.formatField}>
    <Button
      aria-hidden
      tabIndex={-1}
      variant="ghost"
      color="neutral"
      size="sm"
      disabled={disabled}
      className={styles.formatButton}
    >
      {FORMAT_LABELS[selectedFormat]}
      <Icon material="keyboard_arrow_down" size="sm" />
    </Button>
    <select
      className={styles.formatSelect}
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
    </select>
  </div>
);

export const Toolbar = ({
  disabled = false,
  isBoldActive,
  isItalicActive,
  isBulletListActive,
  isOrderedListActive,
  isLinkActive,
  selectedFormat,
  linkPopoverTarget,
  onBulletList,
  onOrderedList,
  onBold,
  onItalic,
  onUndo,
  onRedo,
  onFormatChange,
  onLink,
}: ToolbarProps) => {
  return (
    <div className={styles.toolbar} role="toolbar" aria-label="Rich text formatting">
      <ToolbarButton label="Bold" icon="format_bold" active={isBoldActive} disabled={disabled} onClick={onBold} />
      <ToolbarButton
        label="Italic"
        icon="format_italic"
        active={isItalicActive}
        disabled={disabled}
        onClick={onItalic}
      />
      <div className={styles.divider} aria-hidden />
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
      <ToolbarButton
        label="Link"
        icon="link"
        active={isLinkActive}
        disabled={disabled}
        id={linkPopoverTarget}
        popoverTarget={linkPopoverTarget}
        onClick={onLink}
      />
      <div className={styles.divider} aria-hidden />
      <FormatSelect disabled={disabled} selectedFormat={selectedFormat} onFormatChange={onFormatChange} />
      <div className={styles.undoRedoGroup}>
        <ToolbarButton label="Undo" icon="undo" disabled={disabled} onClick={onUndo} />
        <ToolbarButton label="Redo" icon="redo" disabled={disabled} onClick={onRedo} />
      </div>
    </div>
  );
};
