import { createContext, ReactNode } from 'react';
import type { AvatarAuto } from './Avatar';

export const AvatarContext = createContext<{ auto?: AvatarAuto; reservedSeed?: string }>({});

export type AvatarProviderProps = {
  /**
   * Default `auto` mode for every `Avatar` inside. An avatar's own `auto` prop takes precedence,
   * so `auto={false}` opts a single avatar out.
   */
  auto?: AvatarAuto;
  /**
   * A seed, typically the logged-in user's id, that gets a generated color no other seed inside
   * gets: a fixed color with `auto="solid"`, and the only pattern that uses that color otherwise.
   * Matched against each avatar's `auto-seed`, or its `aria-label` when it has none.
   */
  'auto-reserved-seed'?: string;
  children: ReactNode;
};

export const AvatarProvider = ({ auto, 'auto-reserved-seed': reservedSeed, children }: AvatarProviderProps) => (
  <AvatarContext.Provider value={{ auto, reservedSeed }}>{children}</AvatarContext.Provider>
);
