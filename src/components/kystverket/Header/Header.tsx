import { Box, Logo, LogoVariant, SupportedLanguage } from '~/main';
import classes from './Header.module.css';
import { useTranslation } from '~/i18n/translations';
import { ReactNode } from 'react';
import { Label } from '@digdir/designsystemet-react';

export interface HeaderProps {
  /**
   * Utvidelse for å legge til ekstra innhold i headeren.
   * @default undefined
   */
  children?: ReactNode;
  /**
   * Spesifiserer språk for headeren.
   */
  language: SupportedLanguage;
  /**
   * Spesifiserer logovarianten som brukes (standard: Kystverket) med en eventuell ekstra undertittel og navigeringslenke ved klikk
   */
  logo: {
    /**
     * Undertittel for logoen.
     * @default undefined
     */
    title?: string;
    /**
     * URL for logoen.
     */
    url: string;
    /**
     * Logovariant.
     * @default 'blue-horizontal'
     */
    variant?: LogoVariant;
  };
}

export function Header({
  children = undefined,
  language,
  logo: { title = undefined, variant = 'blue-horizontal', url },
}: HeaderProps) {
  const t = useTranslation(language);

  return (
    <Box horizontal justify="center" align="center" className={classes.headerContainer}>
      <Box horizontal justify="between" align="center" px={16} width="container">
        <Box horizontal align="center" gap={16}>
          <a className={classes.logoLink} href={url}>
            <Logo variant={variant} height={47} alt={t('header-alt-text')} />
            {title && <Label className={classes.titleText}>{title}</Label>}
          </a>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
