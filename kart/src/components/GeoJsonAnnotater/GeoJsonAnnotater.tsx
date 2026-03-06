'use client';

import { Box, TextInput, ValidationMessage, useIdProvider } from '@kystverket/styrbord';
import { FeatureCollection, Geometry } from 'geojson';

export interface GeoJsonAnnotaterProps {
  data: FeatureCollection<Geometry>;
  onChange: (geojson: FeatureCollection<Geometry>) => void;
  annotations: [
    {
      name: string;
      type: 'text';
    },
  ];
  getError?: (key: string) => string | null;
}

export const GeoJsonAnnotater = ({ data, onChange, annotations, getError = undefined }: GeoJsonAnnotaterProps) => {
  const { getId } = useIdProvider();
  const onFeatureChange = (index: number, name: string, value: string) => {
    const newFeatures = [
      ...data.features.slice(0, index),
      { ...data.features[index], properties: { ...data.features[index].properties, [name]: value } },
      ...data.features.slice(index + 1),
    ];
    onChange({ ...data, features: newFeatures });
  };

  const getAnnotationError = (index: number, key: string) => getError?.(`features[${index}].properties.${key}`);

  return data.features.map((feature, index) => (
    <Box key={index}>
      {annotations.map((annotation) => (
        <Box key={annotation.name}>
          <Box horizontal width="full" align="center" gap={8}>
            <span>#{feature.properties?.nummer}</span>
            <Box grow>
              <TextInput
                id={getId('features', index, 'properties', annotation.name)}
                value={feature.properties?.[annotation.name]}
                size="full"
                onChange={(value) => {
                  onFeatureChange(index, annotation.name, value);
                }}
              />
            </Box>
          </Box>
          {getAnnotationError(index, annotation.name) && (
            <ValidationMessage key={annotation.name}>{getAnnotationError(index, annotation.name)}</ValidationMessage>
          )}
        </Box>
      ))}
    </Box>
  ));
};
