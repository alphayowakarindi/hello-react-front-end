import { createAsyncThunk } from '@reduxjs/toolkit';
// Actions
const LOAD = 'hello-rails-react/randomGreeting/LOAD';

// Api
const url = 'http://127.0.0.1:3000/api/random-greeting';

// Redux thunks
export const fetchRandomGreeting = createAsyncThunk(
  LOAD,
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

// Reducer
export default function randomGreetingReducer(state = {}, action = {}) {
  switch (action.type) {
    case `${LOAD}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
}