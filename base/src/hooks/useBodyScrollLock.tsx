import { useEffect } from 'react';

// Module-level counter so multiple modal overlays (SideSheet, FilePreviewer, or other modals
// sharing this convention) can be open at once without one closing early stealing the page's
// scroll back too soon.
let scrollLockCount = 0;
let previousBodyOverflow = '';

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    if (scrollLockCount === 0) {
      previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    scrollLockCount++;

    return () => {
      scrollLockCount--;
      if (scrollLockCount === 0) document.body.style.overflow = previousBodyOverflow;
    };
  }, [locked]);
}
