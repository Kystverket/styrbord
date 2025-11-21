import React from 'react';
import cls from './stepper.module.css';
import { Icon, IconId } from '~/main';

export const stepItemColorOptions = ['auto', 'primary', 'accent', 'neutral', 'success', 'danger', 'error', 'info'];
export type StepItemColor = (typeof stepItemColorOptions)[number];

export interface StepItem {
  identifier?: string;
  label: string;
  icon?: IconId | 'index' | 'auto';
  'data-color'?: StepItemColor;
  style?: 'auto' | 'filled' | 'subtle' | 'outline';
  onClick?: (item: StepItem) => void;
}

interface StepItemProps extends StepItem {
  placement: 'before' | 'current' | 'after';
  index: number;
  labels: 'always' | 'never';
}

export interface StepperProps {
  steps: StepItem[];
  step: number;
  labels?: 'always' | 'current' | 'never';
  orientation?: 'horizontal' | 'vertical';
  forceOrientation?: boolean;
}

const StepItem = ({
  identifier,
  placement,
  icon = 'auto',
  'data-color': dataColor = 'auto',
  style = 'auto',
  label,
  labels,
  onClick,
  index,
}: StepItemProps) => {
  const autoColor = placement === 'current' || onClick ? 'primary' : 'neutral';
  if (dataColor === 'auto') dataColor = autoColor;

  const autoStyle = placement === 'before' ? 'outline' : placement === 'current' ? 'filled' : 'outline';
  if (style === 'auto') style = autoStyle;

  let iconContent = <span>{index}</span>;
  if (icon === 'auto') {
    iconContent = placement === 'before' ? <Icon material="check" /> : <span>{index}</span>;
  } else if (icon === 'index') {
    iconContent = <span>{index}</span>;
  } else {
    iconContent = <Icon material={icon} />;
  }

  const content = (
    <>
      <span className={cls.icon}>{iconContent}</span>
      {labels === 'always' && <span className={cls.label}>{label}</span>}
    </>
  );

  const classNames = [cls.step, cls[`is-${placement}`], cls[`has-style-${style}`], onClick ? cls.clickable : ''].join(
    ' ',
  );

  if (onClick) {
    return (
      <button
        type="button"
        title={label}
        data-color={dataColor}
        className={classNames}
        onClick={() =>
          onClick({
            identifier,
            label,
          })
        }
      >
        {content}
      </button>
    );
  }

  return (
    <span data-color={dataColor} className={classNames} title={label}>
      {content}
    </span>
  );
};

const calcPlacement = (currentStep: number, currentStepItemIndex: number) => {
  if (currentStepItemIndex < currentStep) return 'before';
  if (currentStepItemIndex > currentStep) return 'after';
  return 'current';
};

const Stepper = ({
  steps,
  step,
  labels = 'always',
  orientation = 'horizontal',
  forceOrientation = false,
}: StepperProps) => {
  return (
    <div className={[cls['step-outer-container']].join(' ')}>
      <div
        className={[
          cls['step-container'],
          cls[`orientation-${orientation}`],
          cls[`orientation-${forceOrientation ? 'forced' : 'auto'}`],
        ].join(' ')}
      >
        {steps
          .map<Omit<StepItemProps, 'labels'>>((item, index) => {
            return {
              ...item,
              index: index + 1,
              placement: calcPlacement(step, index),
            };
          })
          .map<StepItemProps>((item) => {
            return {
              ...item,
              labels: labels === 'current' ? (item.placement === 'current' ? 'always' : 'never') : labels,
            };
          })
          .map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && <span className={[cls.divider].join(' ')} />}
              <StepItem {...item} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Stepper;
