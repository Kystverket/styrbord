import { Surface, SurfaceProps } from '~/main';
import classes from './PageHeading.module.css';
import { ReactNode } from 'react';
import { Heading } from '@digdir/designsystemet-react';

export interface PageHeadingProps {
  heading?: string;
  headingSize?: 'sm' | 'md' | 'lg' | 'xl';
  aboveSection?: ReactNode;
  rightSection?: ReactNode;
  children?: ReactNode;
  underline?: boolean;
  px?: SurfaceProps['px'];
  contentWidth?: SurfaceProps['width'];
}

export function PageHeading({
  children = undefined,
  aboveSection = undefined,
  rightSection = undefined,
  heading = undefined,
  underline = true,
  headingSize = 'xl',
  contentWidth = 'container',
  px = 4,
}: Readonly<PageHeadingProps>) {
  return (
    <div className={[classes.pageHeading, underline ? classes.hasBorder : undefined].join(' ')}>
      <Surface gap={6} width={contentWidth} px={px}>
        <Surface>{aboveSection}</Surface>
        <Surface horizontal justify="between">
          <Heading level={1} data-size={headingSize} style={{ color: 'var(--ds-color-primary-text-default)' }}>
            {heading}
          </Heading>
          <Surface>{rightSection}</Surface>
        </Surface>
      </Surface>
      <Surface width={contentWidth} px={px}>
        {children}
      </Surface>
    </div>
  );
}
