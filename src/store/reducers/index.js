// src/store/reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    auth: authReducer, // Yeni eklenen reducer

  // diğer reducer'ları buraya ekleyebilirsiniz
});

export default rootReducer;
