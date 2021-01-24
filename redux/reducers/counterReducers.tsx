import { DECREMENT, INCREMENT, RESET } from "../actions/counterActions/actionTypes"

const counterReducers = (times = 0, action) => {
    switch (action.type) {
        case DECREMENT :
            return times - action.step;
        case INCREMENT : 
            return times + action.step;
        case RESET :
            return 0;
        default:
            return times
    }
}

export default counterReducers;