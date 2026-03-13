import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import { useMemo } from "react";
import { Divider, Label } from "@kystverket/styrbord";
import { LayerSwitcherItemLayer } from "./LayerSwitcherItemLayer";

export type LayerSwitcherItemGroupProps = {
  layerGroup: LayerGroup;
};

export function LayerSwitcherItemLayerGroup({
  layerGroup,
}: LayerSwitcherItemGroupProps) {
  const layers = useMemo(() => {
    return layerGroup.getLayersArray();
  }, [layerGroup]);
  
  return (
    <>
      <Label>{layerGroup.get("title")}</Label>
      {layers.length > 0 &&
        layers.map((layer: BaseLayer, layerIdx: number) => {
          return (
            <LayerSwitcherItemLayer
              key={`layer-switcher--item-layer-in-group-${layerIdx}`}
              layer={layer}
            />
          );
        })}
        {layerGroup.get("title") === "Bakgrunnskart" && <Divider />}
    </>
  );
}
