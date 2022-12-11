const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZHVudTk3IiwiYSI6ImNsYmdsNnZlajBoNzMzcHBkOWtxc20xZDMifQ.-X2t0qoTnKLm_apQ-R3jQw&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to mapbox API", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location you searched", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longtitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;