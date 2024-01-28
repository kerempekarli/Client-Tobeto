// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";
import { persistStore } from 'redux-persist';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk),

  // middleware veya devtools kullanmak istiyorsanız burada ekleyebilirsiniz
});
const persistor = persistStore(store);

export { store, persistor };
