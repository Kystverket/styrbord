import React, { createContext, ReactNode } from "react";
import type { Coordinate } from "~/utility/types";
import {
  DEFAULT_BOUNDS,
  DEFAULT_CENTER,
  DEFAULT_ZOOM,
} from "~/utility/mapStyle";

interface ViewBoundsContextProps {
  viewBounds?: number[][][] | undefined;
  setViewBounds: (viewBounds: number[][][] | undefined) => void;
  /** Default center of all maps inside this provider. */
  defaultCenter: Coordinate;
  /** Default zoom level of all maps inside this provider. */
  defaultZoom: number;
  /** Default bounds used to fit the map on init. Defaults to mainland Norway. */
  defaultBounds: [[number, number], [number, number]];
}

export const ViewBoundsContext = createContext<ViewBoundsContextProps>({
  setViewBounds: (_viewBounds: number[][][] | undefined) => {},
  defaultCenter: DEFAULT_CENTER,
  defaultZoom: DEFAULT_ZOOM,
  defaultBounds: DEFAULT_BOUNDS,
});

export interface ViewBoundsProviderProps {
  children: ReactNode;
  /** Initial center of the map when no value is set. Defaults to approx. center of Norway. */
  defaultCenter?: Coordinate;
  /** Initial zoom level of the map. Defaults to 5. */
  defaultZoom?: number;
  /** Initial bounds used to fit the map on init. Defaults to mainland Norway. */
  defaultBounds?: [[number, number], [number, number]];
}

export const ViewBoundsProvider = ({
  children,
  defaultCenter = DEFAULT_CENTER,
  defaultZoom = DEFAULT_ZOOM,
  defaultBounds = DEFAULT_BOUNDS,
}: ViewBoundsProviderProps) => {
  const [viewBounds, setViewBounds] = React.useState<number[][][] | undefined>(
    undefined,
  );

  const updateViewBounds = (bounds: number[][][] | undefined): void => {
    setViewBounds(bounds);
  };

  return (
    <ViewBoundsContext.Provider
      value={{
        viewBounds,
        setViewBounds: updateViewBounds,
        defaultCenter,
        defaultZoom,
        defaultBounds,
      }}
    >
      {children}
    </ViewBoundsContext.Provider>
  );
};
