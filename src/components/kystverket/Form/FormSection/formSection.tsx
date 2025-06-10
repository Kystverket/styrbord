'use client';

import { Accent, Body, Box, Headline } from '~/main';

import classes from './formSection.module.css';

export interface FormSectionProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  titleType?: 'accent' | 'headline';
}

export default function FormSection({ title, description, children, titleType = 'headline' }: FormSectionProps) {
  return (
    <div className={[classes.formSection, title ? classes.withTitle : ''].join(' ')}>
      {title && (
        <Box pb={24} gap={8} className={classes.spacing}>
          {titleType === 'accent' ? (
            <Accent size="md">{title}</Accent>
          ) : (
            <Headline level="3" size="sm">
              {title}
            </Headline>
          )}
          {description && <Body size="sm">{description}</Body>}
        </Box>
      )}
      <Box gap={24} className={classes.spacing}>
        {children}
      </Box>
    </div>
  );
}
