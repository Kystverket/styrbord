'use client';

import { Box } from '~/main';

export interface FormItemsProps {
  className?: string;
  children?: React.ReactNode;
}

export function FormItems({ className, children }: FormItemsProps) {
  return (
    <Box gap={24} className={className}>
      {children}
    </Box>
  );
}
