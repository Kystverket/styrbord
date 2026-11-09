import { createContext, ReactNode } from 'react';
import type { AvatarAuto } from './Avatar';

export const AvatarContext = createContext<{ auto?: AvatarAuto; reservedSeed?: string; reservedIndex?: number }>({});

export type AvatarProviderProps = {
  /**
   * Default `auto` mode for every `Avatar` inside. An avatar's own `auto` prop takes precedence,
   * so `auto={false}` opts a single avatar out.
   */
  auto?: AvatarAuto;
  /**
   * A seed, typically the logged-in user's id, that gets a `solid` color no other seed inside
   * gets. Matched against each avatar's `auto-seed`, or its `aria-label` when it has none.
   * Generated patterns ignore it.
   */
  'auto-reserved-seed'?: string;
  /**
   * Which `solid` palette color `auto-reserved-seed` gets. Any integer works: it wraps around
   * the palette's length, so -1 is the last color.
   * @default 0
   */
  'auto-reserved-index'?: number;
  children: ReactNode;
};

export const AvatarProvider = ({
  auto,
  'auto-reserved-seed': reservedSeed,
  'auto-reserved-index': reservedIndex,
  children,
}: AvatarProviderProps) => (
  <AvatarContext.Provider value={{ auto, reservedSeed, reservedIndex }}>{children}</AvatarContext.Provider>
);
