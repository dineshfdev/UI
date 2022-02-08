import { configureStore } from "@reduxjs/toolkit";
import latLongReducer from "./latLong";

export const store = configureStore({
  reducer: {
    latLong: latLongReducer,
  },
});
