import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const getCurrentCity = async () => {
  const { data } = await instance.get('/weather');
  console.log(data);
  return data;
};
getCurrentCity()
// export const addCity = async city => {
//   console.log(city)
//   const { data } = await instance.post('/', city);

//   return data;
// };
