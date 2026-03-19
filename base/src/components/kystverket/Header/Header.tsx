import { Box, Button, Icon, Link, Logo, LogoVariant } from '~/main';
import classes from './Header.module.css';
import { ReactNode, useCallback, useState } from 'react';
import { Label, Paragraph } from '@digdir/designsystemet-react';
import { IconId } from '../Icon/icon.types';
import { useTranslation } from '~/translations';
import { HeaderProfile } from '~/components/kystverket/Header/HeaderProfile/HeaderProfile';

export type HeaderLinkComponentProps = {
  className?: string;
  href?: string;
  children: ReactNode;
  onClick?: () => void;
};

export interface HeaderProps {
  /**
   * Utvidelse for å legge til ekstra innhold i headeren.
   * @default undefined
   */
  children?: ReactNode;
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
  /**
   * links - En kolleksjon av lenker
   * @default undefined
   */
  links?: {
    /**
     * icon - Typed til IconId
     */
    icon: IconId;
    /**
     * label
     */
    label: string;
    /**
     * url
     */
    url: string;
  }[];
  profile?: {
    /**
     * name
     */
    name: string;
    /**
     * department
     */
    department: string;
    /**
     * initials. Keep it to `2` characters
     */
    initials: string;
    /**
     * logoutHandler
     */
    links?: {
      /**
       * icon - Typed til IconId
       */
      icon: IconId;
      /**
       * label
       */
      label: string;
      /**
       * url
       */
      url: string;
    }[];
    /**
     * logoutHandler
     */
    logoutHandler: () => void;
  };
  linkComponent?: React.FC<HeaderLinkComponentProps>;
}

export function Header({
  children = undefined,
  logo: { title = undefined, variant = 'blue-horizontal', url },
  links,
  profile,
  linkComponent: LinkComponent = Link,
}: HeaderProps) {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen((prev) => {
      if (!prev) setIsProfileOpen(false); // Close profile if opening menu
      return !prev;
    });
  }, [setIsMenuOpen, setIsProfileOpen]);

  const toggleProfileOpen = useCallback(() => {
    setIsProfileOpen((prev) => {
      if (!prev) setIsMenuOpen(false); // Close menu if opening profile
      return !prev;
    });
  }, [setIsProfileOpen, setIsMenuOpen]);

  const closeProfile = useCallback(() => setIsProfileOpen(false), []);

  return (
    <Box horizontal justify="center" align="center" className={classes.headerContainer}>
      <Box className={classes.headerFlex} px={16} width="container">
        {/* Logo */}
        <Box horizontal align="center" gap={16}>
          <LinkComponent className={classes.logoLink} href={url}>
            <Logo className={classes.logo} variant={variant} height={47} alt={t('header-alt-text')} />
            {title && <Label className={classes.titleText}>{title}</Label>}
          </LinkComponent>
        </Box>
        {/*End Of Logo */}

        <Box horizontal gap={16}>
          {/* Links */}
          {links && (
            <>
              {links.map((link, index) => (
                <LinkComponent key={index} href={link.url} className={classes.navLinkButton}>
                  <Icon material={link.icon} />
                  <Paragraph>{link.label}</Paragraph>
                </LinkComponent>
              ))}
              <Button onClick={toggleMenuOpen} variant="ghost" className={classes.mobileMenuToggle}>
                <Icon material="menu"></Icon>
                Meny
              </Button>
            </>
          )}
          {/* End of Links */}
          {!!profile && (
            <HeaderProfile
              profile={profile}
              isProfileOpen={isProfileOpen}
              toggleProfileOpen={toggleProfileOpen}
              closeProfile={closeProfile}
              linkComponent={LinkComponent}
            />
          )}
        </Box>
      </Box>

      <Box className={classes.buttonsContainer}>
        {/*Logic: Hamburger menu for the links when header width is down to phone-size*/}
        {links && isMenuOpen && (
          <Box justify="start" className={`${classes.mobileMenuDropdown}`}>
            {links.map((link, index) => (
              <Button variant="ghost" asChild>
                <LinkComponent key={index} href={link.url} className={classes.mobileMenuItem}>
                  <Icon material={link.icon} />
                  {link.label}
                </LinkComponent>
              </Button>
            ))}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
}
