import { GET_NUMBER, RESET_CHOICE, GET_MULTIPLICATION, INCREMENT_SCORE, RESET_ALL } from "./calculationTypes";


const inintialState = {
    userResponse: 0,
    numberOne: 0,
    numberTwo: 0,
    total: 0,
    nbrOfQuestion: 2,
    score: 0
}


const calculationReducer = (state = inintialState, action) => {
    switch (action.type) {
        case GET_NUMBER:
            return {
                ...state,
                userResponse: state.userResponse + "" + action.payload
            }
            break;

        case RESET_CHOICE:
            return {
                ...state,
                userResponse: ""
            }
            break;

        case GET_MULTIPLICATION:
            return {
                ...state,
                userResponse: "",
                numberOne: action.payload.numbOne,
                numberTwo: action.payload.numbTwo,
                total: action.payload.numbOne * action.payload.numbTwo,
                nbrOfQuestion: state.nbrOfQuestion - 1
            }
            break;

        case INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + action.payload,
                numberOne: 0,
                numberTwo: 0,
                userResponse: 0
            }
            break;
        
        case RESET_ALL:
            return {
                ...state,
                userResponse: 0,
                numberOne: 0,
                numberTwo: 0,
                total: 0,
                nbrOfQuestion: 99,
                score: 0
            }
            break;
            
        default:
            return state;
            break;
    }
}

export default calculationReducer;