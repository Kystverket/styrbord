import { TabsProps as DsTabsProps } from '@digdir/designsystemet-react';
export type TabsProps = DsTabsProps & {
    underlined?: boolean;
};
declare const Tabs: {
    ({ underlined, className, ...props }: TabsProps): React.JSX.Element;
    List: React.ForwardRefExoticComponent<import("@digdir/designsystemet-react").TabsListProps & React.RefAttributes<HTMLDivElement>>;
    Tab: React.ForwardRefExoticComponent<{
        value: string;
    } & Omit<React.HTMLAttributes<HTMLButtonElement>, "value"> & React.RefAttributes<HTMLButtonElement>>;
    Panel: React.ForwardRefExoticComponent<{
        value: string;
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "value"> & React.RefAttributes<HTMLDivElement>>;
};
export default Tabs;
