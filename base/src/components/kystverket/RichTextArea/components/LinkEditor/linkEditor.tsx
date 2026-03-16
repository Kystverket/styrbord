import { Input, Popover } from '@digdir/designsystemet-react';
import { useEffect, useState } from 'react';
import { Icon } from '~/main';
import styles from './linkEditor.module.css';

type LinkEditorProps = {
  open: boolean;
  anchorId: string;
  href: string;
  hasSelection: boolean;
  onSave: (href: string) => void;
  onClose: () => void;
  onRemove: () => void;
};

const LinkEditor = ({ href, open, hasSelection, onSave, onClose, anchorId, onRemove }: LinkEditorProps) => {
  const [value, setValue] = useState(href);

  useEffect(() => {
    setValue(href);
  }, [href]);

  const handleOpenLink = () => {
    const trimmed = value.trim();
    if (!trimmed) return;

    const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

    try {
      const parsed = new URL(candidate);
      if (!['http:', 'https:'].includes(parsed.protocol)) return;
      window.open(parsed.toString(), '_blank', 'noopener,noreferrer');
    } catch {
      // Ignorer ugyldige URL-er
    }
  };

  return (
    <Popover id={anchorId} data-color="neutral" open={open} onClose={onClose}>
      {hasSelection ? (
        <div className={styles.container}>
          <button className={styles.button} type="button" onClick={handleOpenLink} aria-label="Gå til lenke">
            <Icon material="open_in_new" size="sm" />
          </button>
          <Input
            className={styles.input}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            aria-label="Lenke"
            placeholder="Fyll inn lenke"
          />
          <button className={styles.button} type="button" onClick={() => onSave(value)} aria-label="Lagre lenke">
            <Icon material="check" size="sm" />
          </button>
          <button className={styles.button} type="button" onClick={onRemove} aria-label="Fjern lenke">
            <Icon material="delete" size="sm" />
          </button>
        </div>
      ) : (
        <p className={styles.hint}>Marker tekst for å legge til lenke</p>
      )}
    </Popover>
  );
};

export default LinkEditor;
