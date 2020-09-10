import { INCREMENT, DECREMENT } from "./countTypes";


export const increment = () => {

    return {
        type: INCREMENT,
        // payload: dragon
    }

}

export const decrement = () => {

    return {
        type: DECREMENT,
        // payload: dragon
    }

}