import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import UIReducer from './UIReducer';

const reducers = combineReducers({
    AuthReducer,
    UIReducer
});

export default reducers;