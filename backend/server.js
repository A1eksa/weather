import express from 'express';
import cors from 'cors';
import Fetch from 'react-fetch';
import { filterData } from './utils.js';

// Defines the port the app will run on. Defaults to 8080, but can be overridden
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

app.get('/', async (request, response) => {
  const api_url_days =
    'https://api.openweathermap.org/data/2.5/forecast?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb&units=metric';

  try {
    const fetch_response = await fetch(api_url_days);
    const json = await fetch_response.json();
    console.log(json);
    const forecast = json.list
      .filter((item) => item.dt_txt)
      .map((listItem) => filterData(listItem))
      .slice(0, 4);
    console.log(forecast);
    response.json(forecast);
  } catch (error) {
    response.status(400).json({ response: error, success: false });
  }
});

app.get('/days', async (request, response) => {
  const api_url_days =
    'https://api.openweathermap.org/data/2.5/forecast?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb&units=metric';

  try {
    const fetch_response = await fetch(api_url_days);
    const json = await fetch_response.json();
    const weather = json.list
      .filter((item) => item.dt_txt.includes('21:00'))
      .map((listItem) => filterData(listItem));

    response.json(weather);
  } catch (error) {
    response.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
