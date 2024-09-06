import { configureStore } from '@reduxjs/toolkit';
import songReducer from './reducers';

// Usa configureStore per creare lo store Redux
const store = configureStore({
  reducer: songReducer, // Inserisci il tuo reducer
});

export default store;
