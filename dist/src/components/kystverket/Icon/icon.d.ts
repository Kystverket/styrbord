import { IconId } from './icon.types';
type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export interface MaterialIconProps {
    material: IconId;
    filled?: boolean;
    className?: string;
    size?: IconSize;
}
declare const Icon: ({ material, filled, className, size }: MaterialIconProps) => React.JSX.Element;
export default Icon;
