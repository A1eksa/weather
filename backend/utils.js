export const filterData = (forecast) => {
  const filteredForecast = {
    icon: forecast.weather[0].icon,
    description: forecast.weather[0].description,
    date: forecast.dt,
    ...forecast.main,
  };
  return filteredForecast;
};
