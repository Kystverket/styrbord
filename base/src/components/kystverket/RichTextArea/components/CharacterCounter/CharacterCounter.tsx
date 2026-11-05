import { useEffect, useState } from 'react';
import type { ReactElement, RefObject } from 'react';

import { ValidationMessage } from '~/main';
import { useTranslation } from '~/translations';
import classes from './CharacterCounter.module.css';

type CharacterCounterProps = {
  id: string;
  count: number;
  maxLength: number;
  focusScopeRef: RefObject<HTMLElement | null>;
};

const ANNOUNCE_DELAY_MS = 500;

export const CharacterCounter = ({ id, count, maxLength, focusScopeRef }: CharacterCounterProps): ReactElement => {
  const { scopedT } = useTranslation();
  const t = scopedT('textArea');

  const remaining = maxLength - count;
  const isOver = remaining < 0;
  const label = isOver
    ? t('charactersOver').replace('{count}', String(-remaining))
    : t('charactersRemaining').replace('{count}', String(remaining));

  const [announcement, setAnnouncement] = useState('');

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
