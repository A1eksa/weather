import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// import { Provider } from 'react-redux';
import { Main } from './components/Main';
import { WeatherDays } from './components/WeatherDays';

function App() {
  const [day, setDay] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main day={day} setDay={setDay} />} />
        <Route
          exact
          path='/:index'
          element={<WeatherDays day={day} setDay={setDay} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
