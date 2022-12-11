const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fe42a58169837ab002c0615d7698f253&query=" +
    encodeURIComponent(longtitude) +
    "," +
    encodeURIComponent(latitude) +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather Stack API", undefined);
    } else if (response.body.error) {
      callback("Unable to find location your seraching");
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is curruntly " +
          response.body.current.temperature +
          " degrees out. It feels like " +
          response.body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
