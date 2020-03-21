export const generalStates = {
    count: 0
  }
  
  export const generalReducer = (state, action) => {
    switch (action.type) {
      case "GET_ALL_PRODUCTS":
        return {
          ...state,
          products: action.data,
        };
      case "SORT_PRODUCTS":
        return {
          ...state,
          products: action.data,
        };
      default:
        throw new Error("Unexpected action");
    }
  };