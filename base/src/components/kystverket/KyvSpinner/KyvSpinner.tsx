import { ImageFyr } from '../Image/svgImage';
import { useTranslation } from '~/translations';
import classes from './KyvSpinner.module.css';

type KyvSpinnerSize = 'sm' | 'md' | 'lg';

export interface KyvSpinnerProps {
  size?: KyvSpinnerSize;
  'aria-label'?: string;
  className?: string;
}

const KyvSpinner = ({ size = 'md', 'aria-label': ariaLabel, className = '' }: KyvSpinnerProps) => {
  const { t } = useTranslation();
  return (
    <div
      role="status"
      aria-label={ariaLabel ?? t('loading')}
      className={[classes.container, classes[size], className].join(' ')}
    >
      <div className={classes.row}>
        <div className={classes.flash} />
        <div className={classes.beamLeft} />
        <ImageFyr className={classes.lighthouse} />
        <div className={classes.beamRight} />
      </div>
    </div>
  );
};

export default KyvSpinner;
