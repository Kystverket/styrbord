import { CardProps as DsCardProps } from '@digdir/designsystemet-react';
import { IconId } from '~/main';
export type CardProps = Omit<DsCardProps, 'children'> & {
    title?: string;
    titleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    icon?: IconId;
    link?: string;
    children?: React.ReactNode;
};
declare const Card: {
    ({ title, icon, link, children, titleLevel, ...props }: CardProps): React.JSX.Element;
    Block: React.ForwardRefExoticComponent<{
        asChild?: boolean;
    } & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
};
export default Card;
