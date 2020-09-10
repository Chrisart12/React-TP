import { ADD_DRAGON, REMOVE_DRAGON, INVERSE_DRAGON } from "./dragonTypes";


export const addDragon = (dragon) => {

    return {
        type: ADD_DRAGON,
        payload: dragon
    }

}

export const removeDragon = (dragon) => {

    return {
        type: REMOVE_DRAGON,
        payload: dragon
    }

}

export const inverseDragon = () => {

    return {
        type: INVERSE_DRAGON,
        // payload: dragon
    }

}