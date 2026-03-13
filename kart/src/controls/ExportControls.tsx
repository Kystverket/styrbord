import { Button, Dropdown } from '@kystverket/styrbord';
import Icon from '../../../base/src/components/kystverket/Icon/icon';
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import { useEffect, useState } from "react";
import classes from '../Map.module.css';

interface ExportControlsProps {
  source: VectorSource | null;
}

export const ExportControls = ({ source }: ExportControlsProps) => {
    const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
    const [featureCount, setFeatureCount] = useState(0);

    // Track feature count changes
    useEffect(() => {
      if (!source) return;

      const updateCount = () => setFeatureCount(source.getFeatures().length);
      updateCount(); // Initial count

      source.on('addfeature', updateCount);
      source.on('removefeature', updateCount);

      return () => {
        source.un('addfeature', updateCount);
        source.un('removefeature', updateCount);
      };
    }, [source]);

    const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /** Export features to GeoJSON */
  const exportToGeoJSON = () => {
    if (!source) return;

    const features = source.getFeatures();
    if (features.length === 0) return;

    // Use OpenLayers GeoJSON format for proper coordinate transformation
    const geojsonFormat = new GeoJSON();
    const geojsonObject = geojsonFormat.writeFeaturesObject(features, {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    });

    const geojsonString = JSON.stringify(geojsonObject, null, 2);
    downloadFile(geojsonString, 'drawings.geojson', 'application/geo+json');
    setIsExportDropdownOpen(false);
  };

  if (!source || featureCount === 0) return null;

  return (
    <div className={classes.exportButton}>
        <Button
            variant="subtle"
            size="sm"
            onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
            popovertarget="export-dropdown"
            title="Eksporter"
        >
            <Icon material="download" />Eksporter
        </Button>
        <Dropdown
            open={isExportDropdownOpen}
            onClose={() => setIsExportDropdownOpen(false)}
            placement="right-start"
            id="export-dropdown"
        >
            <Dropdown.Heading>Last ned</Dropdown.Heading>
            <Dropdown.List>
            <Dropdown.Item>
                <Dropdown.Button onClick={exportToGeoJSON}>
                <Icon material="file_save" />
                GeoJSON
                </Dropdown.Button>
            </Dropdown.Item>
            </Dropdown.List>
        </Dropdown>
    </div>
  );
}