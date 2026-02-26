import { useCallback, useRef } from 'react';

// hooks/useDragScroll.ts
export const useHorizontalDragScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startXRef.current;

    if (Math.abs(walk) > 5) {
      hasMovedRef.current = true;
    }

    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    isDraggingRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }

    setTimeout(() => {
      hasMovedRef.current = false;
    }, 0);
  }, []);

  return {
    scrollRef,
    hasMovedRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUpOrLeave,
      onMouseLeave: handleMouseUpOrLeave,
    },
  };
};
