import { Box, Button, Icon, IconId, Logo, LogoVariant, Label, Paragraph, Dropdown, Avatar, Divider } from '~/main';
import classes from './ApplicationHeader.module.css';
import { Fragment, ReactNode, useContext, useRef, useState } from 'react';
import { useTranslation } from '~/translations';
import { ApplicationHeaderContext, HeaderContext } from '../Header/headerContext';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';

export type HeaderLinkItem = {
  icon?: IconId;
  label: string;
  href: string;
};

export type HeaderLink = {
  applicationId?: string;
  position: 'main' | 'profile';
  link?: HeaderLinkItem;
  children?: ReactNode;
};

export type HeaderApplication = {
  id: string;
  name: string;
  icon?: IconId;
};

export interface ApplicationHeaderProps {
  logo: {
    title?: string;
    url: string;
    variant?: LogoVariant;
  };
  applications?: HeaderApplication[];
  links?: HeaderLink[];
  person: HeaderPersona;
  logoutHandler: () => void;
}

const nameToInitials = (name?: string): string => {
  if (!name) return '';

  const parts = name.split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase();
};

type HeaderPersona = {
  name: string;
  department?: string;
};

function MainLinkItem(props: HeaderLink) {
  const { LinkComponent } = useContext(HeaderContext);

  if (props.link) {
    return (
      <LinkComponent href={props.link.href ?? '#'} className={classes.mainLinkButton}>
        {props.link.icon && <Icon material={props.link.icon} />}
        <Paragraph>{props.link.label}</Paragraph>
      </LinkComponent>
    );
  }

  return <Fragment>{props.children}</Fragment>;
}

export function ApplicationHeader({
  logo: { title = undefined, variant = 'blue-horizontal', url },
  links,
  person,
  applications,
  logoutHandler,
}: ApplicationHeaderProps) {
  const { t } = useTranslation();
  const profileRef = useRef<HTMLUListElement>(null);
  const { LinkComponent } = useContext(HeaderContext);
  const { applicationId: currentApplicationId } = useContext(ApplicationHeaderContext);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // useOnClickOutsideAndEscape(profileRef, () => setIsProfileMenuOpen(false));

  const mainLinks =
    links?.filter(
      (link) => link.position === 'main' && (!link.applicationId || link.applicationId === currentApplicationId),
    ) || [];
  const profileLinks = links?.filter((link) => link.position === 'profile') || [];

  const firstLinkPerApplication: Record<string, HeaderLink> = {};
  links?.forEach((link) => {
    if (link.link && link.applicationId && !firstLinkPerApplication[link.applicationId]) {
      firstLinkPerApplication[link.applicationId] = link;
    }
  });

  return (
    <Box horizontal justify="center" align="center" className={classes.headerContainer}>
      <Box className={classes.headerFlex} px={16} width="container">
        <Box horizontal align="center" gap={16}>
          <LinkComponent className={classes.logoLink} href={url}>
            <Logo className={classes.logo} variant={variant} height={47} alt={t('header-alt-text')} />
            {title && <Label className={classes.titleText}>{title}</Label>}
          </LinkComponent>
        </Box>

        <Box horizontal gap={16} align="center">
          {mainLinks.map((link, index) => (
            <MainLinkItem key={index} {...link} />
          ))}
          <Dropdown.TriggerContext>
            <Button
              popovertarget="application-profile-menu"
              variant="ghost"
              onClick={() => setIsProfileMenuOpen((open) => !open)}
            >
              <Box horizontal className={classes.profileMenuHeader} gap={16} align="center">
                <Avatar
                  aria-label={`${person.name} profile picture`}
                  data-color={'primary'}
                  data-size="2xs"
                  initials={nameToInitials(person.name)}
                />
                <Paragraph className={`${classes.truncateOverflow}`}>{person.name}</Paragraph>
              </Box>
            </Button>
            <Dropdown id="application-profile-menu" open={isProfileMenuOpen} data-color="neutral">
              <Dropdown.List ref={profileRef}>
                {applications && applications?.length > 1 && (
                  <>
                    <Dropdown.Item>
                      <Box horizontal align="center" p={8} px={12} gap={8}>
                        <Icon material="apps" aria-hidden />
                        <Label>Applikasjoner</Label>
                      </Box>
                    </Dropdown.Item>
                    {applications.map((app) => (
                      <Dropdown.Item key={app.id}>
                        <Dropdown.Button asChild>
                          <LinkComponent href={firstLinkPerApplication[app.id]?.link?.href ?? '#'}>
                            {app.icon && <Icon material={app.icon} aria-hidden />}
                            {app.name}
                          </LinkComponent>
                        </Dropdown.Button>
                      </Dropdown.Item>
                    ))}
                    <Divider />
                  </>
                )}
                <Dropdown.Item>
                  <Box horizontal align="center" p={8} gap={16}>
                    <Avatar
                      aria-label={`${person.name} profile picture`}
                      data-color={'primary'}
                      data-size="3xs"
                      initials={nameToInitials(person.name)}
                    />
                    <Box className={classes.profileMeta}>
                      <Label className={`${classes.profileDisplayName} ${classes.truncateOverflow}`}>
                        {person.name}
                      </Label>
                      {person.department && (
                        <Label data-size="sm" className={`${classes.profileDepartment} ${classes.truncateOverflow}`}>
                          {person.department}
                        </Label>
                      )}
                    </Box>
                  </Box>
                </Dropdown.Item>
                {profileLinks.map((link, index) => (
                  <Dropdown.Item key={index}>
                    {link.link ? (
                      <Dropdown.Button asChild>
                        <LinkComponent href={link.link.href}>
                          {link.link.icon && <Icon material={link.link.icon} aria-hidden />}
                          {link.link.label}
                        </LinkComponent>
                      </Dropdown.Button>
                    ) : (
                      link.children
                    )}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item>
                  <Divider />
                  <Dropdown.Button asChild>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        logoutHandler();
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      <Icon material="logout" />
                      Logg ut
                    </a>
                  </Dropdown.Button>
                </Dropdown.Item>
              </Dropdown.List>
            </Dropdown>
          </Dropdown.TriggerContext>
        </Box>
      </Box>
    </Box>
  );
}
