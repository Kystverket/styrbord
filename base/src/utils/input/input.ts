import styles from './input.module.css';

export type InputSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'fit' | 'full';

export const inputSizeClass = (size: InputSize) => {
  switch (size) {
    case '2xs':
      return styles.sizeXxs;
    case 'xs':
      return styles.sizeXs;
    case 'sm':
      return styles.sizeSm;
    case 'md':
      return styles.sizeMd;
    case 'lg':
      return styles.sizeLg;
    case 'full':
      return styles.sizeFull;
    case 'fit':
      return styles.sizeFit;
  }
};
