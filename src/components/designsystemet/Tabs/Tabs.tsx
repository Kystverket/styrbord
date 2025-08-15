import { Tabs as DsTabs, TabsProps as DsTabsProps } from '@digdir/designsystemet-react';
import classes from './Tabs.module.scss';

export type TabsProps = DsTabsProps & {
  underlined?: boolean;
};

const Tabs = ({ underlined = true, className = '', ...props }: TabsProps) => {
  const classNames = [className];
  if (!underlined) {
    classNames.push(classes.notUnderlined);
  }
  return <DsTabs className={classNames.join('')} {...props} />;
};

export default Tabs;

Tabs.List = DsTabs.List;
Tabs.Tab = DsTabs.Tab;
Tabs.Panel = DsTabs.Panel;
