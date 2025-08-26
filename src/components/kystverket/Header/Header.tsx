import { Avatar, Box, Button, Icon, Link, Logo, LogoVariant, SupportedLanguage } from '~/main';
import classes from './Header.module.css';
import { useTranslation } from '~/i18n/translations';
import { ReactNode, useEffect, useState } from 'react';
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
  profile?: { name: string; department: string; logoutHandler: () => void };
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

  useEffect(() => console.log(profile), []);

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
        {/* Top Bar */}
        <Box className={classes.buttonsContainer} horizontal>
          {links && (
            <Box horizontal={true}>
              {links.map((link, index) => (
                <Button key={index} variant="ghost" className={classes.disappearBelowPhone}>
                  <Link href={link.url} className={`${classes.navButton} ${classes.Button} `}>
                    <Icon material={link.icon} />
                    {link.label}
                  </Link>
                </Button>
              ))}
              <Button
                onClick={toggleMenuOpen}
                variant="ghost"
                className={`${classes.disappearAbovePhone} ${classes.navButton} ${classes.Button}`}
              >
                <Icon material="menu"></Icon>
                Meny
              </Button>{' '}
            </Box>
          )}
          {/* End of Items */}
          {/* Profile */}

          {profile?.name && (
            <Box className={classes.relativeUntilMobile}>
              <Button variant="ghost" onClick={toggleProfileOpen} className={classes.navButton}>
                <Avatar
                  className={`${classes.shrinkAvatar} ${classes.avatar} `}
                  aria-label=""
                  data-color={'primary'}
                  data-size="xs"
                  initials={'??'}
                />
                <Paragraph id="name" className={`${classes.profileName} ${classes.disappearBelowTablet}`}>
                  {profile.name}
                </Paragraph>
                <Paragraph id="name" className={`${classes.profileName} ${classes.profileNameShort}`}>
                  {profile.name.split(' ')[0]}
                </Paragraph>
                <Icon
                  material={isProfileOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  className={classes.disappearBelowTablet}
                />
              </Button>
              {isProfileOpen && (
                <Box className={classes.profileMenu}>
                  <Box horizontal className={classes.profileContainer}>
                    <Avatar
                      className={` ${classes.avatar} `}
                      aria-label=""
                      data-color={'primary'}
                      data-size="xs"
                      initials={'??'}
                    />
                    <Box className={classes.maxWidth}>
                      <Paragraph
                        className={classes.EllipsisOnOverflow}
                        style={{
                          fontWeight: 800,
                          marginTop: 2,
                        }}
                      >
                        {profile.name}
                      </Paragraph>
                      <Paragraph
                        className={classes.EllipsisOnOverflow}
                        style={{
                          color: 'var(--color-neutral-text-subtle)',
                          fontSize: 'var(--font-size-3)',
                        }}
                      >
                        {profile.department}
                      </Paragraph>
                    </Box>
                  </Box>
                  <Divider />
                  <Button variant="ghost" onClick={() => profile.logoutHandler()} className={`${classes.Button} `}>
                    <Icon material="logout" />
                    Logg ut
                  </Button>
                </Box>
              )}
            </Box>
          )}
        </Box>
        {/* End Of Profile */}

        {links && isMenuOpen && (
          <Box justify="start" className={`${classes.phoneDropdownMenu} ${classes.disappearAbovePhone}`}>
            {links.map((link, index) => (
              <Button key={index} variant="ghost">
                <Link href={link.url} className={`${classes.Button} ${classes.stretchButton}`}>
                  <Icon material={link.icon} />
                  {link.label}
                </Link>
              </Button>
            ))}
          </Box>
        )}

        {children}
      </Box>
    </Box>
  );
}
