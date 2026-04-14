import { Box, Button, Icon, Dropdown, Avatar, Label, Divider, HeaderContext } from '~/main';
import classes from './Header.module.css';
import { useContext, useId, useRef, useState } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { HeaderProps, nameToInitials } from './Header';
import { useTranslation } from '~/translations';

export type HeaderProfileProps = Pick<HeaderProps, 'links' | 'profile' | 'logoutHandler'>;

export function HeaderProfile({ links, profile, logoutHandler }: HeaderProfileProps) {
  const { t } = useTranslation();
  const profileButtonRef = useRef<HTMLDivElement>(null);
  const { LinkComponent } = useContext(HeaderContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const profileLinks = links?.filter((link) => 'position' in link && link.position === 'profile') || [];

  useOnClickOutsideAndEscape(profileButtonRef, closeMenu);

  const id = useId();

  if (!profile) {
    return null;
  }

  return (
    <div ref={profileButtonRef}>
      <Dropdown.TriggerContext>
        <Button
          popoverTarget={id}
          className={classes.dropdownButton}
          variant="ghost"
          onClick={() => openMenu()}
          aria-label={t('header.openProfileMenu')}
        >
          <Box horizontal gap={4} align="center">
            <Avatar
              aria-label={`${profile.name} profile picture`}
              data-size="2xs"
              initials={nameToInitials(profile.name)}
              {...(profile.avatarStyle || { 'data-color': 'success' })}
            />
            <Icon material="keyboard_arrow_down" aria-hidden />
          </Box>
        </Button>
        <Dropdown id={id} open={isMenuOpen} data-color="neutral">
          <Dropdown.List>
            <Dropdown.Item>
              <Box horizontal align="center" p={8} gap={12} px={12}>
                <Avatar
                  aria-label={`${profile.name} profile picture`}
                  data-size="2xs"
                  initials={nameToInitials(profile.name)}
                  {...(profile.avatarStyle || { 'data-color': 'success' })}
                />
                <Box className={classes.profileMeta}>
                  <Label className={`${classes.profileDisplayName} ${classes.truncateOverflow}`}>{profile.name}</Label>
                  {profile.department && (
                    <Label data-size="sm" className={`${classes.profileDepartment} ${classes.truncateOverflow}`}>
                      {profile.department}
                    </Label>
                  )}
                </Box>
              </Box>
              <Divider />
            </Dropdown.Item>
            {profileLinks.map((link, index) => (
              <Dropdown.Item key={index}>
                <Dropdown.Button asChild>
                  {link.url ? (
                    <LinkComponent href={link.url}>
                      {link.icon && <Icon material={link.icon} aria-hidden />}
                      {link.label}
                    </LinkComponent>
                  ) : (
                    link.children
                  )}
                </Dropdown.Button>
              </Dropdown.Item>
            ))}
            {logoutHandler && profile && (
              <Dropdown.Item>
                <Dropdown.Button asChild>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      logoutHandler?.();
                      closeMenu();
                    }}
                  >
                    <Icon material="logout" />
                    {t('header.logout')}
                  </a>
                </Dropdown.Button>
              </Dropdown.Item>
            )}
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
    </div>
  );
}
