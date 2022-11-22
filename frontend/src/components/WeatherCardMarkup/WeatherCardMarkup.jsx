import { useLocation } from 'react-router-dom';
import style from './WeatherCardMarkup.module.scss';
import { getCityWeather } from 'redux/savedCity/savedCity-operations';
import { useDispatch } from 'react-redux';
import { getCity } from '../../redux/currentCity/currentCity-operations';
export default function WeatherCardMarkup({
  weatherData,
  weatherinfo,
  weatherImg,
}) {
  const dispatch = useDispatch()
  const location = useLocation();
  const submitWeatherId = () => {
    dispatch(getCityWeather(weatherData.id))
  };
  
  // getCity()
  return (
    <>
      <div className={location.pathname === '/user-page' && style.mrg}>
        <div className={style.weatherWrapper}>
          <div className={style.weatherMainWrapp}>
            {location.pathname === '/user-page' && (
              <>
                <div className={style.btnWrapp}>
                  <button className="btn" onClick={submitWeatherId}>
                    Add to collection
                  </button>
                </div>
              </>
            )}

            <div className={style.topWeatherDetails}>
              <h1 className={style.cityName}>{weatherData.name}</h1>
              <div className={style.weatherTemp}>
                <p className={style.cityTemp}>
                  {weatherData.main.temp.toFixed()}
                </p>
                <span className={style.celcius}>&#176;</span>
              </div>

              <p className={style.weatherDescription}>{weatherinfo.main}</p>
            </div>
            <div className={style.weatherImgWrapp}>
              {weatherImg && (
                <img src={weatherImg} alt="" className={style.weatherImg} />
              )}
            </div>

            <ul className={style.weatherList}>
              <li className={style.weatherItem}>
                <p className={style.weatherInfo}>
                  Max:
                  {weatherData.main.temp_max.toFixed()}
                </p>
              </li>
              <li className={style.weatherItem}>
                <p className={style.weatherInfo}>
                  Min:
                  {weatherData.main.temp_min.toFixed()}
                </p>
              </li>
              <li className={style.weatherItem}>
                <p className={style.weatherInfo}>
                  Feel:
                  {weatherData.main.feels_like.toFixed()}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
