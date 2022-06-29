import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { Main } from './components/Main';
import { WeatherDays } from './components/WeatherDays';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/days' element={<WeatherDays />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
