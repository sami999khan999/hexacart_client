import { configureStore } from "@reduxjs/toolkit";

import { userAPI } from "./api/userAPI";
import { userReducer } from "./reducer/uesrReducer";

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [userReducer.name]: userReducer.reducer,
  },

  middleware: (mid) => [...mid(), userAPI.middleware],
});

// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware().concat(userAPI.middleware),
