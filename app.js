const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (location) {
  //Adding a empty object after response(Line 11) object destructuring because if error occurs response will be undifine,
  //so if node tries to destructure undifine object it gonna throw a error if you provide a empty object, if there is no values to destructure
  //it will automatically initialize the default value in that object in this case empty object(undefine to the each prperty).

  geocode(location, (error, { latitude, longtitude, location } = {}) => {
    if (error) {
      return console.log("Error: ", error);
    }
    forecast(latitude, longtitude, (error, forecastdata) => {
      if (error) {
        return console.log("Error: ", error);
      }
      console.log(location);
      console.log(forecastdata);
    });
  });
} else {
  console.log("Please Enter the location you want to check the weather");
}
