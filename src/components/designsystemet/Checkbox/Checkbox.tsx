import { Checkbox as DSCheckbox, CheckboxProps as DSCheckboxProps } from '@digdir/designsystemet-react';
import { FC } from 'react';
import './Checkbox.override.scss';
import { Box } from '~/main';
import classes from './Checkbox.module.scss';

export type CheckboxProps = {
  Boxed?: boolean;
} & DSCheckboxProps;

export const Checkbox: FC<CheckboxProps> = ({ Boxed, disabled, readOnly, className, ...rest }) => {
  const checkboxOverrideClasses = [className, 'override'].filter(Boolean).join(' ');

  //logic: Error boolean blir satt i aria-invalid, ikke "error"
  const error = rest['aria-invalid'] || false;

  const classList = [classes.boxed];

  //Logic: Kun en av disse stylene vil være på om gangen.
  if (error) classList.push(classes.error);
  else if (readOnly) classList.push(classes.readOnly);
  else if (disabled) classList.push(classes.disabled);
  else classList.push(classes.default);

  const checkbox = <DSCheckbox readOnly={readOnly} disabled={disabled} {...rest} className={checkboxOverrideClasses} />;

  if (Boxed)
    return (
      <Box className={classList.join(' ')} border="md">
        {checkbox}
      </Box>
    );
  else return checkbox;
};
