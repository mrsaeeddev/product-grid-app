export function externSetValue(props) {
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
        props.dispatch({ type: "SET_VALUE", data})
      );
    
  }

  export function getProductsByProps(props, data) {
    console.log("run")
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
          props.dispatch({ type: "SET_PROP", data})
        );
  }