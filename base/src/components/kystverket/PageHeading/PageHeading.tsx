import { Box } from '~/main';
import classes from './PageHeading.module.css';
import { ReactNode } from 'react';
import { Heading } from '@digdir/designsystemet-react';
import { Spacing } from '../Box/box.types';

export interface PageHeadingProps {
  heading?: string;
  headingSize?: 'sm' | 'md' | 'lg' | 'xl';
  aboveSection?: ReactNode;
  rightSection?: ReactNode;
  children?: ReactNode;
  underline?: boolean;
  px?: Spacing;
  contentWidth?: 'container' | 'full' | 'form' | 'fit';
}

export function PageHeading({
  children = undefined,
  aboveSection = undefined,
  rightSection = undefined,
  heading = undefined,
  underline = true,
  headingSize = 'xl',
  contentWidth = 'container',
  px = 16,
}: Readonly<PageHeadingProps>) {
  return (
    <div className={[classes.pageHeading, underline ? classes.hasBorder : undefined].join(' ')}>
      <Box gap={24} width={contentWidth} px={px}>
        <Box>{aboveSection}</Box>
        <Box horizontal justify="between">
          <Heading level={1} data-size={headingSize} style={{ color: 'var(--ds-color-primary-text-default)' }}>
            {heading}
          </Heading>
          <Box>{rightSection}</Box>
        </Box>
      </Box>
      <Box width={contentWidth} px={px}>
        {children}
      </Box>
    </div>
  );
}
