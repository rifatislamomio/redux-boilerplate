import { combineReducers } from "redux";
import cakeReducer from "../cakes/cakeReducer";
import icecreamReducer from "../icecream/icecreamReducer";
import usersReducer from "../async-redux/users/usersReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer
})

export default rootReducer;