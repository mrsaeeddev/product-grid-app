import { getProductsByProps, getAllProducts } from '../services/'

export const generalActions = (props) => {
    return {
      productsSortAction: (data) => {
        getProductsByProps(props,data);
      },
      allProductsAction: (productsCount) => {
        getAllProducts(props,productsCount);
      },
      setLoading: () => {
        props.dispatch({ type : "LOADING" })
      }
    }
  }
  