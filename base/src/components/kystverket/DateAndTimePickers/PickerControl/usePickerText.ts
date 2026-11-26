import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from '~/translations';
import type { PickerControlProps } from './PickerControl';
import type { PickerKind } from './pickerKinds';

interface UsePickerTextOptions {
  kind: PickerKind;
  /** Shown in the field. For a time, only the time of day is used. */
  value: Date | undefined;
  min?: Date;
  max?: Date;
  disabled?: boolean;
  readOnly?: boolean;
  /**
   * A complete, valid value as the kind parses it (a date at midnight, or a time on 1 Jan 1970),
   * or `undefined` when the field is emptied or turns out invalid on blur.
   */
  onChange: (value: Date | undefined) => void;
  onBlur?: () => void;
}

/** The text as it is shown once the field loses focus (`final`), or as far as it is settled while typing. */
const normalize = (kind: PickerKind, raw: string, final: boolean): string => kind.normalize(raw.trim(), final);

/**
 * State and handlers for one masked picker text field: what's typed, the built-in error, and
 * the hidden native input behind the button. Render the result with `<PickerControl {...control} />`
 * inside a `Field`, and show `error` (unless the app passes its own) in that Field.
 */
export const usePickerText = ({
  kind,
  value,
  min,
  max,
  disabled,
  readOnly,
  onChange,
  onBlur,
}: UsePickerTextOptions) => {
  const { t } = useTranslation();
  const textRef = useRef<HTMLInputElement>(null);
  const nativeRef = useRef<HTMLInputElement>(null);
  /** What had focus when the picker was opened, and whether it was opened with the mouse. */
  const openerRef = useRef<HTMLElement | null>(null);
  const openedWithPointerRef = useRef(false);

  // After a pick made with the mouse, the browser keeps the button's :hover from where the click
  // was until the mouse really moves, so it looked held down after the popup closed. `picked`
  // holds the hover style off until then (see PickerControl.module.css).
  const [picked, setPicked] = useState(false);
  useEffect(() => {
    if (!picked) return;
    const onMove = (e: PointerEvent) => {
      // A synthetic move from the browser (same spot) would bring the stale hover straight back
      if (e.movementX !== 0 || e.movementY !== 0) setPicked(false);
    };
    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, [picked]);

  const [text, setText] = useState(() => kind.format(value));
  const [error, setError] = useState<string>();

  // Dropping a typed character replaces the input's value, which would throw the caret to the
  // end; the change handler stores where it belongs and this puts it back after render.
  const caretRef = useRef<number | null>(null);
  useLayoutEffect(() => {
    if (caretRef.current === null) return;
    textRef.current?.setSelectionRange(caretRef.current, caretRef.current);
    caretRef.current = null;
  });

  // Follow `value` when it changes from outside, but leave the text alone when the change is
  // just the parent echoing back what was typed — otherwise typing would be reformatted mid-edit.
  const [prevValue, setPrevValue] = useState(value);
  if (value?.getTime() !== prevValue?.getTime()) {
    setPrevValue(value);
    if (kind.format(value) !== kind.format(kind.parse(normalize(kind, text, false)))) {
      setText(kind.format(value));
      setError(undefined);
    }
  }

  const validate = (raw: string): { parsed: Date | undefined; error: string | undefined } => {
    const trimmed = raw.trim();
    if (trimmed === '') return { parsed: undefined, error: undefined };
    const parsed = kind.parse(trimmed);
    if (!parsed) {
      // Right shape but no such date/time (33.09.2001, 25:00) gets its own message
      const key = kind.pattern.test(trimmed) ? kind.invalidValueKey : 'invalidFormat';
      return { parsed: undefined, error: t(`${kind.ns}.${key}`) };
    }
    if (min && kind.compare(parsed, min) < 0) {
      return { parsed: undefined, error: t(`${kind.ns}.beforeMin`, { [kind.limitParam]: kind.format(min) }) };
    }
    if (max && kind.compare(parsed, max) > 0) {
      return { parsed: undefined, error: t(`${kind.ns}.afterMax`, { [kind.limitParam]: kind.format(max) }) };
    }
    return { parsed, error: undefined };
  };

  const onTextKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Mobile keyboards often report "Unidentified" here; the filter in onTextChange covers those and paste.
    if (e.key.length === 1 && !kind.allowedKey.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
    }
  };

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Only drops what can't be typed (and maps separators); the layout waits for blur, so the
    // text never changes under the caret while typing.
    const input = e.target;
    const caret = input.selectionStart ?? input.value.length;
    const kept = kind.keep(input.value);
    caretRef.current = kind.keep(input.value.slice(0, caret)).length;
    setText(kept);

    // Only report complete, valid values while typing; a half-typed one must not wipe the value.
    const result = validate(normalize(kind, kept, false));
    if (result.error) return;
    setError(undefined);
    if (kind.format(result.parsed) !== kind.format(value)) onChange(result.parsed);
  };

  const onTextBlur = () => {
    const normalized = normalize(kind, text, true);
    const result = validate(normalized);
    setError(result.error);
    if (result.error) {
      if (value) onChange(undefined);
      setText(normalized);
    } else {
      setText(kind.format(result.parsed));
      // Some input only becomes a value on blur (a two-digit year), so report it here too
      if (kind.format(result.parsed) !== kind.format(value)) onChange(result.parsed);
    }
    onBlur?.();
  };

  const onNativeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsed = kind.fromNative(e.target.value);
    setText(kind.format(parsed));
    setError(undefined);
    onChange(parsed);
    // Never move focus to the text field. Opened from the keyboard, focus stays on the button.
    // Opened with the mouse, the button only has focus because it was clicked, and keeping it
    // there leaves it looking pressed after the popup closes, so let go of it.
    const focused = document.activeElement;
    if (openedWithPointerRef.current) {
      setPicked(true);
      if (focused === e.target || focused === openerRef.current) (focused as HTMLElement).blur();
    } else if (focused === e.target) {
      // The fallback in onOpen focused this invisible input; hand focus back
      e.target.blur();
      openerRef.current?.focus();
    }
  };

  const onOpen = (e: MouseEvent<HTMLButtonElement>) => {
    if (readOnly) return;
    const native = nativeRef.current;
    if (!native) return;
    if (!native.value && kind.seedNative) native.value = kind.seedNative(text.trim());
    // A click from Enter/Space has detail 0
    openedWithPointerRef.current = e.detail > 0;
    setPicked(false);
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    try {
      native.showPicker();
    } catch {
      // showPicker is missing in older browsers and throws in cross-origin iframes
      native.focus();
      native.click();
    }
  };

  const control: PickerControlProps = {
    kind,
    textRef,
    nativeRef,
    text,
    nativeValue: kind.toNative(value),
    nativeMin: kind.toNative(min),
    nativeMax: kind.toNative(max),
    placeholder: t(`${kind.ns}.placeholder`),
    openLabel: t(`${kind.ns}.open`),
    disabled,
    readOnly,
    onTextKeyDown,
    onTextChange,
    onTextBlur,
    onNativeChange,
    onOpen,
    picked,
  };

  return { error, control };
};
