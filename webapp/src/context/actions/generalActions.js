import { externSetValue, getProductsByProps } from '../services/'

export const generalActions = (props) => {
    return {
      increment:  () => {
        props.dispatch({ type: "FETCH_ALL_PRODUCTS" });
      },
      decrement: () => {
        props.dispatch({ type: "DECREMENT" });
      },
      reset: (data) => {
        getProductsByProps(props,data);
      },
      setValue: () => {
        // props.dispatch({ type: "SET_VALUE", data });
        externSetValue(props);
      }
    }
  }
  