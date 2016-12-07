import { combineReducers } from 'redux';

import authenticationReducer from './Authentication';

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;