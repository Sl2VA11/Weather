export const getWeather = async city => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        city ? city : 'London'
      }&units=metric&appid=904f35a0afdb5b3f80424f4af4738e9b`
    );

    const res = data.json();

    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const getWeatherById = async id => {
  console.log(id);
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=904f35a0afdb5b3f80424f4af4738e9b`
    );

    const res = data.json();

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
