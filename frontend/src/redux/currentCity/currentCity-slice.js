import { createSlice } from '@reduxjs/toolkit';
import { getCity } from './currentCity-operations';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const citySlice = createSlice({
   name: 'city',
   initialState,
   extraReducers: {
     [getCity.pending]: state => { 
       state.loading = true
       state.error = null;
     },
     [getCity.fulfilled]: (state , {payload}) => { 
       state.loading = false
       state.items = payload;
       state.error = null;
     },
     [getCity.rejected]: (state , {payload}) => { 
       state.loading = false
       
       state.error = payload;
     }
   }
})

export default citySlice.reducer
