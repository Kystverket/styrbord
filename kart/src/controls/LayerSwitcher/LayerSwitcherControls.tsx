import BaseLayer from "ol/layer/Base";
import { useEffect, useId, useState } from "react";
import { useMap } from "../../MapProvider";
import { LayerSwitcherItemLayer } from "./LayerSwitcherItemLayer";
import { Button, Dropdown } from "@kystverket/styrbord";
import Icon from '../../../../base/src/components/kystverket/Icon/icon';


export function LayerSwitcherControls() {
  const { map } = useMap();
  const [layers, setLayers] = useState<BaseLayer[]>([]);
  const dropdownId = useId();

  useEffect(() => {
    if (!map) return;

    const onChange = (evt: any) => {
      setTimeout(() => {
        setLayers(map.getLayers().getArray().slice(0));
      }, 1000)
    };

    map.getLayers().on(["add", "remove"], onChange);

    onChange(null);

    return () => {
      map.getLayers().un(["add", "remove"], onChange);
    };
  }, [map]);

  return (
    <>
        <Button 
          variant="subtle"
          popovertarget={dropdownId}
          size="sm"
        >
          <Icon material="layers"/>
        </Button>
        <Dropdown id={dropdownId} placement="top-end" style={{ width: "33vw" }}>
          {layers.length > 0 &&
            layers
              .filter((lyr: BaseLayer) => lyr.get("title"))
              .map((lyr: BaseLayer, lyrIdx: number) => {
                return (
                  <LayerSwitcherItemLayer
                    key={`layer-switcher--item-${lyr.get("title")}-${lyrIdx}`}
                    layer={lyr}
                  />
                );
              })}
        </Dropdown>
    </>
  );
}
