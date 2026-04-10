import { Box, Button, Icon, Dialog, Avatar, Label, Divider } from '~/main';
import classes from './ApplicationHeader.module.css';
import { useContext, useRef, useState } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { ApplicationHeaderProps, HeaderLinkItem, MainLinkItem, nameToInitials } from './ApplicationHeader';
import { v4 } from 'uuid';
import { ApplicationHeaderContext } from '../Header/headerContext';

export type ApplicationHeaderMobileProps = Pick<
  ApplicationHeaderProps,
  'logoutHandler' | 'person' | 'slots' | 'links' | 'applications'
>;

export function ApplicationHeaderMobile({
  logoutHandler,
  person,
  slots,
  links,
  applications,
}: ApplicationHeaderMobileProps) {
  const { applicationId: currentApplicationId } = useContext(ApplicationHeaderContext);
  const appsButtonRef = useRef<HTMLDivElement>(null);

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

  const mainLinks =
    links?.filter(
      (link) =>
        !('position' in link) ||
        (link.position === 'main' && (!link.applicationId || link.applicationId === currentApplicationId)),
    ) || [];

  const profileLinks = links?.filter((link) => 'position' in link && link.position === 'profile') || [];

  const id = v4();

  return (
    <div ref={appsButtonRef}>
      <Dialog.TriggerContext>
        <Button popoverTarget={id} className={classes.dropdownButton} variant="ghost" onClick={openMenu}>
          <Box horizontal gap={16} align="center">
            <Icon material="menu" aria-hidden />
          </Box>
        </Button>
        <Dialog id={id} open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <Dialog.Block>
            <Box gap={8}>
              {person && (
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
              )}
              {(slots?.preLinks || slots?.postLinks || mainLinks.length > 0) && (
                <>
                  <Box horizontal align="center" width="full" gap={8}>
                    <Divider />
                    {applications && applications.length > 1 && (
                      <>
                        <Icon material="menu" aria-hidden />
                        <Divider />
                      </>
                    )}
                    {slots?.widgets}
                  </Box>
                  <Box horizontal wrap align="center" width="full">
                    {slots?.preLinks}
                    {mainLinks.map((link, index) => (
                      <MainLinkItem key={index} {...link} />
                    ))}
                    {slots?.postLinks}
                  </Box>
                </>
              )}
              {applications && applications.length > 1 && (
                <>
                  <Box horizontal align="center" width="full" gap={8}>
                    <Divider />
                    <Icon material="apps" aria-hidden />
                    <Divider />
                  </Box>
                  <Box horizontal align="center" width="full">
                    <Box horizontal wrap align="center" width="full">
                      {applications.map((app) => (
                        <MainLinkItem
                          key={app.id}
                          icon={app.icon}
                          label={app.name}
                          url={firstLinkPerApplication[app.id].url}
                        />
                      ))}
                    </Box>
                  </Box>
                </>
              )}
              {(logoutHandler || profileLinks.length > 0) && (
                <>
                  <Box horizontal align="center" width="full" gap={8}>
                    <Divider />
                  </Box>
                  <Box horizontal wrap align="center" gap={16} justify="between" width="full">
                    {profileLinks.map((link, index) => (
                      <MainLinkItem key={index} {...link} />
                    ))}
                    {logoutHandler && (
                      <Button asChild>
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
                      </Button>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Dialog.Block>
        </Dialog>
      </Dialog.TriggerContext>
    </div>
  );
}
