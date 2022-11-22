import SearchCityForm from 'components/SearchCityForm/SearchCityForm';
import WeatherCardMarkup from 'components/WeatherCardMarkup/WeatherCardMarkup';
import { useEffect, useState } from 'react';
import { getWeather } from 'api/get-weather';
import sunnyWeather from '../../image/weather-icons/sunny-weather.png';
import cloudsWeather from '../../image/weather-icons/cloud.png';
import rainWeather from '../../image/weather-icons/rain-weather.png';
import thunderstormWeather from '../../image/weather-icons/thunderstorm-weather.png';
import NavBar from 'components/NavBar/NavBar';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SavedCityMenu from 'components/SavedCityMenu/SavedCityMenu';
import style from './mainPageComponent.module.scss';

export default function MainPageComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const [inputRes, setInputRes] = useState('');
  const [weatherImg, setWeatherImg] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    
    getWeather().then(response => setWeatherData(response));
  }, []);

  const onChange = e => {
    setInputRes(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    getWeather(inputRes).then(response => setWeatherData(response));

    e.target.reset();
  };

  let weatherinfo = null;

  if (weatherData !== null && weatherData.weather !== undefined) {
    weatherData.weather.map(res => {
      weatherinfo = res;

      return weatherinfo;
    });
  }

  useEffect(() => {
    if (weatherinfo !== null) {
      switch (weatherinfo.main) {
        case 'Clouds':
          setWeatherImg(cloudsWeather);
          break;
        case 'Rain':
          setWeatherImg(rainWeather);
          break;
        case 'Thunderstorm':
          setWeatherImg(thunderstormWeather);
          break;

        case 'Clear':
          setWeatherImg(sunnyWeather);
          break;
        default:
          break;
      }
    }
  }, [weatherinfo]);

  return (
    <>
      <NavBar />
      <motion.div
        className={style.homePage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.9 } }}
        exit={{ x: 0 }}
      >
        <div className="container">
          <SearchCityForm onSubmit={onSubmit} onChange={onChange} />

          {weatherinfo === null && <h1>Enter the right place</h1>}
          {weatherData !== null && weatherinfo !== null && (
            <WeatherCardMarkup
              weatherData={weatherData}
              weatherinfo={weatherinfo}
              weatherImg={weatherImg}
            />
          )}
        </div>

        {location.pathname === '/user-page' && <SavedCityMenu />}
      </motion.div>
    </>
  );
}
