const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const url =
//   "http://api.weatherstack.com/current?access_key=fe42a58169837ab002c0615d7698f253&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is curruntly " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

geocode("Boston", (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
