import { FC } from 'react';
import { LinkProps as DsLinkProps, MergeRight } from '@digdir/designsystemet-react';
import { IconId } from '~/main';
export type LinkProps = MergeRight<DsLinkProps, {
    underline?: boolean;
    icon?: IconId;
}>;
export declare const Link: FC<LinkProps>;
