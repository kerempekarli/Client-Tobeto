// src/store/reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import announcementReducer from './announcementReducer'; // Eklendi
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  announcement: announcementReducer,
  category: categoryReducer, // Eklendi
  // diğer reducer'ları buraya ekleyebilirsiniz
});

export default rootReducer;
