import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { GiPressureCooker } from 'react-icons/gi';

import {
  WeatherWrapper,
  DetailsWrapper,
  InnerWrapper,
  Icon,
  City,
  Temperature,
  Description,
  Line,
  Details,
  ButtonLeft,
  ButtonRight,
  TodayDay,
  ButtonContainer,
} from './_WeatherStyles';

export const WeatherDays = ({ day, setDay }) => {
  const [weather, setWeather] = useState([]);
  const url = 'http://localhost:8080/days';

  const navigate = useNavigate();

  const { index } = useParams();

  const NextDay = () => {
    setDay(day + 1);
  };

  const PrevDay = () => {
    setDay(day - 1);
  };

  useEffect(() => {
    if (day >= 1 && day <= 4) {
      navigate(`/${day}`);
    } else {
      setDay(0);
      navigate('/');
    }
  }, [day, navigate]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data[index]);
      });
  }, [index]);

  return (
    <>
      <div className={weather.temp >= 21 ? 'warm' : 'cold'}>
        <WeatherWrapper>
          <InnerWrapper>
            <City>stockholm</City>
            <City>{day.city}</City>
            <TodayDay>{moment(weather.date * 1000).format('LL')}</TodayDay>
            <Description>{weather.description}</Description>
            <Temperature>{Math.round(weather.temp)}°</Temperature>

            <div>
              {' '}
              <Icon
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
              />
            </div>
          </InnerWrapper>
          <DetailsWrapper>
            <Details>
              <FaTemperatureHigh />
              <p>{Math.round(weather.temp_max)}°</p>
            </Details>
            <Line></Line>
            <Details>
              <FaTemperatureLow />
              <p>{Math.round(weather.temp_min)}°</p>
            </Details>
            <Line></Line>
            <Details>
              <GiPressureCooker />
              <p>
                {weather.pressure}
                <span>&nbsp;</span>hPa
              </p>
            </Details>
            <Line></Line>
            <Details>
              <WiHumidity />
              <p>{weather.humidity}%</p>
            </Details>
          </DetailsWrapper>
          <ButtonContainer>
            <ButtonLeft onClick={PrevDay}>PREV DAY</ButtonLeft>
            <ButtonRight onClick={NextDay}>NEXT DAY</ButtonRight>
          </ButtonContainer>
        </WeatherWrapper>
      </div>
    </>
  );
};
