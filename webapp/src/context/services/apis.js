export function externSetValue(props,data) {
  
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
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
      )
      .then(data =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        props.dispatch({ type: "SET_VALUE", data})
      );
    
  }