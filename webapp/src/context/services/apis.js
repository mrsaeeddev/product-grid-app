export function getAllProducts(props,productsCount) {
  props.dispatch({type:"LOADING"});
  fetch(
    `http://localhost:3000/products?_page=${productsCount}`,
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    }
  ).then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(data =>
        props.dispatch({ type: "GET_ALL_PRODUCTS", data})
      ); 
  }

  export function getProductsByProps(props, data) {
    props.dispatch({type:"LOADING"});
    fetch(
      `http://localhost:3000/products?_sort=${data}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    ).then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(data =>
          props.dispatch({ type: "SORT_PRODUCTS", data})
        );
  }