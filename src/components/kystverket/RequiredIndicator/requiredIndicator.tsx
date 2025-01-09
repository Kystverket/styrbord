import style from './requiredIndicator.module.css';

type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

const RequiredIndicator = ({ className, ...props }: SpanProps) => (
  <span {...props} className={`${style.requiredIndicator} ${className}`}>
    *
  </span>
);

export default RequiredIndicator;
