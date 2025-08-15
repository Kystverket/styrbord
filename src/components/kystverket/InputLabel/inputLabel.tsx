import { ReactNode } from 'react';
import style from './inputLabel.module.css';
import { Body, Label } from '../Typography/typography';
import Box from '../Box/box';
import { Spinner, Tag } from '~/main';

export interface InputLabelProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  text?: string | null;
  subText?: ReactNode | string | null;
  children?: ReactNode;
  embedded?: boolean;
  loading?: boolean;
}

const InputLabel = ({
  text,
  subText,

  loading = false,
  optional = false,
  required = false,
  embedded = false,
  children,
}: InputLabelProps) => {
  if (!text && !children) return null;

  if (!text && children)
    return (
      <label className={style.content}>
        <div>{children}</div>
      </label>
    );

  const requiredText = typeof required === 'string' ? required : undefined;
  const optionalText = typeof optional === 'string' ? optional : undefined;

  return (
    <label className={style.content}>
      <Box gap={8}>
        <Box gap={0} mb={children || embedded ? 0 : 8}>
          <Box horizontal align="center">
            <Label inline size="md" strong>
              {text}
              {loading && <Spinner aria-label="spinning" data-size="xs" className={style.loading} />}
              {required && requiredText && (
                <Tag className={style.spacing} data-color="warning">
                  {requiredText ?? 'Må fylles ut'}
                </Tag>
              )}
              {required && !requiredText && <span className={style.requiredStar}>*</span>}
              {optional && <Tag className={style.spacing}>{optionalText ?? 'Valgfritt'}</Tag>}
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
