import { combineReducers } from 'redux';
import handleCart from './handleCart';

const rootReducer = combineReducers({
    handleCart: handleCart,
});

export default rootReducer;
