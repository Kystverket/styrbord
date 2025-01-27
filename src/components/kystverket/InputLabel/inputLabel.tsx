import { ReactNode } from 'react';
import style from './inputLabel.module.css';
import { Body, Label } from '../Typography/typography';
import Box from '../Box/box';

export interface InputLabelProps {
  text?: string | null;
  subText?: ReactNode | string | null;
  optional?: boolean;
  required?: boolean;
  children?: ReactNode;
}

const InputLabel = ({ text, subText, optional = false, required = false, children }: InputLabelProps) => {
  if (!text && !children) return null;

  if (!text && children)
    return (
      <label>
        <div>{children}</div>
      </label>
    );

  return (
    <label>
      <Box gap={8}>
        <Box gap={0} mb={children ? 0 : 8}>
          <Box horizontal align="start" gap={8}>
            <Label size="md" strong>
              {text}
            </Label>
            {required && (
              <Label size="sm" className={style.required}>
                Må fylles ut
              </Label>
            )}
            {optional && (
              <Label size="sm" className={style.optional}>
                Valgfritt
              </Label>
            )}
          </Box>
          {subText && <Body size="sm">{subText}</Body>}
        </Box>
        {children && <div>{children}</div>}
      </Box>
    </label>
  );
};

export default InputLabel;
