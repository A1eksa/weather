import React, { useEffect, useState } from 'react';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { GiPressureCooker } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { LoadingItem } from './LoadingItem';
import { GrPrevious, GrNext } from 'react-icons/gr';

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
  Button,
  TodayDay,
  ButtonContainer,
} from './_WeatherStyles';

import moment from 'moment';
export const Main = ({ day, setDay }) => {
  const url = 'http://localhost:8080/';
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const NextDay = () => {
    setDay(day + 1);
    console.log(day);
  };

  const PrevDay = () => {
    if (day != 0) {
      setDay(day - 1);
    }
  };

  useEffect(() => {
    if (day >= 1 && day <= 4) {
      navigate(`/${day}`);
    }
  }, [day, navigate]);

  useEffect(() => {
    fetchForecast();
  }, []);

  const fetchForecast = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setForecast(data[0]);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className={forecast.temp >= 21 ? 'warm' : 'cold'}>
        {loading && <LoadingItem />}
        <WeatherWrapper>
          <InnerWrapper>
            <City>stockholm</City>
            <TodayDay>{moment(forecast.date * 1000).format('LL')}</TodayDay>
            <Description>{forecast.description}</Description>
            <Temperature>{Math.round(forecast.temp)}°</Temperature>

            <div>
              {' '}
              <Icon
                src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
              />
            </div>
          </InnerWrapper>
          <DetailsWrapper>
            <Details>
              <FaTemperatureHigh />
              <p>{Math.round(forecast.temp_max)}°</p>
            </Details>
            <Line></Line>
            <Details>
              <FaTemperatureLow />
              <p>{Math.round(forecast.temp_min)}°</p>
            </Details>
            <Line></Line>
            <Details>
              <GiPressureCooker />
              <p>
                {forecast.pressure}
                <span>&nbsp;</span>hPa
              </p>
            </Details>
            <Line></Line>
            <Details>
              <WiHumidity />
              <p>{forecast.humidity}%</p>
            </Details>
          </DetailsWrapper>
          <ButtonContainer>
            <Button onClick={PrevDay}>
              <GrPrevious />
              PREV DAY
            </Button>
            <Button onClick={NextDay}>
              NEXT DAY
              <GrNext color='white' />
            </Button>
          </ButtonContainer>
        </WeatherWrapper>
      </div>
    </>
  );
};
