import { Input, Popover } from '@digdir/designsystemet-react';
import { useEffect, useState } from 'react';
import { Button, Icon } from '~/main';
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
  const [linkState, setLinkState] = useState<'empty' | 'open' | 'edit'>('empty');

  useEffect(() => {
    setValue(href);
    if (href) {
      setLinkState('open');
    } else {
      setLinkState('empty');
    }
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
      {!hasSelection && (
        <div className={styles.noSelection}>
          <Icon material="warning" />
          Marker tekst for å legge til en lenke
        </div>
      )}
      {linkState === 'empty' && hasSelection && (
        <div className={styles.container}>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSave(value);
                onClose();
              }
            }}
          />
          <Button onClick={() => onSave(value)} variant="ghost" color="primary">
            <Icon material="check" />
          </Button>
        </div>
      )}
      {linkState === 'open' && hasSelection && (
        <div className={styles.container}>
          <Button onClick={handleOpenLink} variant="ghost" color="primary">
            <Icon material="open_in_new" />
            Åpne i ny fane
          </Button>
          <span className={styles.divider} />
          <Button onClick={() => setLinkState('edit')} variant="ghost" color="primary">
            <Icon material="edit_square" />
            Rediger
          </Button>
        </div>
      )}
      {linkState === 'edit' && hasSelection && (
        <div className={styles.container}>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onSave(value);
                onClose();
              }
            }}
          />
          <Button onClick={() => onSave(value)} variant="ghost" color="primary">
            <Icon material="check" />
          </Button>
          <span className={styles.divider} />
          <Button onClick={onRemove} variant="ghost" color="danger">
            <Icon material="delete" />
          </Button>
        </div>
      )}
    </Popover>
  );
};

export default LinkEditor;
