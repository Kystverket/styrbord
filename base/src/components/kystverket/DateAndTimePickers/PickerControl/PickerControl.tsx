import { Input } from '@digdir/designsystemet-react';
import { Icon, IconButton } from '~/main';
import type { ChangeEvent, KeyboardEvent, MouseEvent, RefObject } from 'react';
import type { PickerKind } from './pickerKinds';
import styles from './PickerControl.module.css';

export interface PickerControlProps {
  kind: PickerKind;
  textRef: RefObject<HTMLInputElement | null>;
  nativeRef: RefObject<HTMLInputElement | null>;
  text: string;
  nativeValue: string;
  nativeMin: string;
  nativeMax: string;
  placeholder: string;
  openLabel: string;
  disabled?: boolean;
  readOnly?: boolean;
  onTextKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onTextChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTextBlur: () => void;
  onNativeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOpen: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Just picked with the mouse; holds off the button's stale hover. */
  picked: boolean;
}

/**
 * Masked text input + picker button + the hidden native input the button opens. Internal to the
 * pickers; get the props from `usePickerText` and render it inside a `Field` (with its `Label`).
 */
export const PickerControl = ({ kind, ...props }: PickerControlProps) => (
  <div className={styles.wrapper} data-button={kind.button} data-picked={props.picked || undefined}>
    <Input
      ref={props.textRef}
      className={styles.input}
      type="text"
      inputMode="numeric"
      autoComplete="off"
      maxLength={kind.maxLength}
      placeholder={props.placeholder}
      value={props.text}
      disabled={props.disabled}
      readOnly={props.readOnly}
      onKeyDown={props.onTextKeyDown}
      onChange={props.onTextChange}
      onBlur={props.onTextBlur}
    />
    <IconButton
      className={styles.button}
      variant="outline"
      color="neutral"
      type="button"
      disabled={props.disabled}
      tabIndex={props.readOnly ? -1 : 0}
      aria-hidden={props.readOnly}
      aria-label={props.openLabel}
      onClick={props.onOpen}
    >
      <Icon material={kind.icon} />
    </IconButton>
    {/* Only here to open the browser's picker. `hidden` keeps ds-field from treating it as the
        field's input; the CSS module overrides the display so showPicker() still works. */}
    <input
      ref={props.nativeRef}
      className={styles.nativeInput}
      type={kind.nativeType}
      hidden
      tabIndex={-1}
      aria-hidden
      value={props.nativeValue}
      min={props.nativeMin}
      max={props.nativeMax}
      disabled={props.disabled}
      onChange={props.onNativeChange}
    />
  </div>
);
