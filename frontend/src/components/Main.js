import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Main = () => {
  const [forecast, setForecast] = useState({});
  const url = 'http://localhost:8080/';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForecast(data);
      });
  }, []);
  return (
    <WeatherWrapper>
      <div>
        <h2>ROYAL PALACE</h2>
        <h3>{forecast.description}</h3>
        <p>{Math.round(forecast.temp)}°C</p>
        <img src={`http://openweathermap.org/img/w/${forecast.icon}.png`} />
      </div>
      <div>
        <p>
          max-temp:{Math.round(forecast.temp_max)}°C <span>&nbsp;</span>
          min-temp:
          {Math.round(forecast.temp_min)}°C
        </p>
        <p>
          pressure: {forecast.pressure}
          <span>&nbsp;</span>hPa
        </p>
        <p>humidity:{forecast.humidity}%</p>
      </div>
    </WeatherWrapper>
  );
};

export const WeatherWrapper = styled.div`
  box-sizing: border-box;

@media (max-width: 767px) {
  box-shadow: var(--box-shadow);
  background-color: var(--level-one);
  border-radius: 10px;
  padding 1rem;
  min-width: 100vw;
}
`;
