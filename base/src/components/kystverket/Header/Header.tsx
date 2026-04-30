import { Box, Icon, IconId, Logo, LogoVariant, Label, Paragraph, AvatarProps } from '~/main';
import classes from './Header.module.css';
import { Fragment, ReactNode, useContext } from 'react';
import { useTranslation } from '~/translations';
import { ApplicationHeaderContext, HeaderContext } from './headerContext';
import { HeaderApps } from './HeaderApps';
import { HeaderProfile } from './HeaderProfile';
import { HeaderMobile } from './HeaderMobile';
import { BoxWidthProp } from '../Box/box';

export type HeaderPosition = 'main' | 'profile';

export type HeaderLinkItem = {
  applicationId?: string;
  position?: HeaderPosition;
  icon?: IconId;
  label: string;
  url: string;
  children?: ReactNode;
};

export type HeaderLinkItemWithOnClick = HeaderLinkItem & {
  onClick?: (e?: React.UIEvent | undefined) => void;
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
  profile?: HeaderProfile;
  loginHandler?: () => void;
  logoutHandler?: () => void;
  width?: BoxWidthProp;
  slots?: {
    preLinks?: ReactNode;
    postLinks?: ReactNode;
    widgets?: ReactNode;
  };
}

type HeaderProfile = {
  name: string;
  department?: string;
  avatarStyle?: Pick<AvatarProps, 'data-color' | 'data-color-variant' | 'border'>;
};

export const nameToInitials = (name?: string): string => {
  if (!name) return '';

  const parts = name.split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase();
};

export function MainLinkItem(props: HeaderLinkItemWithOnClick) {
  const { LinkComponent } = useContext(HeaderContext);

  if (props.url) {
    return (
      <LinkComponent href={props.url} className={classes.mainLinkButton} onClick={props.onClick}>
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
  width = 'container',
  profile,
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
      <Box className={classes.headerInlinePadding} horizontal gap={12} align="center" justify="between" width={width}>
        <Box horizontal align="center" gap={16}>
          <LinkComponent className={classes.logoLink} href={url}>
            <Logo className={classes.logo} variant={variant} height={47} alt={title ?? t('header.alt-text')} />
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
                applications={applications}
                links={links}
                loginHandler={loginHandler}
                logoutHandler={logoutHandler}
                profile={profile}
                slots={slots}
              />
            </div>
            <Box horizontal gap={0} align="center" className={classes.smallScreenHide}>
              <HeaderApps links={links} applications={applications} />
              {slots?.widgets}
              <HeaderProfile links={links} profile={profile} logoutHandler={logoutHandler} />
              {loginHandler && !profile && (
                <LinkComponent
                  onClick={() => {
                    loginHandler?.();
                  }}
                  className={classes.mainLinkButton}
                >
                  <Icon material="login" />
                  <Paragraph>{t('header.login')}</Paragraph>
                </LinkComponent>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
