import { createContext, useContext } from 'react';
import type { SideSheetLayoutProps } from '~/components/kystverket/SideSheet/SideSheet.types';
import classes from './SideSheetLayout.module.css';

/** Internal context so SideSheet can warn when rendered outside a layout wrapper. */
export const SideSheetLayoutContext = createContext(false);

export function useSideSheetLayoutContext() {
  return useContext(SideSheetLayoutContext);
}

/**
 * Required wrapper when using `pinnable` or `mode="push"`.
 *
 * Renders as a flex container so that a pinned SideSheet takes a fixed width
 * and the remaining content fills the rest of the row.
 *
 * ```tsx
 * <SideSheet.Layout>
 *   <main>…page content…</main>
 *   <SideSheet open={isOpen} onClose={() => setOpen(false)} pinnable title="Details" />
 * </SideSheet.Layout>
 * ```
 */
export function SideSheetLayout({ children, className = '', style }: SideSheetLayoutProps) {
  return (
    <SideSheetLayoutContext.Provider value={true}>
      <div className={`${classes.layout} ${className}`} style={style}>
        {children}
      </div>
    </SideSheetLayoutContext.Provider>
  );
}
