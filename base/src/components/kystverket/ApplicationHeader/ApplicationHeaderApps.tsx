import { Box, Button, Icon, Dropdown } from '~/main';
import classes from './ApplicationHeader.module.css';
import { useRef, useState } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { ApplicationHeaderProps, HeaderLinkItem } from './ApplicationHeader';
import { v4 } from 'uuid';

export type ApplicationHeaderAppsProps = Pick<ApplicationHeaderProps, 'links' | 'applications'>;

export function ApplicationHeaderApps({ links, applications }: ApplicationHeaderAppsProps) {
  const appsButtonRef = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!applications || applications.length < 1) {
    return null;
  }

  useOnClickOutsideAndEscape(appsButtonRef, closeMenu);

  const firstLinkPerApplication: Record<string, HeaderLinkItem> = {};
  links?.forEach((link) => {
    if (link.url && link.applicationId && !firstLinkPerApplication[link.applicationId]) {
      firstLinkPerApplication[link.applicationId] = link;
    }
  });

  const id = v4();

  return (
    <div ref={appsButtonRef}>
      <Dropdown.TriggerContext>
        <Button popoverTarget={id} className={classes.dropdownButton} variant="ghost" onClick={openMenu}>
          <Box horizontal gap={16} align="center">
            <Icon material="apps" aria-hidden />
          </Box>
        </Button>
        <Dropdown id={id} open={isMenuOpen} data-color="neutral">
          <Dropdown.List>
            {applications.map((app) => (
              <Dropdown.Item key={app.id}>
                <Dropdown.Button asChild>
                  <a href={firstLinkPerApplication[app.id]?.url ?? '#'}>
                    {app.icon && <Icon material={app.icon} aria-hidden />}
                    {app.name}
                  </a>
                </Dropdown.Button>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
    </div>
  );
}
