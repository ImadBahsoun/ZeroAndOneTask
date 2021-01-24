import {connect} from "react-redux"

import CounterComponent from "../components/counter";
import { increaseAction, decreaseAction, resetAction } from "../../redux/actions/counterActions/index"

const mapStateToProps = (state) => {
  return {
    times : state.counterReducers || 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (step) => {
      dispatch(decreaseAction(step))
    },
    onIncrement: (step) => {
      dispatch(increaseAction(step))
    },
    onReset: () => {
      dispatch(resetAction())
    }
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
