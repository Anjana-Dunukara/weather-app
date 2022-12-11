const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Boston", (error, geocodedata) => {
  if (error) {
    return console.log("Error: ", error);
  }
  forecast(
    geocodedata.latitude,
    geocodedata.longtitude,
    (error, forecastdata) => {
      if (error) {
        return console.log("Error: ", error);
      }

      console.log(geocodedata.location);
      console.log(forecastdata);
    }
  );
});
