import { combineReducers } from 'redux';
import suitChangeReducer from './suitChangeReducer.js';


const rootReducer = combineReducers({
  currentSuitId: suitChangeReducer,
});

export default rootReducer;
