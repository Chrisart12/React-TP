import { combineReducers } from 'redux';
import dragonReducer from './dragon/dragonReducer';
import countReducer from './count/countReducer';
import calculationReducer from './calculation/calculationReducer';


const rootReducer = combineReducers({
    dragons: dragonReducer,
    count: countReducer,
    response: calculationReducer,
})

export default rootReducer