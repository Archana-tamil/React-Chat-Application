import { configureStore } from '@reduxjs/toolkit';
import conversationsReducer from './chatReducers';

const store = configureStore({
  reducer: {
    conversations: conversationsReducer
  }
});

export default store;
