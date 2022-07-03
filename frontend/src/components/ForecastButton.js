import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const ForecastButton = () => {
  //   const [text, setText] = useState(true);
  const navigate = useNavigate();

  const toggleTheme = (e) => {
    if (e.target.checked) {
      navigate('/');
    } else {
      console.log('stay on main');
    }
  };

  return (
    <Label>
      <Input
        onChange={toggleTheme}
        // defaultChecked={defaultDark}
        type='checkbox'
      />
      <Switch>hello</Switch>
    </Label>
  );
};

// S T Y L I N G //

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: var(--text-primary);
`;

const Switch = styled.div`
  width: 56px;
  height: 28px;
  background: var(--grey-200);
  border-radius: 32px;
  padding: 4px;
  position: relative;
  transition: 0.2s;

  &:before {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background-color: #ffffff;
    transform: translate(0, -50%);
    transition: 0.2s;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: pink;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
