import { INCREMENT, DECREMENT, RESET } from './actionTypes';

export const increaseAction = (step) => {
    return {
        type : INCREMENT,
        step
    }
}

export const decreaseAction = (step) => {
    return{
        type : DECREMENT,
        step
    }
}

export const resetAction = () => {
    return{
        type : RESET,
    }
}