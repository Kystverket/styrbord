"use client";

import {
  Field,
  Label,
  LabelContent,
  ValidationMessage,
} from "@kystverket/styrbord";
import type { FeatureCollection, Geometry } from "geojson";

import { GeoJsonEditor } from "~/components/GeoJsonEditor/GeoJsonEditor";
import { GeoJsonAnnotater } from "~/components/GeoJsonAnnotater/GeoJsonAnnotater";
import type { MapFieldProps } from "./MapField.types";

const getValidationError = (
  formState: MapFieldProps,
  key: string,
  touchedState: Record<string, boolean> | undefined = undefined,
  validationErrors: Record<string, string> | undefined = undefined,
  showUntouchedValidationErrors: boolean | undefined = undefined,
): string | null => {
  const touched = touchedState ?? formState.touchedState;
  const errors = validationErrors ?? formState.validationErrors;
  const showUntouched =
    showUntouchedValidationErrors ?? formState.showUntouchedValidationErrors;

  if (!touched?.[key] && !showUntouched) {
    return null;
  }
  if (!errors?.[key]) {
    return null;
  }
  return errors[key];
};

const mapAnnotationErrorFn = (formState: MapFieldProps) => (key: string) =>
  getValidationError(formState, key);

export function MapField({
  label,
  description,
  required,
  optional,
  annotations,
  value,
  onChange,
  error,
  ...editorProps
}: MapFieldProps) {
  const getAnnotationError = mapAnnotationErrorFn({
    touchedState: editorProps.touchedState,
    validationErrors: editorProps.validationErrors,
    showUntouchedValidationErrors: editorProps.showUntouchedValidationErrors,
  });

  return (
    <Field>
      {label && (
        <Label>
          <LabelContent text={label} required={required} optional={optional} />
        </Label>
      )}
      {description && <Field.Description>{description}</Field.Description>}
      <GeoJsonEditor value={value} onChange={onChange} {...editorProps} />
      {annotations && value && onChange && (
        <GeoJsonAnnotater
          data={value as FeatureCollection<Geometry>}
          onChange={onChange as (data: FeatureCollection<Geometry>) => void}
          annotations={annotations}
          getError={getAnnotationError}
        />
      )}
      {error && <ValidationMessage>{error}</ValidationMessage>}
    </Field>
  );
}
