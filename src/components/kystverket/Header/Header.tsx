import { Avatar, Box, Button, Icon, Link, Logo, LogoVariant, SupportedLanguage } from '~/main';
import classes from './Header.module.css';
import { useTranslation } from '~/i18n/translations';
import { ReactNode, useCallback, useRef, useState } from 'react';
import { Divider, Label, Paragraph } from '@digdir/designsystemet-react';
import { IconId } from '../Icon/icon.types';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';

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
    logoutHandler: () => void;
  };
}

export function Header({
  children = undefined,
  language,
  logo: { title = undefined, variant = 'blue-horizontal', url },
  links,
  profile,
}: HeaderProps) {
  const t = useTranslation(language);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

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

  const closeProfile = () => setIsProfileOpen(false);

  useOnClickOutsideAndEscape(profileRef, closeProfile);

  return (
    <Box horizontal justify="center" align="center" className={classes.headerContainer}>
      <Box className={classes.headerFlex} px={16} width="container">
        {/* Logo */}
        <Box horizontal align="center" gap={16}>
          <a className={classes.logoLink} href={url}>
            <Logo className={classes.logo} variant={variant} height={47} alt={t('header-alt-text')} />
            {title && <Label className={classes.titleText}>{title}</Label>}
          </a>
        </Box>
        {/*End Of Logo */}

        <Box horizontal gap={16}>
          {/* Links */}
          {links && (
            <>
              {links.map((link, index) => (
                <Link key={index} href={link.url} className={`${classes.headerButton} ${classes.disappearBelowPhone}`}>
                  <Icon material={link.icon} />
                  <Paragraph>{link.label}</Paragraph>
                </Link>
              ))}
              <Button
                onClick={toggleMenuOpen}
                variant="ghost"
                className={`${classes.disappearAbovePhone} ${classes.headerButton}`}
              >
                <Icon material="menu"></Icon>
                Meny
              </Button>
            </>
          )}
          {/* End of Links */}
          {/* Profile */}
          {profile?.name && (
            <div className={classes.relativeUntilMobile} ref={profileRef}>
              <Button variant="ghost" onClick={toggleProfileOpen} className={`${classes.headerButton}`}>
                <Avatar
                  className={classes.avatarBig}
                  aria-label={`${profile.name} profile picture`}
                  data-color={'primary'}
                  data-size="xxs"
                  initials={profile.initials}
                />
                <Avatar
                  className={classes.avatarSmall}
                  aria-label={`${profile.name} profile picture`}
                  data-color={'primary'}
                  data-size="xxxs"
                  initials={profile.initials}
                />
                <Paragraph className={classes.profileName}>
                  <span className={classes.disappearBelowTablet}>{profile.name}</span>
                  <span className={classes.profileNameShort}>{profile.name?.split(' ')[0]}</span>
                </Paragraph>
                <Icon
                  material={isProfileOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  className={classes.disappearBelowTablet}
                />
              </Button>
              {/* Profile Menu */}
              {isProfileOpen && (
                <Box className={classes.profileMenu}>
                  <Box horizontal className={classes.profileContainer}>
                    <Avatar
                      aria-label={`${profile.name} profile picture`}
                      data-color={'primary'}
                      data-size="xxs"
                      initials={profile.initials}
                    />
                    <Box className={classes.profileTextContainer}>
                      <Paragraph className={`${classes.profileMenuName} ${classes.EllipsisOnOverflow}`}>
                        {profile.name}
                      </Paragraph>
                      <Paragraph className={`${classes.profileMenuDepartment} ${classes.EllipsisOnOverflow}`}>
                        {profile.department}
                      </Paragraph>
                    </Box>
                  </Box>
                  <Divider />
                  <Button onClick={() => profile.logoutHandler()} className={`${classes.profileLogOutButton}`}>
                    <Icon material="logout" />
                    Logg ut
                  </Button>
                </Box>
              )}
              {/*End Of Profile Menu */}
            </div>
          )}
          {/*End Of Profile */}
        </Box>
      </Box>

      <Box className={classes.buttonsContainer}>
        {/*Logic: Hamburger menu for the links when header width is down to phone-size*/}
        {links && isMenuOpen && (
          <Box justify="start" className={`${classes.menuDropdown} ${classes.disappearAbovePhone}`}>
            {links.map((link, index) => (
              <Link key={index} href={link.url} className={`${classes.menuButton}`}>
                <Icon material={link.icon} />
                {link.label}
              </Link>
            ))}
          </Box>
        )}
        {children}
      </Box>
    </Box>
  );
}
