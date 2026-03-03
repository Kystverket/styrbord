import { FC } from 'react';
import { AvatarProps as DsAvatarProps, MergeRight } from '@digdir/designsystemet-react';
type AriaLabel = {
    /**
     * The name of the person the avatar represents.
     */
    'aria-label': string;
};
type AriaHidden = Partial<AriaLabel> & {
    'aria-hidden': true | 'true';
};
export type AvatarProps = MergeRight<DsAvatarProps, (AriaLabel | AriaHidden) & {
    'data-size'?: '2xs' | '3xs' | DsAvatarProps['data-size'];
    'data-color-variant'?: 'base' | 'surface-tinted';
}>;
export declare const Avatar: FC<AvatarProps>;
export {};
