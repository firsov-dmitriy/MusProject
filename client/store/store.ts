import { trakcApi } from "./../service/TrackService";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [trakcApi.reducerPath]: trakcApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trakcApi.middleware),
});
