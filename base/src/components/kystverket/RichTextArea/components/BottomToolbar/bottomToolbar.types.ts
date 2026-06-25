import { ReactNode } from 'react';
import { ButtonProps, IconId } from '~/main';

type BottomToolbarLeftAction = {
  id: string;
  icon: IconId;
  ariaLabel: string;
  onClick: () => void;
};

type BottomToolbarRightAction = {
  id: string;
  label: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
};

export type BottomToolbarConfig = {
  left?: BottomToolbarLeftAction[];
  right?: BottomToolbarRightAction[];
  above?: ReactNode;
  middle?: ReactNode;
};
