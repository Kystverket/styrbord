import { useRef } from 'react';
import type { KeyboardEvent, Ref } from 'react';
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
  ref?: Ref<HTMLDivElement>;
  disabled?: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  isBulletListActive: boolean;
  isOrderedListActive: boolean;
  isLinkActive: boolean;
  selectedFormat: BlockType;
  linkPopoverTarget?: string;
  canUploadImage?: boolean;
  showToolbar?: boolean;

  onBold: () => void;
  onItalic: () => void;
  onBulletList: () => void;
  onOrderedList: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onFormatChange: (format: BlockType) => void;
  onLink: () => void;
  onImageUpload?: () => void;
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
    // Mouse clicks shouldn't steal focus from the editor; keyboard activation keeps focus on the button.
    onMouseDown={(e) => e.preventDefault()}
    disabled={disabled}
    popoverTarget={popoverTarget}
    className={styles.toolbarButton}
    aria-label={label}
    aria-pressed={active}
  >
    <Icon material={icon} size="sm" />
  </IconButton>
);

// The toolbar items a keyboard user can land on: skips disabled ones, ones hidden at this width
// and the aria-hidden button behind the format select.
export const getToolbarItems = (toolbar: Element) =>
  Array.from(toolbar.querySelectorAll<HTMLElement>('button, select')).filter(
    (el) => el.tabIndex !== -1 && !el.matches(':disabled') && el.checkVisibility(),
  );

// focusgroup (native, and Designsystemet's polyfill) deliberately skips <select>, since it uses the
// arrow keys itself, so left/right would change the value instead of moving focus. Take them back and
// move along the toolbar by hand, stopping at the ends like focusgroup="toolbar"; up/down stay with the select.
const moveFocusInToolbar = (e: KeyboardEvent<HTMLSelectElement>) => {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  const toolbar = e.currentTarget.closest('[role="toolbar"]');
  if (!toolbar) return;
  e.preventDefault();

  const items = getToolbarItems(toolbar);
  const index = items.indexOf(e.currentTarget);
  const step = e.key === 'ArrowRight' ? 1 : -1;
  items[Math.max(0, Math.min(index + step, items.length - 1))]?.focus();
};

type FormatSelectProps = {
  disabled?: boolean;
  selectedFormat: BlockType;
  onFormatChange: (format: BlockType) => void;
};

const FormatSelect = ({ disabled, selectedFormat, onFormatChange }: FormatSelectProps) => (
  <div className={`${styles.formatField} ${styles.formatSelectWrapper}`}>
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
      onKeyDown={moveFocusInToolbar}
      onChange={(e) => {
        onFormatChange(e.target.value as BlockType);
      }}
    >
      {BLOCK_TYPES.map((type) => (
        <option key={type} value={type}>
          {FORMAT_LABELS[type]}
        </option>
      ))}
    </select>
  </div>
);

type FormatSelectButtonProps = {
  disabled?: boolean;
  selectedFormat: BlockType;
  onFormatChange: (format: BlockType) => void;
};

const FormatSelectButton = ({ disabled, selectedFormat, onFormatChange }: FormatSelectButtonProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <div className={`${styles.hiddenSelectField} ${styles.formatSelectButton}`}>
      <ToolbarButton
        label="Text size"
        icon="format_size"
        disabled={disabled}
        onClick={() => selectRef.current?.showPicker()}
      />
      <select
        ref={selectRef}
        className={styles.hiddenSelect}
        disabled={disabled}
        aria-label="Text size"
        value={selectedFormat}
        onChange={(e) => {
          onFormatChange(e.target.value as BlockType);
        }}
      >
        <option value="paragraph">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
      </select>
    </div>
  );
};

export const Toolbar = ({
  ref,
  disabled = false,
  isBoldActive,
  isItalicActive,
  isBulletListActive,
  isOrderedListActive,
  isLinkActive,
  selectedFormat,
  linkPopoverTarget,
  canUploadImage = false,
  onBulletList,
  onOrderedList,
  onBold,
  onItalic,
  onUndo,
  onRedo,
  onFormatChange,
  onLink,
  onImageUpload,
  showToolbar = true,
}: ToolbarProps) => {
  if (!showToolbar) return;

  return (
    <div ref={ref} focusgroup="toolbar" className={styles.toolbar} role="toolbar" aria-label="Rich text formatting">
      <ToolbarButton label="Bold" icon="format_bold" active={isBoldActive} disabled={disabled} onClick={onBold} />
      <ToolbarButton
        label="Italic"
        icon="format_italic"
        active={isItalicActive}
        disabled={disabled}
        onClick={onItalic}
      />
      <FormatSelectButton disabled={disabled} selectedFormat={selectedFormat} onFormatChange={onFormatChange} />
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
      {canUploadImage && Boolean(onImageUpload) && (
        <ToolbarButton label="Upload image" icon="image" disabled={disabled} onClick={onImageUpload || (() => {})} />
      )}
      <div className={styles.divider} aria-hidden />
      <FormatSelect disabled={disabled} selectedFormat={selectedFormat} onFormatChange={onFormatChange} />
      <div className={styles.undoRedoGroup}>
        <ToolbarButton label="Undo" icon="undo" disabled={disabled} onClick={onUndo} />
        <ToolbarButton label="Redo" icon="redo" disabled={disabled} onClick={onRedo} />
      </div>
    </div>
  );
};
