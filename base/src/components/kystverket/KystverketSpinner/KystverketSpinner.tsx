import { ImageFyr } from '../Image/svgImage';
import { useTranslation } from '~/translations';
import classes from './KystverketSpinner.module.css';

type KystverketSpinnerSize = 'sm' | 'md' | 'lg';

// ImageFyr size prop maps to calc(var(--ds-size-unit) * N), unit = 0.25rem
const imageSizeMap: Record<KystverketSpinnerSize, number> = {
  sm: 12, // 3rem / 48px
  md: 16, // 4rem / 64px
  lg: 22, // 5.5rem / 88px
};

export interface KystverketSpinnerProps {
  size?: KystverketSpinnerSize;
  'aria-label'?: string;
  className?: string;
}

const KystverketSpinner = ({ size = 'md', 'aria-label': ariaLabel, className = '' }: KystverketSpinnerProps) => {
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
        <ImageFyr size={imageSizeMap[size]} className={classes.lighthouse} />
        <div className={classes.beamRight} />
      </div>
      <div className={classes.wavesContainer}>
        <svg
          className={classes.waves}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 24"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 12 C25 4, 50 20, 75 12 S125 4, 150 12 S175 20, 200 12 V24 H0 Z" />
          <path transform="translate(200, 0)" d="M0 12 C25 4, 50 20, 75 12 S125 4, 150 12 S175 20, 200 12 V24 H0 Z" />
        </svg>
      </div>
    </div>
  );
};

export default KystverketSpinner;
