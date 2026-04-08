import { createContext, ReactNode } from 'react';
import { Link } from '@digdir/designsystemet-react';

export type HeaderLinkComponentProps = {
  className?: string;
  href?: string;
  children: ReactNode;
  onClick?: () => void;
};

export interface HeaderContextProps {
  LinkComponent: React.FC<HeaderLinkComponentProps>;
}

export const HeaderContext = createContext<HeaderContextProps>({
  LinkComponent: Link,
});

export interface ApplicationHeaderContextProps {
  applicationId?: string;
}

export const ApplicationHeaderContext = createContext<ApplicationHeaderContextProps>({
  applicationId: undefined,
});
