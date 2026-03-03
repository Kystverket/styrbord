import { IconId } from '~/main';
export type CardTitleProps = {
    children?: React.ReactNode;
    icon?: IconId;
    href?: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};
declare const CardTitle: ({ icon, href, children, level, size }: CardTitleProps) => React.JSX.Element;
export default CardTitle;
