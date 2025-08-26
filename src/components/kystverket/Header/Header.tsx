import { Avatar, Box, Button, Icon, Link, Logo, LogoVariant, SupportedLanguage } from '~/main';
import classes from './Header.module.css';
import { useTranslation } from '~/i18n/translations';
import { ReactNode, useState } from 'react';
import { Divider, Label, Paragraph } from '@digdir/designsystemet-react';
import { IconId } from '../Icon/icon.types';

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
   * links.
   * @default undefined
   */
  links?: { icon: IconId; label: string; url: string }[];
  profile?: { name: string; department: string; initials: string; logoutHandler: () => void };
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

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => {
      if (!prev) setIsProfileOpen(false); // Close profile if opening menu
      return !prev;
    });
  };

  const toggleProfileOpen = () => {
    setIsProfileOpen((prev) => {
      if (!prev) setIsMenuOpen(false); // Close menu if opening profile
      return !prev;
    });
  };

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

        <Box horizontal gap={16} className="flexCenter">
          {/* Start of Links */}
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
            <div className={classes.relativeUntilMobile}>
              <Button variant="ghost" onClick={toggleProfileOpen} className={`${classes.headerButton}`}>
                <Avatar
                  className={`${classes.avatarShrink} ${classes.avatar}`}
                  aria-label={`${profile.name} profile picture`}
                  data-color={'primary'}
                  initials={profile.initials}
                />
                <Paragraph className={`${classes.profileName} ${classes.disappearBelowTablet}`}>
                  {profile.name}
                </Paragraph>
                <Paragraph className={`${classes.profileName} ${classes.profileNameShort}`}>
                  {profile.name?.split(' ')[0]}
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
                      className={classes.avatar}
                      aria-label={`${profile.name} profile picture`}
                      data-color={'primary'}
                      data-size="xs"
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

      <Box className={classes.buttonsContainer} horizontal>
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
