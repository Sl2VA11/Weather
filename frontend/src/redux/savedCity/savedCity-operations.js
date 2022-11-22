import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeatherById } from 'api/get-weather';

export const getCityWeather = createAsyncThunk(
  'weather/get-city-weather',
   async (credentials, { rejectWithValue }) => {
     try {
        const data = await getWeatherById(credentials)
         
        return data
     } catch (error) {
        console.log(error)
        return rejectWithValue(error);
     }
  }
);