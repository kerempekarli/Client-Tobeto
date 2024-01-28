// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";
<<<<<<< HEAD
import { persistStore } from 'redux-persist';
=======

>>>>>>> main
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk),

  // middleware veya devtools kullanmak istiyorsanız burada ekleyebilirsiniz
});
<<<<<<< HEAD
const persistor = persistStore(store);

export { store, persistor };
=======

export default store;
>>>>>>> main
