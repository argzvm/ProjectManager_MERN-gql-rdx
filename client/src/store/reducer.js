import authReducer from './reducers/authReducer.js';
import dataReducer from './reducers/dataReducer.js';
import errorReducer from './reducers/errorReducer.js';
import { combineReducers } from 'redux';

const reducer = combineReducers ({
    auth: authReducer,
    data: dataReducer,
    error: errorReducer
});

export default reducer;
