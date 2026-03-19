import { useRef } from 'react';
import { useOnClickOutsideAndEscape } from '~/hooks/useOnClickOutsideAndEscape';
import { Avatar, Box, Button, Divider, HeaderProps, Icon, Paragraph } from '~/main';
import classes from './HeaderProfile.module.css';

type HeaderProfileProps = {
  isProfileOpen: boolean;
  toggleProfileOpen: () => void;
  closeProfile: () => void;
} & Required<Pick<HeaderProps, 'profile' | 'linkComponent'>>;

export function HeaderProfile({
  profile,
  isProfileOpen,
  toggleProfileOpen,
  closeProfile,
  linkComponent: LinkComponent,
}: HeaderProfileProps) {
  const profileRef = useRef<HTMLDivElement>(null);

  useOnClickOutsideAndEscape(profileRef, closeProfile);

  return (
    <div className={classes.profileRoot} ref={profileRef}>
      <Button variant="ghost" onClick={toggleProfileOpen} className={`${classes.profileButtonDesktop}`}>
        <Avatar
          aria-label={`${profile.name} profile picture`}
          data-color={'primary'}
          data-size="2xs"
          initials={profile.initials}
        />
        <Paragraph className={classes.profileName}>
          <span>{profile.name}</span>
        </Paragraph>
        <Icon material={isProfileOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
      </Button>
      <Button onClick={toggleProfileOpen} variant="ghost" className={`${classes.profileButtonCompact} `}>
        <Icon material="person" />
        Profil
      </Button>

      {/* Profile Menu */}
      {isProfileOpen && (
        <Box className={classes.profileMenu}>
          <Box horizontal className={classes.profileMenuHeader}>
            <Avatar
              aria-label={`${profile.name} profile picture`}
              data-color={'primary'}
              data-size="2xs"
              initials={profile.initials}
            />
            <Box className={classes.profileMeta}>
              <Paragraph className={`${classes.profileDisplayName} ${classes.truncateOverflow}`}>
                {profile.name}
              </Paragraph>
              <Paragraph className={`${classes.profileDepartment} ${classes.truncateOverflow}`}>
                {profile.department}
              </Paragraph>
            </Box>
          </Box>
          <Divider />
          {/* Profile links */}
          {profile?.links &&
            profile.links.map((link, index) => (
              <LinkComponent
                key={index}
                href={link.url}
                className={`${classes.profileMenuButton}`}
                onClick={toggleProfileOpen}
              >
                <Icon material={link.icon} />
                <Paragraph>{link.label}</Paragraph>
              </LinkComponent>
            ))}
          {profile?.links && <Divider />}
          {/* End of Profile links */}
          <Button variant="ghost" onClick={() => profile.logoutHandler()} className={`${classes.profileLogoutButton}`}>
            <Icon material="logout" />
            Logg ut
          </Button>
        </Box>
      )}
      {/*End Of Profile Menu */}
    </div>
  );
}
