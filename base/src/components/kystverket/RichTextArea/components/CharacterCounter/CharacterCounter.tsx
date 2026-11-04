import { useEffect, useRef, useState } from 'react';
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

// Same delays as Designsystemet's Field.Counter: Windows screen readers need a longer pause.
const getAnnounceDelay = () => (/Windows/i.test(navigator.userAgent) ? 800 : 200);
const ANNOUNCE_CLEAR_MS = 2000;

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
  const previousLabelRef = useRef(label);

  useEffect(() => {
    if (label === previousLabelRef.current) {
      return;
    }
    previousLabelRef.current = label;

    // Load and reload from `value` happen without focus in the editor, and are not announced.
    if (!focusScopeRef.current?.contains(document.activeElement)) {
      return;
    }

    const timer = setTimeout(() => setAnnouncement(label), getAnnounceDelay());
    return () => clearTimeout(timer);
  }, [label, focusScopeRef]);

  // Empty the live region again, so the same text is announced the next time it comes.
  useEffect(() => {
    if (!announcement) {
      return;
    }
    const timer = setTimeout(() => setAnnouncement(''), ANNOUNCE_CLEAR_MS);
    return () => clearTimeout(timer);
  }, [announcement]);

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
