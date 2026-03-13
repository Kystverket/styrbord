import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import { ObjectEvent } from "ol/Object";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Checkbox } from "@kystverket/styrbord";
import { LayerSwitcherItemLayerGroup } from "./LayerSwitcherItemLayerGroup";

export type LayerSwitcherItemLayerProps = {
  layer: BaseLayer;
};

export function LayerSwitcherItemLayer({
  layer,
}: LayerSwitcherItemLayerProps) {
  const [visible, setVisible] = useState<boolean>(layer.getVisible());

  const handleChange = useCallback((evt: ObjectEvent) => {
    setVisible(evt.target.getVisible())
  }, []);

  useEffect(() => {
    if (layer instanceof LayerGroup) return;
    layer.on("change:visible", handleChange);
    return () => {
      layer.un("change:visible", handleChange);
    };
  }, [handleChange, layer]);

  if (layer instanceof LayerGroup) {
    return <LayerSwitcherItemLayerGroup layerGroup={layer as LayerGroup} />;
  }

  return (
      <Checkbox
        checked={visible ? true : false}
        label={layer.get("title")}
        onChange={(evt : ChangeEvent<HTMLInputElement>) => {
          layer.setVisible(evt.target.checked);
          setVisible(evt.target.checked);
        }}
      />
  );
}
