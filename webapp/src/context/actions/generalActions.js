import { externSetValue } from '../services/'

export const generalActions = (props) => {
    return {
      increment:  () => {
        props.dispatch({ type: "FETCH_ALL_PRODUCTS" });
      },
      decrement: () => {
        props.dispatch({ type: "DECREMENT" });
      },
      reset: () => {
        props.dispatch({ type: "RESET" });
      },
      setValue: (data) => {
        // props.dispatch({ type: "SET_VALUE", data });
        externSetValue(props,data);
      }
    }
  }
  