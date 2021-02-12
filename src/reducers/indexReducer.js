import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import scoreReducer from './scoreReducer'

const rootReducer = combineReducers({
  courseReducer,
  scoreReducer
});

export default rootReducer