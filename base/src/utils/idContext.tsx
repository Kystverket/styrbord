import { createContext, useContext, useMemo } from 'react';

interface IdContextType {
  path: string[];
}

const IdContext = createContext<IdContextType>({ path: [] });

export function IdProvider({ id, children }: { id: string; children: React.ReactNode }) {
  const parent = useContext(IdContext);

  const value = useMemo(
    () => ({
      path: [...parent.path, id],
    }),
    [parent.path, id],
  );

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
}

export const useIdProvider = () => {
  const { path } = useContext(IdContext);

  const getId = (...segments: unknown[]): string => {
    return [...path, ...segments]
      .map(String)
      .map((s) => s.toLocaleLowerCase())
      .join('__');
  };

  return { getId };
};
