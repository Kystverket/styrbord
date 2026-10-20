import { createContext, ReactNode } from 'react';
import type { AvatarAuto } from './Avatar';

export const AvatarContext = createContext<{ auto?: AvatarAuto }>({});

export type AvatarProviderProps = {
  /**
   * Default `auto` mode for every `Avatar` inside. An avatar's own `auto` prop takes precedence,
   * so `auto={false}` opts a single avatar out.
   */
  auto?: AvatarAuto;
  children: ReactNode;
};

export const AvatarProvider = ({ auto, children }: AvatarProviderProps) => (
  <AvatarContext.Provider value={{ auto }}>{children}</AvatarContext.Provider>
);
