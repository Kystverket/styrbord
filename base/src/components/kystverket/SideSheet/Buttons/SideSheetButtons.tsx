import { ReactNode, useContext, useEffect } from 'react';
import { SideSheetButtonsContext } from '~/components/kystverket/SideSheet/Buttons/ButtonsContext';

/**
 * Registers footer button content inside a `<SideSheet>`.
 * If rendered outside a SideSheet it falls back to rendering children directly.
 */
export function SideSheetButtons({ children }: { children: ReactNode }) {
  const { setButtons } = useContext(SideSheetButtonsContext);

  useEffect(() => {
    if (!setButtons) return;

    setButtons(children);

    return () => {
      setButtons((current) => (current === children ? null : current));
    };
  }, [children, setButtons]);

  if (!setButtons) {
    console.warn(
      '<SideSheet.Buttons> is rendered outside of a <SideSheet>. Buttons will render normally as a fallback.',
    );
    return children;
  }

  return null;
}
