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

// export const filterData = (forecast) => {
//   const filteredForecast = {
//     ...forecast.main,
//     icon: forecast.weather[0].icon,
//     description: forecast.weather[0].description,
//     city: forecast.name,
//     country: forecast.sys.country,
//     date: forecast.dt,
//   };
//   return filteredForecast;
// };
