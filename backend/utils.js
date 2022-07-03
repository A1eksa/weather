///filter data for one day
export const filterData = (forecast) => {
  const filteredForecast = {
    icon: forecast.weather[0].icon,
    description: forecast.weather[0].description,
    // city: forecast.name,
    date: forecast.dt,
    // id: forecast.weather[0].id,
    ...forecast.main,
  };
  return filteredForecast;
};

// export const filterTestData = (forecast) => {
//   const filteredTestForecast = {
//     ...forecast.list,
//     city: forecast.city[0].name,
//     id: forecast.city.id,

//     // icon: forecast.city.icon,
//   };
//   return filteredTestForecast;
// };

// export const filterDaysData = (forecast) => {
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
