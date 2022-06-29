import React, { useEffect, useState } from 'react';

export const WeatherDays = () => {
  const [weather, setWeather] = useState({});
  const url = 'http://localhost:8080/days';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, []);
  return (
    <>
      <div>hello</div>
    </>
  );
};
