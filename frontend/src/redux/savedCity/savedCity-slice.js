import { createSlice } from '@reduxjs/toolkit';
import { getCityWeather } from './savedCity-operations';

const initialState = {
 
  cityWeather: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'city-weather',
  initialState,

  extraReducers: {
    [getCityWeather.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getCityWeather.fulfilled]: (state, { payload }) => {
      
      state.loading = false;
      state.cityWeather.push(payload);
    },
    [getCityWeather.rejected]: (state, { payload }) => {
      state.loading = false;

      state.error = payload;
    },
  },
});

export default weatherSlice.reducer;
