// src/store/reducers/index.js

import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  some: someReducer,
});

export default rootReducer;
