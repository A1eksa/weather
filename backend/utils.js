///filter data for one day
export const filterData = (forecast) => {
  const filteredForecast = {
    ...forecast.main,
    icon: forecast.weather[0].icon,
    description: forecast.weather[0].description,
    city: forecast.name,
    country: forecast.sys.country,
    date: forecast.dt,
  };
  return filteredForecast;
};

// export const fetchData = async () => {
//   const api_url =
//     'https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=39cc3cd47c5ea2b190a2f97c31df95bb';
//   const fetch_response = await fetch(api_url);
//   const json = await fetch_response.json();
//   const forecast = filterData(json);
//   return forecast;
// }
