import { combineReducers } from 'redux';
import counterReducers from './counterReducers';
import videoReducers from './videoReducers';

const allReducers = combineReducers({
    counterReducers,
    videoReducers
})

export default allReducers;