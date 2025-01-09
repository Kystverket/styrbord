import { Box, Fieldset, Radio, useRadioGroup, ValidationMessage } from '~/main';
import classes from './borderedRadioGroup.module.css';
import { ReactNode } from 'react';

export interface BorderedRadioGroupProps {
  name: string;
  title: ReactNode | string;
  description?: ReactNode | string;
  value?: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  error?: string;
}

const BorderedRadioGroup = (props: BorderedRadioGroupProps) => {
  const { getRadioProps, validationMessageProps } = useRadioGroup({
    name: props.name,
    value: props.value,
    error: props.error,
    onChange: (v) => {
      props.onChange(v);
    },
  });
  return (
    <Fieldset>
      {props.title && <Fieldset.Legend>{props.title}</Fieldset.Legend>}
      {props.description && <Fieldset.Description>{props.description}</Fieldset.Description>}
      <Box horizontal gap={16} mt={12}>
        {props.options.map(({ label, value }) => (
          <div className={props.value === value ? classes.radioBoxActive : classes.radioBox}>
            <Radio label={label} {...getRadioProps(value)} />
          </div>
        ))}
      </Box>
      <ValidationMessage {...validationMessageProps} />
    </Fieldset>
  );
};

export default BorderedRadioGroup;
