import cakeReducer from "../cakes/cakeReducer";
import icecreamReducer from "../icecream/icecreamReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

export default rootReducer;