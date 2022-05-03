import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { bounds } from "leaflet";
import path from "path";

const getBounds = (coordinates) => {
  const [minLat, minLon, maxLat, maxLon] = coordinates.reduce(
    (acc, [lon, lat]) => {
      acc[0] = Math.min(acc[0], lat);
      acc[1] = Math.min(acc[1], lon);
      acc[2] = Math.max(acc[2], lat);
      acc[3] = Math.max(acc[3], lon);
      return acc;
    },
    [Infinity, Infinity, -Infinity, -Infinity]
  );
  return [
    [minLat, minLon],
    [maxLat, maxLon],
  ];
};

const Route = ({ track }) => {
  // See https://stackoverflow.com/questions/68758035/how-to-render-geojson-polygon-in-react-leaflet-mapcontainer
  const [geojson, setGeojson] = useState(0);
  const map = useMap();
  const router = useRouter();

  useEffect(() => {
    const url = path.join(router.basePath, track);

    // Replace .gpx with .geojson
    const geojsonFile = url.replace(".gpx", ".geojson");

    // read geojson file
    fetch(geojsonFile)
      .then((response) => response.json())
      .then((data) => {
        setGeojson(data);
        bounds = getBounds(data.features[0].geometry.coordinates);
        map.fitBounds(bounds, { padding: [50, 50] });
      });
  }, []);

  if (geojson) {
    return <GeoJSON data={geojson} />;
  } else {
    return null;
  }
};

export default function MapPreview({ track }) {
  return (
    <div>
      <div className="my-5 h-1/2">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={4}
          scrollWheelZoom={false}
          className="h-96 w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Route track={track} />
        </MapContainer>
      </div>
    </div>
  );
}
