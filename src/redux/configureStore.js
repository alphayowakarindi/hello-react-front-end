import { configureStore } from '@reduxjs/toolkit';
import randomGreetingReducer from './greeting/randomGreeting';

const store = configureStore({
  reducer: {
    randomGreeting: randomGreetingReducer
  },
});
export default store;