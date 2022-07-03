import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  position: relative;
  padding: 2rem;
  min-height: 100vh;
  width: 100wv;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4)
  );
`;

export const DetailsWrapper = styled.div`
  position: absolute;
  bottom: 17rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  border: 1px solid white;
  border-radius: 8px;
  padding: 0.75rem, 1rem, 0.75rem, 1rem;

  color: white;
  background-blend-mode: multiply;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const InnerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.img`
  width: 125px;
  height: 125px;
  display: flex;
  align-item: center;
`;
export const Country = styled.h3`
  font-size: 1rem;
`;

export const City = styled.h2`
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const Temperature = styled.h2`
  font-size: 8rem;
  color: white;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-top: 0;
`;
export const Description = styled.h2`
  font-size: 1.25rem;
  color: white;
  transform: rotate(-90deg);
  align-item: right;
  position: absolute;
  right: -2rem;
  top: 5rem;
  margin-bottom: 0;
`;

export const Line = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Details = styled.div`
  width: 25%;
  padding: 1.25rem;
`;

export const Button = styled.button`
  position: relative;

  right: 1rem;
  color: red;
`;

export const TodayDay = styled.div`
  font-size: 1rem;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  top: 15rem;
  padding: 2rem;
  border: white solid 2px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ButtonText = styled.div`
  color: white;
  position: relative;

  right: 1rem;
`;
