export function getAllProducts(props) {
  fetch(
    `http://localhost:3000/products`,
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