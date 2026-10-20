import { Avatar } from '~/main';
import { useState } from 'react';
import { HeaderProps, nameToInitials } from './Header';

type HeaderAvatarProps = {
  profile: NonNullable<HeaderProps['profile']>;
};

export function HeaderAvatar({ profile }: HeaderAvatarProps) {
  // Remember which URL failed, so a new image is tried again
  const [failedImage, setFailedImage] = useState<string>();
  const showImage = !!profile.image && profile.image !== failedImage;

  return (
    <Avatar
      aria-label={`${profile.name} profile picture`}
      data-size="2xs"
      initials={nameToInitials(profile.name)}
      {...(profile.avatarStyle || { 'data-color': 'success' })}
      // An AvatarProvider's generated pattern would otherwise sit behind the picture
      {...(showImage && { auto: false })}
    >
      {showImage && <img src={profile.image} alt="" onError={() => setFailedImage(profile.image)} />}
    </Avatar>
  );
}
