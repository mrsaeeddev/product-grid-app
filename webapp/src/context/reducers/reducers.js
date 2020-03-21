import { initialState } from "../state/initialState";
import { generalReducer } from './generalReducer'

const reducer = (state = initialState, action) => {
  return {
    generalStates: generalReducer(state.generalStates,action)
  }
};

export { initialState, reducer };