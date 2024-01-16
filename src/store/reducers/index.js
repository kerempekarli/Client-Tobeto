// src/store/reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import announcementReducer from './announcementReducer'; // Eklendi

const rootReducer = combineReducers({
  auth: authReducer,
  announcement: announcementReducer, // Eklendi
  // diğer reducer'ları buraya ekleyebilirsiniz
});

export default rootReducer;
