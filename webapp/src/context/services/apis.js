export async function getAllProducts(props,productsCount) {
  console.log(productsCount,"EMR")
  props.dispatch({type:"LOADING"});
  const products = await fetch(
    `http://localhost:3000/products?_page=${productsCount}`,
    {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    }
  );
  let imageIndex = Math.floor(Math.random()*1000)
  const image = await fetch(`http://localhost:3000/ads/?r=${imageIndex}`, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json"
    })
  });
  Promise.all([products,image]).then((value)=>{
    value[0].json().then((products)=>{
      let data;
        let image = value[1].url;
        data = products.concat({"image":image});

      props.dispatch({ type: "GET_ALL_PRODUCTS",data });
    });
 
  })
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

  export function getImage(props) {

  }