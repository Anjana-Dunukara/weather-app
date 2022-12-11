const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (location) {
  geocode(location, (error, geocodedata) => {
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
} else {
  console.log("Please Enter the location you want to check the weather");
}
