import { FeatureCollection, Geometry } from "geojson";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { GeoJsonAnnotater, GeoJsonAnnotaterProps } from "~/main";
import StyrbordDecorator from "../../../storybook/styrbordDecorator";

const Wrapper = (props: GeoJsonAnnotaterProps) => {
  const [data, setData] = useState<FeatureCollection<Geometry>>(
    structuredClone(props.data),
  );

  const onChange = (d: FeatureCollection<Geometry>) => {
    setData(d);
    props.onChange(d);
  };

  return (
    <>
      <GeoJsonAnnotater
        data={data}
        onChange={onChange}
        annotations={props.annotations}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

const meta = {
  title: "Maps/GeoJsonAnnotater",
  component: Wrapper,
  decorators: [StyrbordDecorator],
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps: GeoJsonAnnotaterProps = {
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          nummer: 1,
          beskrivelse: "Dette er en beskrivelse",
        },
        geometry: {
          type: "Point",
          coordinates: [10.0, 10.0],
        },
      },
    ],
  },
  onChange: () => console.log("clicked onChange"),
  annotations: [{ name: "beskrivelse", type: "text" }],
};

export const Default: Story = {
  args: defaultProps,
};
