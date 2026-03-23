import { ReactNode, useContext, useEffect } from 'react';
import { SlotDialogButtonsContainerContext } from '~/components/kystverket/SlotDialog/Buttons/ButtonsContext';

/**
 * Registers button content in SlotDialog when used inside SlotDialogButtonsProvider.
 * If no provider exists, it renders children directly as a safe fallback.
 */
export function SlotDialogButtons({ children }: { children: ReactNode }) {
  const { setButtons } = useContext(SlotDialogButtonsContainerContext);

  useEffect(() => {
    if (!setButtons) {
      return;
    }

    setButtons(children);

    // Clear registered buttons only if this instance still owns them (avoid race condition).
    return () => {
      setButtons((current) => (current === children ? null : current));
    };
  }, [children, setButtons]);

  if (!setButtons) {
    console.warn(
      '<SlotDialog.Buttons> is rendered outside of a <SlotDialog>. Buttons will render normally as a fallback.',
    );
    return children;
  }

  return null;
}
