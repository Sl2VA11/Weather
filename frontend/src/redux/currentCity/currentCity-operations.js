import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentCity } from 'api/currentCity';

export const getCity = createAsyncThunk(
  'weather/get-city-weather',
  async ( { rejectWithValue }) => {
    try {
      const data = await getCurrentCity();
      console.log(data)
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
