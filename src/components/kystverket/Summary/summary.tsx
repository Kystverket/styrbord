import { Accent, Body, Box, Title } from '~/main';
import { ContentRowProps, HeadingRowProps, SummaryRowProps, TitleRowProps, ValueRowProps } from './summary.types';
import classes from './summary.module.css';

const SummaryHeading = ({ title, editButton }: HeadingRowProps) => {
  return (
    <Box className={classes.heading} horizontal justify="between" align="center">
      <Title>{title}</Title>
      <button className={classes.editButton} onClick={editButton.onClick} aria-label={editButton.ariaLabel}>
        {editButton.label}
      </button>
    </Box>
  );
};

const SummaryTitle = ({ title }: TitleRowProps) => {
  return (
    <Accent className={classes.title} size="sm">
      {title}
    </Accent>
  );
};

const SummaryValue = ({ label, value, error = undefined }: ValueRowProps) => {
  return (
    <>
      <Body className={classes.valueLabel} strong size="sm">
        {label}
      </Body>
      <Body className={classes.valueText} size="sm">
        {value}
      </Body>
      {error && (
        <Body className={classes.valueError} size="sm">
          {error}
        </Body>
      )}
    </>
  );
};

const SummaryContent = ({ label, content, error = undefined }: ContentRowProps) => {
  return (
    <>
      <Body className={classes.contentLabel} strong size="sm">
        {label}
      </Body>
      <div className={classes.contentArea}>{content}</div>
      {error && (
        <Body className={classes.contentError} size="sm">
          {error}
        </Body>
      )}
    </>
  );
};

const SummaryRow = (props: SummaryRowProps) => {
  if ('editButton' in props) {
    return <SummaryHeading {...props} />;
  } else if ('title' in props) {
    return <SummaryTitle {...props} />;
  } else if ('value' in props) {
    return <SummaryValue {...props} />;
  } else if ('content' in props) {
    return <SummaryContent {...props} />;
  }
  return <></>;
};

export const Summary = ({ rows }: { rows: SummaryRowProps[] }) => {
  return (
    <div className={classes.grid}>
      {rows.map((row, index) => (
        <SummaryRow key={index} {...row} />
      ))}
    </div>
  );
};
