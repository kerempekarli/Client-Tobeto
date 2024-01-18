// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk),

  // middleware veya devtools kullanmak istiyorsanız burada ekleyebilirsiniz
});

export default store;
