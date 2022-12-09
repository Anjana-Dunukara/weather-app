const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=fe42a58169837ab002c0615d7698f253&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is curruntly " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});

const urlgeo =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHVudTk3IiwiYSI6ImNsYmdsNnZlajBoNzMzcHBkOWtxc20xZDMifQ.-X2t0qoTnKLm_apQ-R3jQw&limit=1";

request({ url: urlgeo, json: true }, (error, response) => {
  //   console.log(response);

  const geodata = response.body.features[0];

  console.log(
    "Your lattidude: " +
      geodata.center[1] +
      " Your longtitude: " +
      geodata.center[0] +
      ""
  );
});
