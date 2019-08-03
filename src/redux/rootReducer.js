import navReducer from "./navReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    navigationReducer: navReducer
});

export default rootReducer;
