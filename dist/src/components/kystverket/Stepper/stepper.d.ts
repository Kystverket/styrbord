import React from 'react';
export interface StepItem {
    identifier?: string;
    label: string;
}
export interface StepperProps {
    steps: StepItem[];
    step: number;
}
declare const Stepper: ({ steps, step }: StepperProps) => React.JSX.Element;
export default Stepper;
