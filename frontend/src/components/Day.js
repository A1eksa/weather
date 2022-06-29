import styled from 'styled-components';

export const Day = () => {
  let d = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let weekDay = days[d.getDay()];

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month = months[d.getMonth()];

  let date = d.getDate();

  return (
    <>
      <DayOfWeek>
        {weekDay}, {month}
        {date}
      </DayOfWeek>
    </>
  );
};

export const DayOfWeek = styled.div`
  font-size: 1rem;
  color: white;
`;
