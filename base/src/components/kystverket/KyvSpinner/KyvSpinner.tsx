import { useId, type ReactElement } from 'react';
import { useTranslation } from '~/translations';
import classes from './KyvSpinner.module.css';

type KyvSpinnerSize = 'sm' | 'md' | 'lg';
type KyvSpinnerVariant = 'scene' | 'outline';

export interface KyvSpinnerProps {
  size?: KyvSpinnerSize;
  /**
   * `outline` (standard) er en strektegning på gjennomsiktig bakgrunn, i samme stil som fyr-ikonet.
   * `scene` er en fargelagt scene med himmel, hav og øy, som skifter mellom dag og natt.
   */
  variant?: KyvSpinnerVariant;
  'aria-label'?: string;
  className?: string;
}

/**
 * Bølgelinje med periode 20 (opp-og-ned) som går fra x=-40 til x=160. Den er bredere enn scenen
 * slik at den kan forskyves én periode og loope sømløst. `filled` lukker den ned til bunnen.
 */
const wave = (y: number, amplitude: number, filled = true) =>
  `M-40 ${y} q5 ${-amplitude} 10 0${' t10 0'.repeat(19)}${filled ? ' V120 H-40 Z' : ''}`;

const STARS = [
  { cx: 14, cy: 14, r: 0.9 },
  { cx: 30, cy: 26, r: 0.6 },
  { cx: 44, cy: 10, r: 0.8 },
  { cx: 22, cy: 42, r: 0.5 },
  { cx: 76, cy: 12, r: 0.6 },
  { cx: 104, cy: 40, r: 0.7 },
  { cx: 8, cy: 30, r: 0.5 },
  { cx: 108, cy: 8, r: 0.5 },
];

const Stars = (): ReactElement => (
  <>
    {STARS.map((star, i) => (
      <circle
        key={i}
        className={classes.star}
        style={{ animationDelay: `${-i * 0.7}s` }}
        cx={star.cx}
        cy={star.cy}
        r={star.r}
      />
    ))}
    <path className={classes.moon} d="M93 12 a8 8 0 0 0 0 16 a10 10 0 0 1 0 -16 Z" />
  </>
);

/** Fyrtårnet. Fyll og strek styres av variantens CSS. Lykta står i (60, 34.5). */
const Lighthouse = (): ReactElement => (
  <g className={classes.lighthouse}>
    <polygon className={classes.tower} points="55.5,40 64.5,40 67,72 53,72" />
    <polygon className={classes.stripe} points="55.03,46 64.97,46 65.52,53 54.48,53" />
    <polygon className={classes.stripe} points="54.02,59 65.98,59 66.53,66 53.47,66" />
    <rect className={classes.detail} x="59" y="54.5" width="2" height="3" rx="1" />
    <path className={classes.detail} d="M58.5 72 V68.5 a1.5 1.5 0 0 1 3 0 V72 Z" />
    <rect className={classes.lantern} x="56" y="31" width="8" height="7.5" />
    <line className={classes.mullion} x1="60" y1="31" x2="60" y2="38.5" />
    <rect className={classes.detail} x="52.5" y="38" width="15" height="2.5" rx="0.5" />
    <polygon className={classes.stripe} points="54.5,31.5 65.5,31.5 60,25" />
    <circle className={classes.stripe} cx="60" cy="24.5" r="1.2" />
  </g>
);

/**
 * Lysstrålen står alltid vannrett i lyktehøyde. Rotasjonen vises bare som lengde: scaleX følger
 * cos(vinkel), så strålen krymper når den peker mot eller bort fra betrakteren. Den tegnes to
 * ganger — én kopi bak fyret og én foran. De vises en halv runde hver og bytter når strålen er
 * fullt utstrakt til siden, der de er identiske.
 */
const Beam = ({ side, gradientId, length }: { side: 'front' | 'back'; gradientId: string; length: number }) => (
  <g className={side === 'front' ? classes.beamFront : classes.beamBack} transform="translate(60 34.5)">
    <g className={classes.beam}>
      <polygon points={`0,-0.6 ${length},-4 ${length},4 0,0.6`} fill={`url(#${gradientId})`} />
    </g>
  </g>
);

const BeamGradients = ({ beamId, glowId }: { beamId: string; glowId: string }): ReactElement => (
  <>
    <linearGradient id={beamId} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" className={classes.beamStart} />
      <stop offset="1" className={classes.beamEnd} />
    </linearGradient>
    <radialGradient id={glowId}>
      <stop offset="0" className={classes.beamStart} />
      <stop offset="1" className={classes.beamEnd} />
    </radialGradient>
  </>
);

const SceneArt = ({ id }: { id: string }): ReactElement => {
  const skyId = `kyv-spinner-sky-${id}`;
  const beamId = `kyv-spinner-beam-${id}`;
  const glowId = `kyv-spinner-glow-${id}`;

  return (
    <>
      <defs>
        <linearGradient id={skyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className={classes.skyTop} />
          <stop offset="0.7" className={classes.skyHorizon} />
        </linearGradient>
        <BeamGradients beamId={beamId} glowId={glowId} />
      </defs>

      {/* Himmel */}
      <rect width="120" height="120" fill={`url(#${skyId})`} />

      {/* Natt: stjerner og månesigd */}
      <Stars />

      {/* Dag: sol */}
      <circle className={classes.sunHalo} cx="92" cy="20" r="11" />
      <circle className={classes.sun} cx="92" cy="20" r="7" />

      {/* Skyer */}
      <g className={classes.cloud}>
        <path d="M8 30 a4 4 0 0 1 6 -4 a6 6 0 0 1 11 1 a4 4 0 0 1 3 7 h-18 a3 3 0 0 1 -2 -4 Z" />
      </g>
      <g className={`${classes.cloud} ${classes.cloudSlow}`}>
        <path d="M70 50 a3 3 0 0 1 5 -3 a5 5 0 0 1 9 1 a3 3 0 0 1 2 5 h-14 a2 2 0 0 1 -2 -3 Z" />
      </g>

      <Beam side="back" gradientId={beamId} length={100} />

      {/* Bakerste bølger, bak øya */}
      <path className={`${classes.wave} ${classes.waveBack}`} d={wave(80, 1.5)} />

      {/* Øya */}
      <path className={classes.island} d="M14 96 C26 78 42 70 60 69 C78 70 94 78 106 96 Z" />
      <path
        className={classes.grass}
        d="M28 82 C38 74 48 71 60 70.5 C72 71 82 74 92 82 C80 78 70 76 60 76 C50 76 40 78 28 82 Z"
      />

      <Lighthouse />

      <Beam side="front" gradientId={beamId} length={100} />

      {/* Blinket når strålen peker rett mot betrakteren */}
      <circle className={classes.glow} cx="60" cy="34.5" r="14" fill={`url(#${glowId})`} />

      {/* Fremre bølger, foran foten av øya */}
      <path className={`${classes.wave} ${classes.waveMid}`} d={wave(90, 2)} />
      <path className={`${classes.wave} ${classes.waveFront}`} d={wave(101, 2.5)} />
    </>
  );
};

/**
 * Strektegning. Uten fyll ville den bakre strålen synes gjennom tårnet, så den maskeres med
 * fyrets silhuett. Bølgelinjene tones ut mot kantene i stedet for å kuttes av.
 */
const OutlineArt = ({ id }: { id: string }): ReactElement => {
  const beamId = `kyv-spinner-beam-${id}`;
  const glowId = `kyv-spinner-glow-${id}`;
  const occludeId = `kyv-spinner-occlude-${id}`;
  const fadeId = `kyv-spinner-fade-${id}`;
  const fadeGradientId = `kyv-spinner-fade-gradient-${id}`;

  return (
    <>
      <defs>
        <BeamGradients beamId={beamId} glowId={glowId} />
        {/* Masker leser luminans, så hvitt = synlig og svart = skjult. */}
        <mask id={occludeId} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
          <rect width="120" height="120" fill="white" />
          <g fill="black" stroke="black" strokeWidth="1.4" strokeLinejoin="round">
            <polygon points="55.5,40 64.5,40 67,72 53,72" />
            <rect x="52.5" y="38" width="15" height="2.5" />
            <rect x="56" y="31" width="8" height="7.5" />
          </g>
        </mask>
        <linearGradient id={fadeGradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="black" />
          <stop offset="0.25" stopColor="white" />
          <stop offset="0.75" stopColor="white" />
          <stop offset="1" stopColor="black" />
        </linearGradient>
        <mask id={fadeId} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
          <rect width="120" height="120" fill={`url(#${fadeGradientId})`} />
        </mask>
      </defs>

      {/* Natt: stjerner og månesigd. Dag: sol. */}
      <Stars />
      <circle className={classes.sun} cx="92" cy="20" r="7" />

      <g mask={`url(#${occludeId})`}>
        <Beam side="back" gradientId={beamId} length={58} />
      </g>

      <g className={classes.lines}>
        <path d="M22 84 C34 74 46 70 60 69.5 C74 70 86 74 98 84" />
      </g>

      <Lighthouse />

      <Beam side="front" gradientId={beamId} length={58} />
      <circle className={classes.glow} cx="60" cy="34.5" r="12" fill={`url(#${glowId})`} />

      <g className={classes.lines} mask={`url(#${fadeId})`}>
        <path className={`${classes.wave} ${classes.waveBack}`} d={wave(84, 1.5, false)} />
        <path className={`${classes.wave} ${classes.waveMid}`} d={wave(92, 1.5, false)} />
        <path className={`${classes.wave} ${classes.waveFront}`} d={wave(100, 1.5, false)} />
      </g>
    </>
  );
};

const KyvSpinner = ({
  size = 'md',
  variant = 'outline',
  'aria-label': ariaLabel,
  className = '',
}: KyvSpinnerProps): ReactElement => {
  const { t } = useTranslation();
  // useId kan inneholde tegn (`:`, `«»`) som ikke er trygge i `url(#…)`.
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');

  return (
    <div
      role="status"
      aria-label={ariaLabel ?? t('loading')}
      className={[classes.container, classes[size], classes[variant], className].join(' ')}
    >
      <svg className={classes.svg} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        {variant === 'outline' ? <OutlineArt id={id} /> : <SceneArt id={id} />}
      </svg>
    </div>
  );
};

export default KyvSpinner;
