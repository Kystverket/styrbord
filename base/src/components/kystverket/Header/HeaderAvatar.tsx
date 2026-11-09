import { Avatar } from '~/main';
import { useContext, useState } from 'react';
import { AvatarContext } from '../../designsystemet/Avatar/Avatar.context';
import { HeaderProps, nameToInitials } from './Header';

type HeaderAvatarProps = {
  profile: NonNullable<HeaderProps['profile']>;
};

export function HeaderAvatar({ profile }: HeaderAvatarProps) {
  // Remember which URL failed, so a new image is tried again
  const [failedImage, setFailedImage] = useState<string>();
  const showImage = !!profile.image && profile.image !== failedImage;

  const context = useContext(AvatarContext);
  const avatarStyle = profile.avatarStyle ?? {};
  // The success color is only a fallback: it would override generated solid colors
  const usesDefaultColor = !profile.avatarStyle && !context.auto;

  return (
    <Avatar
      aria-label={`${profile.name} profile picture`}
      data-size="2xs"
      initials={nameToInitials(profile.name)}
      // Seed from the person, not the label, so they look the same here as in other avatars
      auto-seed={profile.id ?? profile.name}
      {...(usesDefaultColor && { 'data-color': 'success' as const })}
      {...avatarStyle}
      // An AvatarProvider's generated pattern would otherwise sit behind the picture
      {...(showImage && { auto: false })}
    >
      {showImage && <img src={profile.image} alt="" onError={() => setFailedImage(profile.image)} />}
    </Avatar>
  );
}
