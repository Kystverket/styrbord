import { Surface, Button, Icon, Dialog, Avatar, Label } from '~/main';
import classes from './Header.module.css';
import { useContext, useId, useRef, useState } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { HeaderProps, HeaderLinkItem, MainLinkItem, nameToInitials } from './Header';
import { ApplicationHeaderContext } from './headerContext';
import { useTranslation } from '~/translations';

export type HeaderMobileProps = Pick<
  HeaderProps,
  'logoutHandler' | 'loginHandler' | 'profile' | 'slots' | 'links' | 'applications'
>;

export function HeaderMobile({ logoutHandler, loginHandler, profile, slots, links, applications }: HeaderMobileProps) {
  const { t } = useTranslation();
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

  const id = useId();

  if ((!links || links.length === 0) && !loginHandler && !logoutHandler) {
    return null;
  }

  return (
    <div ref={appsButtonRef}>
      <Dialog.TriggerContext>
        <Button
          popoverTarget={id}
          className={classes.dropdownButton}
          variant="ghost"
          onClick={openMenu}
          aria-label={t('header.openMenu')}
        >
          <Surface horizontal gap={4} align="center">
            <Icon material="menu" aria-hidden />
          </Surface>
        </Button>
        <Dialog id={id} open={isMenuOpen} onClose={() => setIsMenuOpen(false)} placement="right">
          {profile && (
            <Dialog.Block>
              <Surface horizontal align="center" p={2} gap={3} px={3}>
                <Avatar
                  aria-label={`${profile.name} profile picture`}
                  data-size="2xs"
                  initials={nameToInitials(profile.name)}
                  {...(profile.avatarStyle || { 'data-color': 'success' })}
                />
                <Surface className={classes.profileMeta}>
                  <Label className={`${classes.profileDisplayName} ${classes.truncateOverflow}`}>{profile.name}</Label>
                  {profile.department && (
                    <Label data-size="sm" className={`${classes.profileDepartment} ${classes.truncateOverflow}`}>
                      {profile.department}
                    </Label>
                  )}
                </Surface>
                {slots?.widgets}
              </Surface>
            </Dialog.Block>
          )}
          {(slots?.preLinks || slots?.postLinks || mainLinks.length > 0) && (
            <Dialog.Block>
              <Surface>
                {slots?.preLinks}
                {mainLinks.map((link, index) => (
                  <MainLinkItem key={index} {...link} onClick={closeMenu} />
                ))}
                {slots?.postLinks}
              </Surface>
            </Dialog.Block>
          )}
          {applications && applications.length > 1 && (
            <Dialog.Block>
              {applications.map((app) => (
                <MainLinkItem
                  key={app.id}
                  icon={app.icon}
                  label={app.name}
                  url={firstLinkPerApplication[app.id].url}
                  onClick={closeMenu}
                />
              ))}
            </Dialog.Block>
          )}
          {(logoutHandler || profileLinks.length > 0) && (
            <Dialog.Block>
              <Surface horizontal wrap align="center" gap={4} justify="between" width="full">
                {profileLinks.map((link, index) => (
                  <MainLinkItem key={index} {...link} onClick={closeMenu} />
                ))}
                {logoutHandler && profile && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      logoutHandler?.();
                      closeMenu();
                    }}
                  >
                    <Icon material="logout" />
                    {t('header.logout')}
                  </Button>
                )}
                {loginHandler && !profile && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      loginHandler?.();
                      closeMenu();
                    }}
                  >
                    <Icon material="login" />
                    {t('header.login')}
                  </Button>
                )}
              </Surface>
            </Dialog.Block>
          )}
        </Dialog>
      </Dialog.TriggerContext>
    </div>
  );
}
