export const generalStates = {
    isLoading: true,
    products : []
  }
  
  export const generalReducer = (state, action) => {
    switch (action.type) {
      case "GET_ALL_PRODUCTS":
        return {
          ...state,
          products: action.data,
          isLoading: false,
        };
      case "SORT_PRODUCTS":
        return {
          ...state,
          products: action.data,
          isLoading: false,
        };
      case "GET_IMAGE":
        return {
          ...state,
          image: action.image
        }
      case "LOADING": 
        return {
        products: [],
        isLoading: true,
      };
      default:
        throw new Error("Unexpected action");
    }
  };