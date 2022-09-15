import { combineReducers } from "redux";
import HelloReducer from "./HelloReducer";
import CounterReducer from "./CounterReducer";


export default combineReducers({
    HelloReducer,
    CounterReducer
})