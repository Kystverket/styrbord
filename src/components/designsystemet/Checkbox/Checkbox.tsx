import { Checkbox as DSCheckbox, CheckboxProps as DSCheckboxProps } from '@digdir/designsystemet-react';
import { FC } from 'react';
import classes from './Checkbox.module.scss';

export type CheckboxProps = DSCheckboxProps;

export const Checkbox: FC<CheckboxProps> = ({ disabled, readOnly, className, ...rest }) => {
  //logic: Error boolean blir satt i aria-invalid, ikke "error"
  const error = rest['aria-invalid'] || false;

  const classList = [className, classes.checkbox];

  //Logic: Kun en av disse stylene vil være på om gangen.
  if (error) classList.push(classes.error);
  else if (readOnly) classList.push(classes.readOnly);
  else if (disabled) classList.push(classes.disabled);
  else classList.push(classes.default);

  return <DSCheckbox readOnly={readOnly} disabled={disabled} {...rest} className={classList.join(' ')} />;
};
