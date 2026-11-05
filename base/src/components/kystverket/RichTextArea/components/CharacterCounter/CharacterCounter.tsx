import { useEffect, useState } from 'react';
import type { ReactElement, RefObject } from 'react';

import { ValidationMessage } from '~/main';
import { useTranslation } from '~/translations';
import classes from './CharacterCounter.module.css';

type CharacterCounterProps = {
  id: string;
  count: number;
  maxLength: number;
  /** The counter only announces changes while focus is inside this element, i.e. while the user edits. */
  focusScopeRef: RefObject<HTMLElement | null>;
};

// Pause in typing before the count is read aloud.
const ANNOUNCE_DELAY_MS = 500;

/**
 * Field.Counter reads `input.value`, so it cannot count a contenteditable. This copies its behaviour:
 * the same texts as TextArea, danger styling over the limit, and a debounced polite announcement.
 */
export const CharacterCounter = ({ id, count, maxLength, focusScopeRef }: CharacterCounterProps): ReactElement => {
  const { scopedT } = useTranslation();
  const t = scopedT('textArea');

  const remaining = maxLength - count;
  const isOver = remaining < 0;
  const label = isOver
    ? t('charactersOver').replace('{count}', String(-remaining))
    : t('charactersRemaining').replace('{count}', String(remaining));

  const [announcement, setAnnouncement] = useState('');

  // Read the count aloud after a pause in typing, not on every keystroke. Mount, load and reload from
  // `value` happen without focus in the editor, so they stay silent.
  useEffect(() => {
    if (!focusScopeRef.current?.contains(document.activeElement)) {
      return;
    }
    const timer = setTimeout(() => setAnnouncement(label), ANNOUNCE_DELAY_MS);
    return () => clearTimeout(timer);
  }, [label, focusScopeRef]);

  return (
    <>
      <ValidationMessage id={id} className={[classes.counter, !isOver && classes.under].filter(Boolean).join(' ')}>
        {label}
      </ValidationMessage>
      <div aria-live="polite" className="ds-sr-only">
        {announcement}
      </div>
    </>
  );
};
