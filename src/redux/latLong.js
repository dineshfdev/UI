import { createSlice } from "@reduxjs/toolkit";

export const latLongSlice = createSlice({
  name: "LatLong",
  initialState: {
    latLong: ["13.082680", "80.270718"],
    serviceName: "",
    defaultLocation: "",
  },
  reducers: {
    setLatLong: (state, action) => {
      state.latLong = action.payload;
    },
    setServiceName: (state, action) => {
      state.serviceName = action.payload;
    },
    setDefaultLocation: (state, action) => {
      state.defaultLocation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLatLong, setServiceName, setDefaultLocation } =
  latLongSlice.actions;

export default latLongSlice.reducer;
