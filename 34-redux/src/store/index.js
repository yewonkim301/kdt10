import { combineReducers } from 'redux';
import countReducer from './countReducer';
import visibleReducer from './visibleReducer';

const rootReducer = combineReducers({
  count: countReducer,
  visible: visibleReducer,
});

export default rootReducer;
