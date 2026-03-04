import React, { createContext, ReactNode } from "react";

interface ViewBoundsContextProps {
  viewBounds?: number[][][] | undefined;
  setViewBounds: (viewBounds: number[][][] | undefined) => void;
}

export const ViewBoundsContext = createContext<ViewBoundsContextProps>({
  setViewBounds: (_viewBounds: number[][][] | undefined) => {},
});

export const ViewBoundsProvider = ({ children }: { children: ReactNode }) => {
  const [viewBounds, setViewBounds] = React.useState<number[][][] | undefined>(
    undefined,
  );

  const updateViewBounds = (bounds: number[][][] | undefined): void => {
    setViewBounds(bounds);
  };

  return (
    <ViewBoundsContext.Provider
      value={{ viewBounds, setViewBounds: updateViewBounds }}
    >
      {children}
    </ViewBoundsContext.Provider>
  );
};
