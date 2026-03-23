import { createContext, ReactNode, SetStateAction, useState } from 'react';

type SlotDialogButtonsContainerContextType = {
  setButtons: React.Dispatch<SetStateAction<ReactNode>> | null;
  buttons: ReactNode | null;
};

// `setButtons: null` indicates standalone mode (outside SlotDialog provider).
export const SlotDialogButtonsContainerContext = createContext<SlotDialogButtonsContainerContextType>({
  setButtons: null,
  buttons: null,
});

export function SlotDialogButtonsProvider({ children }: { children: ReactNode }) {
  const [buttons, setButtons] = useState<ReactNode>(null);

  return (
    <SlotDialogButtonsContainerContext.Provider value={{ setButtons, buttons }}>
      {children}
    </SlotDialogButtonsContainerContext.Provider>
  );
}
