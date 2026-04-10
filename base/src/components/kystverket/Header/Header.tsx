import { Box, Icon, IconId, Logo, LogoVariant, Label, Paragraph } from '~/main';
import classes from './Header.module.css';
import { Fragment, ReactNode, useContext } from 'react';
import { useTranslation } from '~/translations';
import { ApplicationHeaderContext, HeaderContext } from './headerContext';
import { HeaderApps } from './HeaderApps';
import { HeaderProfile } from './HeaderProfile';
import { HeaderMobile } from './HeaderMobile';

export type HeaderPosition = 'main' | 'profile';

export type HeaderLinkItem = {
  applicationId?: string;
  position?: HeaderPosition;
  icon?: IconId;
  label: string;
  url: string;
  children?: ReactNode;
};

export type HeaderApplication = {
  id: string;
  name: string;
  icon?: IconId;
};

export interface HeaderProps {
  logo: {
    title?: string;
    url: string;
    variant?: LogoVariant;
  };
  applications?: HeaderApplication[];
  links?: HeaderLinkItem[];
  person?: HeaderPersona;
  loginHandler?: () => void;
  logoutHandler?: () => void;
  slots?: {
    preLinks?: ReactNode;
    postLinks?: ReactNode;
    widgets?: ReactNode;
  };
}

type HeaderPersona = {
  name: string;
  department?: string;
};

export const nameToInitials = (name?: string): string => {
  if (!name) return '';

  const parts = name.split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase();
};

export function MainLinkItem(props: HeaderLinkItem) {
  const { LinkComponent } = useContext(HeaderContext);

  if (props.url) {
    return (
      <LinkComponent href={props.url} className={classes.mainLinkButton}>
        {props.icon && <Icon material={props.icon} />}
        <Paragraph>{props.label}</Paragraph>
      </LinkComponent>
    );
  }

  return <Fragment>{props.children}</Fragment>;
}

export function Header({
  logo: { title = undefined, variant = 'blue-horizontal', url },
  links,
  slots,
  person,
  applications,
  loginHandler,
  logoutHandler,
}: HeaderProps) {
  const { t } = useTranslation();
  const { LinkComponent } = useContext(HeaderContext);
  const { applicationId: currentApplicationId } = useContext(ApplicationHeaderContext);

  const mainLinks =
    links?.filter(
      (link) =>
        !('position' in link) ||
        (link.position === 'main' && (!link.applicationId || link.applicationId === currentApplicationId)),
    ) || [];

  return (
    <Box horizontal justify="center" align="center" className={classes.headerContainer}>
      <Box
        className={classes.headerFlex}
        horizontal
        gap={12}
        align="center"
        justify="between"
        px={16}
        width="container"
      >
        <Box horizontal align="center" gap={16}>
          <LinkComponent className={classes.logoLink} href={url}>
            <Logo className={classes.logo} variant={variant} height={47} alt={t('header-alt-text')} />
            {title && <Label className={classes.titleText}>{title}</Label>}
          </LinkComponent>
        </Box>

        <Box horizontal gap={12} align="center" className="">
          <Box horizontal gap={12} align="center" className={classes.smallScreenHide}>
            {slots?.preLinks}
            {mainLinks.map((link, index) => (
              <MainLinkItem key={index} {...link} />
            ))}
            {slots?.postLinks}
          </Box>
          <Box horizontal gap={0} align="center">
            <div className={classes.notSmallScreenHide + ' mobile-menu'}>
              <HeaderMobile
                links={links}
                applications={applications}
                person={person}
                loginHandler={loginHandler}
                logoutHandler={logoutHandler}
              />
            </div>
            <Box horizontal gap={0} align="center" className={classes.smallScreenHide}>
              <HeaderApps links={links} applications={applications} />
              {slots?.widgets}
              {person && <HeaderProfile links={links} person={person} logoutHandler={logoutHandler} />}
              {loginHandler && !person && (
                <LinkComponent
                  onClick={() => {
                    loginHandler?.();
                  }}
                  className={classes.mainLinkButton}
                >
                  {<Icon material="login" />}
                  <Paragraph>{t('header-login')}</Paragraph>
                </LinkComponent>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
