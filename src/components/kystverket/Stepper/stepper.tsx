import React from 'react';
import cls from './stepper.module.css';
import { Icon, Label } from '~/main';

export interface StepItem {
  identifier?: string;
  label: string;
}

export interface StepperProps {
  steps: StepItem[];
  step: number;
}

interface StepItemProps {
  state: 'completed' | 'incomplete' | 'current';
  label: string;
  index: number;
}

const StepItem = ({ state, label, index }: StepItemProps) => {
  return (
    <span className={cls.step + ' ' + cls[`${state}-step`]}>
      <span className={cls.icon}>
        {state === 'completed' && <Icon material="check" />}
        {state !== 'completed' && <span>{index}</span>}
      </span>
      <Label size="sm" strong className={cls.label}>
        {label}
      </Label>
    </span>
  );
};

const stateFromStep = (currentStep: number, currentStepItemIndex: number) => {
  if (currentStepItemIndex < currentStep) return 'completed';
  if (currentStepItemIndex > currentStep) return 'incomplete';
  return 'current';
};

const Stepper = ({ steps, step }: StepperProps) => {
  return (
    <div className={cls['step-outer-container']}>
      <div className={cls['step-container']}>
        {steps
          .map<StepItemProps>((item, index) => {
            return {
              ...item,
              index: index + 1,
              state: stateFromStep(step, index),
            };
          })
          .map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && <span className={[cls.divider, cls[`${item.state}-divider`]].join(' ')} />}
              <StepItem {...item} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Stepper;
