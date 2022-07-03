import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayOfWeek, TodayDate } from './TodayDate';
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';
import { WiHumidity } from 'react-icons/wi';
import { GiPressureCooker } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import {
  WeatherWrapper,
  DetailsWrapper,
  InnerWrapper,
  Icon,
  Country,
  City,
  Temperature,
  Description,
  Line,
  Details,
  Button,
  TodayDay,
  ButtonContainer,
  ButtonText,
} from './_WeatherStyles';

// import { GoLocation } from 'react-icons/go';
// import { Link } from 'react-router-dom';
// import { WeatherDays } from './WeatherDays';
// import { ForecastButton } from './ForecastButton';
import moment from 'moment';
export const Main = ({ day, setDay }) => {
  const url = 'http://localhost:8080/';
  const [forecast, setForecast] = useState([]);
  // const [day, setDay] = useState(0);
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
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setForecast(data[0]);
      });
  }, []);

  return (
    <>
      <div className={forecast.temp >= 21 ? 'warm' : 'cold'}>
        <WeatherWrapper>
          <InnerWrapper>
            <City>stockholm</City>
            <City>{day.city}</City>
            <TodayDay>{moment(forecast.date * 1000).format('LL')}</TodayDay>
            {/* <TodayDate /> */}
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
            <Button onClick={PrevDay}>PREV</Button>
            <ButtonText>3 Day forecast</ButtonText>
            <Button onClick={NextDay}>NEXT</Button>
          </ButtonContainer>
        </WeatherWrapper>
      </div>
    </>
  );
};

// export const WeatherWrapper = styled.div`
//   position: relative;
//   padding: 2rem;
//   min-height: 100vh;
//   width: 100wv;
//   background-image: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0.2),
//     rgba(0, 0, 0, 0.4)
//   );
// `;

// export const DetailsWrapper = styled.div`
//   position: absolute;
//   bottom: 15rem;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10rem;
//   border: 1px solid white;
//   border-radius: 8px;
//   padding: 1rem;

//   color: white;
//   background-blend-mode: multiply;
//   background-color: rgba(255, 255, 255, 0.2);
// `;

// export const InnerWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
// `;
// export const Icon = styled.img`
//   width: 125px;
//   height: 125px;
//   display: flex;
//   align-item: center;
// `;
// export const Country = styled.h3`
//   font-size: 1rem;
// `;

// export const City = styled.h2`
//   font-size: 2rem;
//   color: white;
//   text-transform: uppercase;
//   margin-bottom: 0;
// `;

// export const Temperature = styled.h2`
//   font-size: 8rem;
//   color: white;
//   text-transform: uppercase;
//   margin-bottom: 0;
//   margin-top: 0;
// `;
// export const Description = styled.h2`
//   font-size: 1.25rem;
//   color: white;
//   transform: rotate(-90deg);
//   align-item: right;
//   position: absolute;
//   right: -2rem;
//   top: 5rem;
//   margin-bottom: 0;
// `;

// export const Line = styled.div`
//   border: 1px solid rgba(255, 255, 255, 0.3);
// `;

// export const Details = styled.div`
//   width: 25%;
//   padding: 1rem;
// `;

// export const Button = styled.button`
//   position: absolute;
//   bottom: 5rem;
//   right: center;
// `;

// export const TodayDay = styled.div`
//   font-size: 1rem;
//   color: white;
// `;

//   return (
//     <div className={forecast.temp >= 28 ? 'warm' : 'cold'}>
//       <WeatherWrapper>
//         <InnerWrapper>
//           <City>{forecast.city}</City>
//           <TodayDate />
//           <Description>{forecast.description}</Description>
//           <Temperature>{Math.round(forecast.temp)}°</Temperature>

//           <div>
//             {' '}
//             <Icon
//               src={`http://openweathermap.org/img/w/${forecast.icon}.png`}
//             />
//           </div>
//         </InnerWrapper>
//         <DetailsWrapper>
//           <Details>
//             <FaTemperatureHigh />
//             <p>{Math.round(forecast.temp_max)}°</p>
//           </Details>
//           <Line></Line>
//           <Details>
//             <FaTemperatureLow />
//             <p>{Math.round(forecast.temp_min)}°</p>
//           </Details>
//           <Line></Line>
//           <Details>
//             <GiPressureCooker />
//             <p>
//               {forecast.pressure}
//               <span>&nbsp;</span>hPa
//             </p>
//           </Details>
//           <Line></Line>
//           <Details>
//             <WiHumidity />
//             <p>{forecast.humidity}%</p>
//           </Details>
//         </DetailsWrapper>
//         <Link to='/days'>
//           <Button>3 day weather</Button>
//         </Link>{' '}
//       </WeatherWrapper>
//     </div>
//   );
// };
