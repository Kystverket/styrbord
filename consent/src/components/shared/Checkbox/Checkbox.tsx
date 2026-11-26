import { useId, type ChangeEvent, type ReactElement } from 'react';
import styles from './Checkbox.module.css';

export interface ConsentCheckboxProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Avkrysningsboksen for en samtykkekategori.
 *
 * Avkrysningsboks og ikke bryter, slik Designsystemet anbefaler: en bryter sier at endringen
 * skjer med en gang, mens samtykket her først lagres når brukeren trykker «Lagre valg».
 *
 * Et vanlig `<input type="checkbox">` med `appearance: none`, så tastaturbruk og skjermlesere
 * følger med av seg selv og det eneste vi gjør er å tegne den om.
 */
export function Checkbox({ label, description, checked, onChange }: Readonly<ConsentCheckboxProps>): ReactElement {
  const id = useId();
  const descriptionId = `${id}-description`;

  return (
    <div className={styles.checkbox}>
      <input
        id={id}
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        aria-describedby={description ? descriptionId : undefined}
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {description && (
        <p id={descriptionId} className={styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}
