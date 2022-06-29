import express from 'express';
import cors from 'cors';
// const fetch = require('node-fetch');
import Fetch from 'react-fetch';
import { filterData } from './utils.js';

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// try {
//   const data = await fetchData();
//   chacheTime = Date.now();
//   cacheData = data;
// } catch (error) {
//   console.log('Here is the error', error);
//   chacheTime = 0;
// }

// Start defining your routes here
app.get('/', async (request, response) => {
  const api_url =
    'https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb&units=metric';
  // single day call

  try {
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    const forecast = filterData(json);
    response.json(forecast);
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=59.3293&lon=18.0686&appid=eecbdbcaf5898765ececc528ec1f76a8
// 3hour forcast 5 day works 'https://api.openweathermap.org/data/2.5/forecast?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb';

// https://api.openweathermap.org/data/2.5/forecast/daily?lat=59.3293&lon=18.0686&cnt=10&appid=0857813cedbd03d653fc7a1847fff1ec

// https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb

//const api_url =
//'https://api.openweathermap.org/data/2.5/forecast?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb';
// forecast 5 day/ 3 hour
