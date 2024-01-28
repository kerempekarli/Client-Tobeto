// src/store/reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import announcementReducer from './announcementReducer'; // Eklendi
<<<<<<< HEAD
import categoryReducer from './categoryReducer';
import courseReducer from './courseReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Tarayıcı local storage kullanımı için



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Kalıcı olarak saklanacak reducer'ları belirtin
};

const rootReducer = combineReducers({
  auth: authReducer,
  announcement: announcementReducer,
  category: categoryReducer, // Eklendi7
  courses : courseReducer
  // diğer reducer'ları buraya ekleyebilirsiniz
});

export default persistReducer(persistConfig, rootReducer);
=======

const rootReducer = combineReducers({
  auth: authReducer,
  announcement: announcementReducer, // Eklendi
  // diğer reducer'ları buraya ekleyebilirsiniz
});

export default rootReducer;
>>>>>>> main
