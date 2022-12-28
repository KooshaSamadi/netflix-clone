import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/tmdbApi";
const rootReducer = combineReducers({});
export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
