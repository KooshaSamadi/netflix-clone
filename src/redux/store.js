import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/tmdbApi";

const rootReducer = combineReducers({
  [tmdbApi.reducerPath]: tmdbApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
