
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import weatherReducer from '../redux/savedCity/savedCity-slice'
import cityReducer from './currentCity/currentCity-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    cityWeather: weatherReducer,
    auth: persistedReducer,
    currentCity: cityReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

  
export const persistor = persistStore(store);