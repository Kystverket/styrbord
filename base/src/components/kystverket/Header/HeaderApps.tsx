import { Box, Button, Icon, Dropdown, HeaderContext } from '~/main';
import classes from './Header.module.css';
import { useContext, useId, useRef, useState } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { HeaderProps, HeaderLinkItem } from './Header';
import { useTranslation } from '~/translations';

export type HeaderAppsProps = Pick<HeaderProps, 'links' | 'applications'>;

export function HeaderApps({ links, applications }: HeaderAppsProps) {
  const { t } = useTranslation();
  const appsButtonRef = useRef<HTMLDivElement>(null);
  const { LinkComponent } = useContext(HeaderContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useOnClickOutsideAndEscape(appsButtonRef, closeMenu);

  const firstLinkPerApplication: Record<string, HeaderLinkItem> = {};
  links?.forEach((link) => {
    if (link.url && link.applicationId && !firstLinkPerApplication[link.applicationId]) {
      firstLinkPerApplication[link.applicationId] = link;
    }
  });

  const id = useId();

  if (!applications || applications.length < 1) {
    return null;
  }

  return (
    <div ref={appsButtonRef}>
      <Dropdown.TriggerContext>
        <Button
          popoverTarget={id}
          className={classes.dropdownButton}
          variant="ghost"
          onClick={openMenu}
          aria-label={t('header.openApplicationsMenu')}
        >
          <Box horizontal gap={16} align="center">
            <Icon material="apps" aria-hidden />
          </Box>
        </Button>
        <Dropdown id={id} open={isMenuOpen} data-color="neutral">
          <Dropdown.List>
            {applications.map((app) => (
              <Dropdown.Item key={app.id}>
                <Dropdown.Button asChild>
                  <LinkComponent href={firstLinkPerApplication[app.id]?.url ?? '#'} onClick={closeMenu}>
                    {app.icon && <Icon material={app.icon} aria-hidden />}
                    {app.name}
                  </LinkComponent>
                </Dropdown.Button>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
    </div>
  );
}
