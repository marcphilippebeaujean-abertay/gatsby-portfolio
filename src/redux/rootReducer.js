import { combineReducers } from 'redux';
import pageNavigationReducer from './pageNavigationReducer';

const rootReducer = combineReducers({
    pageNavigationReducer: pageNavigationReducer
});

export default rootReducer;