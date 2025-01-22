import { Box, Fieldset, Radio, RadioGroup } from '~/main';
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
  return (
    <RadioGroup
      name={props.name}
      legend={props.title}
      description={props.description}
      error={props.error}
      value={props.value}
      onChange={props.onChange}
    >
      <Box horizontal gap={16} mt={12} wrap>
        {props.options.map(({ label, value }) => (
          <div
            onClick={() => {
              props.onChange(value);
            }}
            className={classes.radioBox + ' ' + (props.value === value ? classes.radioBoxActive : '')}
            key={label}
          >
            <Radio value={value}>{label}</Radio>
          </div>
        ))}
      </Box>
    </RadioGroup>
  );
};

export default BorderedRadioGroup;
