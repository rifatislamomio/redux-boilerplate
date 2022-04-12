import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
    numOfIcecreams: 25
}

const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: {
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
        }
        default: return state;
    }
}

export default icecreamReducer;