import type { IconId } from '~/components/kystverket/Icon/icon.types';

/**
 * What differs between the date and the time text fields. Everything else — masking, caret
 * handling, validation flow, the hidden native input — lives in usePickerText/PickerControl.
 */
export interface PickerKind {
  /** Translation namespace holding open, placeholder, invalidFormat, invalidValue, beforeMin, afterMax. */
  ns: 'datepicker' | 'timePicker' | 'dateTimePicker';
  /** Name of the interpolation parameter in beforeMin/afterMax. */
  limitParam: 'date' | 'time';
  /** Key under `ns` for "right shape, but no such date/time". */
  invalidValueKey: 'invalidDate' | 'invalidTime' | 'invalidDateTime';
  maxLength: number;
  /** Keys that may be typed besides digits. */
  allowedKey: RegExp;
  /** Maps typed separators to the real one and drops anything else. */
  keep: (text: string) => string;
  /**
   * Turns what was typed (after `keep`, trimmed) into the displayed format as far as it can, and
   * returns the rest as typed. Separators are optional, so `24122026` becomes `24.12.2026`.
   * `final` is true on blur; while typing it is false, and anything that more typing could still
   * change (a two-digit year at the end may yet get four digits) is left alone.
   */
  normalize: (text: string, final: boolean) => string;
  /** Strict shape check, used to tell "wrong format" from "no such date/time". */
  pattern: RegExp;
  /** Strict parse of the displayed format; undefined for anything else. */
  parse: (text: string) => Date | undefined;
  format: (value: Date | undefined) => string;
  /** Negative when a < b, at this kind's granularity (day or minute of day). */
  compare: (a: Date, b: Date) => number;
  nativeType: 'date' | 'time' | 'datetime-local';
  toNative: (value: Date | undefined) => string;
  fromNative: (value: string) => Date | undefined;
  /**
   * Value to put in an empty native input before opening it. For datetime-local, which has no
   * value until both date and time are set: Firefox's picker only sets the date, so picking from
   * an empty input would never fire a change.
   */
  seedNative?: (text: string) => string;
  icon: IconId;
  /**
   * `always`: the button is always shown (every browser has a native date picker).
   * `native`: only where the browser has a native picker for this type — see PickerControl.module.css.
   */
  button: 'always' | 'native';
}

const pad = (n: number, length = 2) => n.toString().padStart(length, '0');

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

const minutesOfDay = (date: Date) => date.getHours() * 60 + date.getMinutes();

const DATE_PATTERN = /^(\d{2})\.(\d{2})\.(\d{4})$/;

const digitsOf = (text: string) => text.replace(/\D/g, '');

/** 8 digits (`ddmmyyyy`) as `dd.mm.yyyy`. */
const layoutDate = (d: string) => `${d.slice(0, 2)}.${d.slice(2, 4)}.${d.slice(4)}`;

/** 4 digits (`hhmm`) as `hh:mm`. */
const layoutTime = (d: string) => `${d.slice(0, 2)}:${d.slice(2)}`;

/**
 * Four-digit year for a two-digit one: the one from 80 years back to 19 years ahead of this
 * year (1946–2045 in 2026).
 */
const expandYear = (yy: number): string => {
  const now = new Date().getFullYear();
  let year = now - (now % 100) + yy;
  if (year > now + 19) year -= 100;
  else if (year < now - 80) year += 100;
  return pad(year, 4);
};

/** `ddmmyyyy` with any separators, or `ddmmyy` / `dd.mm.yy` (on blur only), as `dd.mm.yyyy`. */
const normalizeDate = (text: string, final: boolean): string => {
  const digits = digitsOf(text);
  if (digits.length === 8) return layoutDate(digits);
  if (final && /^(\d{6}|\d{2}\.\d{2}\.\d{2})$/.test(text)) {
    return layoutDate(digits.slice(0, 4) + expandYear(Number(digits.slice(4))));
  }
  return text;
};

/** Strict `dd.mm.yyyy`. Undefined for anything else, including dates that don't exist (31.02). */
const parseDate = (text: string): Date | undefined => {
  const match = DATE_PATTERN.exec(text);
  if (!match) return undefined;
  const [day, month, year] = match.slice(1).map(Number);
  const date = new Date(year, month - 1, day);
  // new Date() rolls 31.02 over to 03.03, so a mismatch means the date doesn't exist.
  // setFullYear because the constructor maps years 0–99 to 1900–1999.
  date.setFullYear(year);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return undefined;
  return date;
};

/** `dd.mm.yyyy`. Commas count as dots: the Norwegian numpad's decimal key types a comma. */
export const dateKind: PickerKind = {
  ns: 'datepicker',
  limitParam: 'date',
  invalidValueKey: 'invalidDate',
  maxLength: 10,
  allowedKey: /[\d.,]/,
  keep: (text) => text.replace(/,/g, '.').replace(/[^\d.]/g, ''),
  normalize: normalizeDate,
  pattern: DATE_PATTERN,
  parse: parseDate,
  format: (date) => (date ? `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${pad(date.getFullYear(), 4)}` : ''),
  compare: (a, b) => startOfDay(a).getTime() - startOfDay(b).getTime(),
  nativeType: 'date',
  toNative: (date) => (date ? `${pad(date.getFullYear(), 4)}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : ''),
  fromNative: (value) => (value ? new Date(value + 'T00:00:00') : undefined),
  icon: 'calendar_month',
  button: 'always',
};

const TIME_PATTERN = /^(\d{2}):(\d{2})$/;

/** Strict `hh:mm`, 00:00–23:59, as that time on 1 Jan 1970 — only the time of day is meaningful. */
const parseTime = (text: string): Date | undefined => {
  const match = TIME_PATTERN.exec(text);
  if (!match) return undefined;
  const [hours, minutes] = match.slice(1).map(Number);
  if (hours > 23 || minutes > 59) return undefined;
  return new Date(1970, 0, 1, hours, minutes);
};

const formatTime = (date: Date | undefined) => (date ? `${pad(date.getHours())}:${pad(date.getMinutes())}` : '');

/** `hhmm` with any separators as `hh:mm`. */
const normalizeTime = (text: string): string => {
  const digits = digitsOf(text);
  return digits.length === 4 ? layoutTime(digits) : text;
};

/** `hh:mm`. Dots and commas count as colons — 14.30 is how many people write a time. */
export const timeKind: PickerKind = {
  ns: 'timePicker',
  limitParam: 'time',
  invalidValueKey: 'invalidTime',
  maxLength: 5,
  allowedKey: /[\d:.,]/,
  keep: (text) => text.replace(/[.,]/g, ':').replace(/[^\d:]/g, ''),
  normalize: normalizeTime,
  pattern: TIME_PATTERN,
  parse: parseTime,
  format: formatTime,
  compare: (a, b) => minutesOfDay(a) - minutesOfDay(b),
  nativeType: 'time',
  // <input type="time"> uses hh:mm too
  toNative: formatTime,
  fromNative: parseTime,
  icon: 'schedule',
  button: 'native',
};

const DATE_TIME_PATTERN = /^(\d{2}\.\d{2}\.\d{4}) (\d{2}:\d{2})$/;

/** Strict `dd.mm.yyyy hh:mm`. Undefined for anything else, including dates and times that don't exist. */
const parseDateTime = (text: string): Date | undefined => {
  const match = DATE_TIME_PATTERN.exec(text);
  if (!match) return undefined;
  const date = parseDate(match[1]);
  const time = parseTime(match[2]);
  if (!date || !time) return undefined;
  date.setHours(time.getHours(), time.getMinutes());
  return date;
};

const startOfMinute = (date: Date) => new Date(date).setSeconds(0, 0);

/** `dd.mm.yyyy hh:mm`, typed as one field. Commas count as dots, as for dates. */
export const dateTimeKind: PickerKind = {
  ns: 'dateTimePicker',
  limitParam: 'date',
  invalidValueKey: 'invalidDateTime',
  maxLength: 16,
  allowedKey: /[\d.,: ]/,
  keep: (text) =>
    text
      .replace(/,/g, '.')
      .replace(/[^\d.: ]/g, '')
      .replace(/ {2,}/g, ' '),
  normalize: (text, final) => {
    // A space ends the date, so it may have a two-digit year: `120901 1430`
    const space = text.indexOf(' ');
    if (space >= 0) {
      const date = normalizeDate(text.slice(0, space), true);
      const time = text.slice(space + 1).trim();
      return time ? `${date} ${normalizeTime(time)}` : date;
    }
    const digits = digitsOf(text);
    if (digits.length === 12) return `${layoutDate(digits.slice(0, 8))} ${layoutTime(digits.slice(8))}`;
    // 10 digits on blur are `ddmmyyhhmm`. Not while typing: they may be on the way to 12.
    if (final && /^\d{10}$/.test(text)) {
      return `${normalizeDate(digits.slice(0, 6), true)} ${layoutTime(digits.slice(6))}`;
    }
    if (digits.length > 8) {
      // The date and an incomplete time: show the date as dd.mm.yyyy, the rest as typed
      let end = 0;
      for (let seen = 0; seen < 8; end++) {
        if (/\d/.test(text[end])) seen++;
      }
      return `${layoutDate(digitsOf(text.slice(0, end)))} ${text.slice(end).replace(/^[.:]+/, '')}`;
    }
    return normalizeDate(text, final);
  },
  pattern: DATE_TIME_PATTERN,
  parse: parseDateTime,
  format: (date) => (date ? `${dateKind.format(date)} ${formatTime(date)}` : ''),
  compare: (a, b) => startOfMinute(a) - startOfMinute(b),
  nativeType: 'datetime-local',
  toNative: (date) => (date ? `${dateKind.toNative(date)}T${formatTime(date)}` : ''),
  // yyyy-mm-ddThh:mm without an offset parses as local time
  fromNative: (value) => (value ? new Date(value) : undefined),
  // The typed date if there is one, else today, at midnight
  seedNative: (text) => `${dateKind.toNative(parseDate(normalizeDate(text.split(' ')[0], true)) ?? new Date())}T00:00`,
  icon: 'calendar_month',
  button: 'always',
};
