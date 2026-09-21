import { useId, type ChangeEvent, type ReactElement } from 'react';
import styles from './Switch.module.css';

export interface ConsentSwitchProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Av/på-bryteren for en samtykkekategori.
 *
 * En vanlig avkrysningsboks med `role="switch"` framfor et eget kontrollelement: da følger
 * tastaturbruk, skjermlesere og nettleserens autofyll med av seg selv, og det eneste vi
 * faktisk trenger å gjøre er å tegne den om.
 */
export function Switch({ label, description, checked, onChange }: Readonly<ConsentSwitchProps>): ReactElement {
  const id = useId();
  const descriptionId = `${id}-description`;

  return (
    <div className={styles.switch}>
      <input
        id={id}
        type="checkbox"
        role="switch"
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
