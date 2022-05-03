const fs = require("fs");
const path = require("path");
const gpx = require("@tmcw/togeojson").gpx;
const DOMParser = require("xmldom").DOMParser;

// Loop over all gpx files in public/assets/blog/track-recordings
// and convert them to geojson
const gpxToGeojson = () => {
  const gpxFiles = fs.readdirSync(
    path.join(__dirname, "../public/assets/blog/track-recordings")
  );

  gpxFiles.forEach((file) => {
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
    const geojsonData = gpx(new DOMParser().parseFromString(xml, "text/xml"));

    // Write geojson to file
    fs.writeFileSync(geojsonFile, JSON.stringify(geojsonData));
  });
};

gpxToGeojson();
