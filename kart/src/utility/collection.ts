import { Feature, FeatureCollection, Geometry } from "geojson";
import { getUuid } from "./uuid";

export const getHighestNumberInFeatures = (
  features: Feature<Geometry>[],
): number => {
  return features.reduce((acc, feature) => {
    const nummer = parseInt(String(feature.properties?.nummer ?? 0));
    if (nummer > acc) {
      return nummer;
    }
    return acc;
  }, 0);
};

export const ensureCollectionConsistency = (
  geojson: FeatureCollection<Geometry>,
): FeatureCollection<Geometry> => {
  let nextAvailableNumber = getHighestNumberInFeatures(geojson.features) + 1;
  return {
    ...geojson,
    features: geojson.features
      .filter(
        (feature) =>
          (feature.geometry.type === "Point" &&
            feature.geometry.coordinates?.length > 0) ||
          (feature.geometry.type === "Polygon" &&
            feature.geometry.coordinates[0][0]?.length > 0) ||
          (feature.geometry.type === "LineString" &&
            feature.geometry.coordinates[0]?.length > 0),
      )
      .map((feature) => {
        const nummer = feature.properties?.nummer ?? nextAvailableNumber++;
        const id = feature.properties?.id ?? getUuid();

        return {
          ...feature,
          properties: {
            ...feature.properties,
            id,
            nummer,
          },
        };
      }),
  };
};
