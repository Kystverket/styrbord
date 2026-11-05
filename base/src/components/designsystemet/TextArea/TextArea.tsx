import { useId, useRef } from 'react';
import { Textfield as DsTextField, ValidationMessage } from '@digdir/designsystemet-react';
import { Surface, LabelContent } from '~/main';
import { CharacterCounter } from '~/components/shared/CharacterCounter/CharacterCounter';
import { InputSize, inputWidthClass } from '~/utils/input/input';
import classes from './TextArea.module.scss';

export const Textfield = null;

export interface TextAreaProps {
  optional?: boolean | string | undefined;
  required?: boolean | string | undefined;
  className?: string;
  placeholder?: string;
  label?: string;
  description?: string | React.ReactNode;
  value: string | null | undefined;
  onBlur?: () => void;
  onChange?: (value: string) => void;
  error?: string | boolean | null;
  disabled?: boolean;
  readOnly?: boolean;
  inputMode?: 'email' | 'tel' | 'search' | 'text' | 'none' | 'url' | 'numeric' | 'decimal';
  maxLength?: number;
  minHeight?: 'sm' | 'md' | 'lg';
  width?: InputSize;
  id?: string;
}

export const TextArea = ({
  width = 'full',
  className,
  label,
  required,
  optional,
  onChange,
  value,
  maxLength,
  minHeight = 'md',
  error,
  ...props
}: TextAreaProps) => {
  const counterId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <Surface gap={2} ref={wrapperRef}>
      <DsTextField
        className={`${classes.textArea} ${classes[minHeight]} ${className} ${inputWidthClass(width)}`}
        label={<LabelContent text={label} required={required} optional={optional} />}
        value={value ?? ''}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
        maxLength={maxLength}
        multiline
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={maxLength === undefined ? undefined : counterId}
        {...props}
      />
      {maxLength !== undefined && (
        <CharacterCounter
          id={counterId}
          count={(value ?? '').length}
          maxLength={maxLength}
          focusScopeRef={wrapperRef}
        />
      )}
      {typeof error === 'string' && <ValidationMessage>{error}</ValidationMessage>}
    </Surface>
  );
};
