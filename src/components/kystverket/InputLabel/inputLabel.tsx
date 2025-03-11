import { ReactNode } from 'react';
import style from './inputLabel.module.css';
import { Body, Label } from '../Typography/typography';
import Box from '../Box/box';

type InputLabelFieldTag = boolean | string | undefined;

export interface InputLabelFieldProps {
  optional?: InputLabelFieldTag;
  required?: InputLabelFieldTag;
}

export interface InputLabelProps extends InputLabelFieldProps {
  text?: string | null;
  subText?: ReactNode | string | null;
  children?: ReactNode;
  embedded?: boolean;
}

const InputLabel = ({
  text,
  subText,
  optional = false,
  required = false,
  embedded = false,
  children,
}: InputLabelProps) => {
  if (!text && !children) return null;

  if (!text && children)
    return (
      <label>
        <div>{children}</div>
      </label>
    );

  const requiredText = typeof required === 'string' ? required : undefined;
  const optionalText = typeof optional === 'string' ? optional : undefined;

  return (
    <label>
      <Box gap={8}>
        <Box gap={0} mb={children || embedded ? 0 : 8}>
          <Box horizontal align="start">
            <Label inline size="md" strong>
              {text}
              {required && requiredText && (
                <Label inline size="sm" className={style.required}>
                  {requiredText ?? 'Må fylles ut'}
                </Label>
              )}
              {required && !requiredText && <span className={style.requiredStar}>*</span>}
              {optional && (
                <Label inline size="sm" className={style.optional}>
                  {optionalText ?? 'Valgfritt'}
                </Label>
              )}
            </Label>
          </Box>
          {subText && <Body size="sm">{subText}</Body>}
        </Box>
        {children && <div>{children}</div>}
      </Box>
    </label>
  );
};

export default InputLabel;
