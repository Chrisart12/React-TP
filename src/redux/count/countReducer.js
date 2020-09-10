import { INCREMENT, DECREMENT } from "./countTypes";

const inintialState = {
    count: 0
}


const dragonReducer = (state = inintialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
            break;

        case DECREMENT:
            return {
                ...state,
                count: state.count  - 1
            }
            break;
            
        default:
            return state;
            break;
    }
}

export default dragonReducer;