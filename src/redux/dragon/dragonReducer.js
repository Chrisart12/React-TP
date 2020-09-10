import { ADD_DRAGON, REMOVE_DRAGON, INVERSE_DRAGON } from "./dragonTypes";

const inintialState = {
    dragon: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],

    count: 3
}

const dragonReducer = (state = inintialState, action) => {
    switch (action.type) {
        case ADD_DRAGON:
            return {
                ...state,
                // dragon: state.dragon.concat(action.payload),
                dragon: [...state.dragon, action.payload],
                count: state.count + 1
            }
            break;

        case REMOVE_DRAGON:
            return {
                ...state,
                dragon: state.dragon.filter(elt => elt != action.payload),
                count: state.count - 1
            }
            break;

        case INVERSE_DRAGON:
            return {
                ...state,
                dragon: [...state.dragon].reverse()
                
            }
            break;
            

        default:
            return state;
            break;
    }
}

export default dragonReducer;