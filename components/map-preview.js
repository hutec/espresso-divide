import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Popup, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import path from "path";
import Link from "next/link";

import chroma from "chroma-js";

const Route = ({
  track,
  updateMapBounds = true,
  color = "#000000",
  title = null,
  slug = null,
}) => {
  // See https://stackoverflow.com/questions/68758035/how-to-render-geojson-polygon-in-react-leaflet-mapcontainer
  const [geojson, setGeojson] = useState(0);
  const map = useMap();
  const router = useRouter();

  useEffect(() => {
    const url = path.join(router.basePath, track);

    const geojsonFile = url.replace(".gpx", ".geojson");

    fetch(geojsonFile)
      .then((response) => response.json())
      .then((data) => {
        if (updateMapBounds) {
          map.fitBounds(data.bounds, { padding: [50, 50] });
        }
        setGeojson(data);
      });
  }, []);

  if (geojson) {
    return (
      <GeoJSON data={geojson} color={color}>
        {!!slug && !!title && (
          <Popup>
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </Popup>
        )}
      </GeoJSON>
    );
  } else {
    return null;
  }
};

export function MapOverview({ posts, bounds }) {
  const colors = chroma.scale(["hotpink", "#2A4858"]).mode("lch").colors(3);

  const postAndColors = posts.map((post, index) => {
    return { post, color: colors[index % colors.length] };
  });

  return (
    <div>
      <div className="my-5 h-1/2">
        <MapContainer
          bounds={bounds}
          zoom={4}
          scrollWheelZoom={true}
          className="h-96 w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {postAndColors.map((post) => (
            <Route
              key={post.post.slug}
              track={post.post.track}
              updateMapBounds={false}
              color={post.color}
              slug={post.post.slug}
              title={post.post.title}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

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
          <Route track={track} updateMapBounds={true} />
        </MapContainer>
      </div>
    </div>
  );
}
