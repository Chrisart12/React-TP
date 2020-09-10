import { GET_NUMBER, RESET_CHOICE, GET_MULTIPLICATION, INCREMENT_SCORE, RESET_ALL } from "./calculationTypes";


export const getNumber = (number) => {

    return {
        type: GET_NUMBER,
        payload: number
    }

} 

export const resetChoice = () => {

    return {
        type: RESET_CHOICE,
        
    }

}

export const getMultiplication = (objectNumber) => {

    return {
        type: GET_MULTIPLICATION,
        payload: objectNumber
        
    }

}

export const incrementScore = (value) => {

    return {
        type: INCREMENT_SCORE, 
        payload: value
    }

}

export const resetAll = () => {

    return {
        type: RESET_ALL, 
    }

}






