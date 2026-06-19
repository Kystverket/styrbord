import { createContext, ReactNode, SetStateAction, useState } from 'react';

type SideSheetButtonsContextType = {
  setButtons: React.Dispatch<SetStateAction<ReactNode>> | null;
  buttons: ReactNode | null;
};

export const SideSheetButtonsContext = createContext<SideSheetButtonsContextType>({
  setButtons: null,
  buttons: null,
});

export function SideSheetButtonsProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [buttons, setButtons] = useState<ReactNode>(null);

  return (
    <SideSheetButtonsContext.Provider value={{ setButtons, buttons }}>{children}</SideSheetButtonsContext.Provider>
  );
}
