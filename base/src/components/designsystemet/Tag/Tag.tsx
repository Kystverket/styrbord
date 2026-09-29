import { Tag as DsTag, TagProps as DsTagProps } from '@digdir/designsystemet-react';
import Icon from '~/components/kystverket/Icon/icon';
import { IconId } from '~/components/kystverket/Icon/icon.types';
import { CSSProperties } from 'react';

export type TagProps = DsTagProps & {
  radius?: 'sm' | 'md' | 'lg' | 'full';
  icon?: IconId;
  'data-color-transparent'?: boolean;
};

const Tag = ({ radius = 'md', icon, children, className = '', ...props }: TagProps) => {
  const classNames = [className];
  const styles: CSSProperties = {};

  if (radius) {
    styles.borderRadius = `var(--ds-border-radius-${radius})`;
  }

  if (props['data-color-transparent']) {
    styles.backgroundColor = 'transparent';
  }

  return (
    <DsTag className={classNames.join(' ')} style={styles} {...props}>
      {icon && (
        <span aria-hidden style={{ marginInlineEnd: 'var(--ds-size-1)' }}>
          <Icon material={icon} size="2xs" />
        </span>
      )}
      <span>{children}</span>
    </DsTag>
  );
};

export default Tag;
