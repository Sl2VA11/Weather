import { useSelector } from 'react-redux';
import style from './SavedCityMenu.module.scss';

export default function SavedCityMenu() {
  const cityWeather = useSelector(state => state.cityWeather.cityWeather);

  return (
    <div className={style.savedCityMenu}>
      <div className="container">
        <ul className={style.cityList}>
          {cityWeather.length === 0 && <p className={style.isntCity}>You don't have saved city weather. Please add city</p>}
          {cityWeather !== null &&
            cityWeather.map(weather => {
              return (
                <li className={style.cityItem}>
                  <p className={style.weatherInfo}>{weather.name}</p>
                  <div className={style.weatherInfoWrapp}>
                    <p className={style.weatherInfo}>
                      {weather.main.temp.toFixed()}
                      <span>&#176;</span>
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
