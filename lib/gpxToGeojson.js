const fs = require("fs");
const path = require("path");
const gpx = require("@tmcw/togeojson").gpx;
const DOMParser = require("xmldom").DOMParser;

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

// Loop over all gpx files in public/assets/blog/track-recordings
// and convert them to geojson
const gpxToGeojson = () => {
  const gpxFiles = fs.readdirSync(
    path.join(__dirname, "../public/assets/blog/track-recordings")
  );

  // filter files ending .gpx
  const gpxFilesToConvert = gpxFiles.filter((file) => file.endsWith(".gpx"));
  gpxFilesToConvert.forEach((file) => {
    const gpxFile = path.join(
      __dirname,
      "../public/assets/blog/track-recordings",
      file
    );
    const geojsonFile = path.join(
      __dirname,
      "../public/assets/blog/track-recordings",
      file.replace(".gpx", ".geojson")
    );

    // Read gpxFile to string
    const xml = fs.readFileSync(gpxFile, "utf8");

    // Parse gpx file
    var geojsonData = gpx(new DOMParser().parseFromString(xml, "text/xml"));
    geojsonData.bounds = getBounds(
      geojsonData.features[0].geometry.coordinates
    );

    // Write geojson to file
    fs.writeFileSync(geojsonFile, JSON.stringify(geojsonData));
  });
};

gpxToGeojson();
