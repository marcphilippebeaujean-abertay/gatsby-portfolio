import navReducer from "./navReducer";
import pageStateReducer from "./pageStateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    navReducer: navReducer,
    pageStateReducer: pageStateReducer
});

export default rootReducer;
