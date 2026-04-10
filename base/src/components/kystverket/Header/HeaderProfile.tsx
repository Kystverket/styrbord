import { Box, Button, Icon, Dropdown, Avatar, Label, Divider } from '~/main';
import classes from './Header.module.css';
import { useRef, useState } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { HeaderProps, nameToInitials } from './Header';
import { v4 } from 'uuid';

export type HeaderProfileProps = Pick<HeaderProps, 'links' | 'person' | 'logoutHandler'>;

export function HeaderProfile({ links, person, logoutHandler }: HeaderProfileProps) {
  const profileButtonRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!person) {
    return null;
  }

  const profileLinks = links?.filter((link) => 'position' in link && link.position === 'profile') || [];

  useOnClickOutsideAndEscape(profileButtonRef, closeMenu);

  const id = v4();

  return (
    <div ref={profileButtonRef}>
      <Dropdown.TriggerContext>
        <Button popoverTarget={id} className={classes.dropdownButton} variant="ghost" onClick={() => openMenu()}>
          <Box horizontal gap={4} align="center">
            <Avatar
              aria-label={`${person.name} profile picture`}
              data-color={'primary'}
              data-size="2xs"
              initials={nameToInitials(person.name)}
            />
            <Icon material="keyboard_arrow_down" aria-hidden />
          </Box>
        </Button>
        <Dropdown id={id} open={isMenuOpen} data-color="neutral">
          <Dropdown.List>
            <Dropdown.Item>
              <Box horizontal align="center" p={8} gap={8} px={12}>
                <Avatar
                  aria-label={`${person.name} profile picture`}
                  data-color={'primary'}
                  data-size="2xs"
                  initials={nameToInitials(person.name)}
                />
                <Box className={classes.profileMeta}>
                  <Label className={`${classes.profileDisplayName} ${classes.truncateOverflow}`}>{person.name}</Label>
                  {person.department && (
                    <Label data-size="sm" className={`${classes.profileDepartment} ${classes.truncateOverflow}`}>
                      {person.department}
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
                    <a href={link.url}>
                      {link.icon && <Icon material={link.icon} aria-hidden />}
                      {link.label}
                    </a>
                  ) : (
                    link.children
                  )}
                </Dropdown.Button>
              </Dropdown.Item>
            ))}
            {logoutHandler && person && (
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
                    Logg ut
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
