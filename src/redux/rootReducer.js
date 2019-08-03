import navReducer from "./navReducer";
import pgStateReducer from "./pageStateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    navigationReducer: navReducer,
    pageStateReducer: pgStateReducer
});

export default rootReducer;
