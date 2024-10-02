import { ReactNode } from 'react';
import typography from './typography.module.css';
import { getBodyClasses, getLabelClasses, getTitleClasses, Tint } from './typography.util';

export interface TypographyProps {
  className?: string;
  tint?: Tint;
  children?: ReactNode | undefined;
}

export type HeaderTypographyProps = TypographyProps & {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({ level, children, ...props }: HeadingProps & HeaderTypographyProps) => {
  switch (level) {
    case '1':
      return <h1 {...props}>{children}</h1>;
    case '2':
      return <h2 {...props}>{children}</h2>;
    case '3':
      return <h3 {...props}>{children}</h3>;
    case '4':
      return <h4 {...props}>{children}</h4>;
    case '5':
      return <h5 {...props}>{children}</h5>;
    case '6':
      return <h6 {...props}>{children}</h6>;
    default:
      return <h1 {...props}>{children}</h1>;
  }
};

/*
  Display
*/

const DisplayLarge = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.displayLg, props)}>
      {props.children}
    </Heading>
  );
};

const DisplayMedium = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.displayMd, props)}>
      {props.children}
    </Heading>
  );
};

const DisplaySmall = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.displaySm, props)}>
      {props.children}
    </Heading>
  );
};

export const Display = {
  Large: DisplayLarge,
  Medium: DisplayMedium,
  Small: DisplaySmall,
};

/*
  Headline
*/

const HeadlineLarge = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.headlineLg, props)}>
      {props.children}
    </Heading>
  );
};

const HeadlineMedium = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.headlineMd, props)}>
      {props.children}
    </Heading>
  );
};

const HeadlineSmall = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.headlineSm, props)}>
      {props.children}
    </Heading>
  );
};

export const Headline = {
  Large: HeadlineLarge,
  Medium: HeadlineMedium,
  Small: HeadlineSmall,
};

/*
  Title
*/

const TitleLarge = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.titleLg, props)}>
      {props.children}
    </Heading>
  );
};

const TitleMedium = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.titleMd, props)}>
      {props.children}
    </Heading>
  );
};

const TitleSmall = (props: HeaderTypographyProps) => {
  return (
    <Heading level={props.level} className={getTitleClasses(typography.titleSm, props)}>
      {props.children}
    </Heading>
  );
};

export const Title = {
  Large: TitleLarge,
  Medium: TitleMedium,
  Small: TitleSmall,
};

/*
  Body
*/

const BodyLarge = (props: TypographyProps) => {
  return <p className={getBodyClasses(typography.bodyLg, props)}>{props.children}</p>;
};

const BodyMedium = (props: TypographyProps) => {
  return <p className={getBodyClasses(typography.bodyMd, props)}>{props.children}</p>;
};

const BodySmall = (props: TypographyProps) => {
  return <p className={getBodyClasses(typography.bodySm, props)}>{props.children}</p>;
};

const BodyStrongLarge = (props: TypographyProps) => {
  return <p className={getBodyClasses(typography.bodyStrongLg, props)}>{props.children}</p>;
};

const BodyStrongMedium = (props: TypographyProps) => {
  return <p className={getBodyClasses(typography.bodyStrongMd, props)}>{props.children}</p>;
};

const BodyStrongSmall = (props: TypographyProps) => {
  return <p className={getBodyClasses(typography.bodyStrongSm, props)}>{props.children}</p>;
};

export const Body = {
  Large: BodyLarge,
  Medium: BodyMedium,
  Small: BodySmall,
  Strong: {
    Large: BodyStrongLarge,
    Medium: BodyStrongMedium,
    Small: BodyStrongSmall,
  },
};

/*
  Label
*/

const LabelXLarge = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelXl, props)}>{props.children}</span>;
};

const LabelLarge = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelLg, props)}>{props.children}</span>;
};

const LabelMedium = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelMd, props)}>{props.children}</span>;
};

const LabelSmall = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelSm, props)}>{props.children}</span>;
};

const LabelStrongLarge = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelStrongLg, props)}>{props.children}</span>;
};

const LabelStrongXLarge = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelStrongXl, props)}>{props.children}</span>;
};

const LabelStrongMedium = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelStrongMd, props)}>{props.children}</span>;
};

const LabelStrongSmall = (props: TypographyProps) => {
  return <span className={getLabelClasses(typography.labelStrongSm, props)}>{props.children}</span>;
};

export const Label = {
  XLarge: LabelXLarge,
  Large: LabelLarge,
  Medium: LabelMedium,
  Small: LabelSmall,
  Strong: {
    XLarge: LabelStrongXLarge,
    Large: LabelStrongLarge,
    Medium: LabelStrongMedium,
    Small: LabelStrongSmall,
  },
};
