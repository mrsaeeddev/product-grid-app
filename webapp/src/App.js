import React, { useContext, useEffect, useCallback, useState } from "react";
import { StoreContext } from "./context/store/storeContext";

const App = () => {
  const [productsCount, setProductsCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { state, actions } = useContext(StoreContext);
  
	const computeDaysDifference = (date) => {
    let date1 = new Date(date); 
    let date2 = new Date(); 
    let difference = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    let result;
    if (difference === 0) {
			result = 'Today'
		}
		if (difference === 1) {
			result = difference + ' day ago'
		}
    if (difference < 7 && difference !== 1 && difference !== 0) {
      result = difference + ' days ago'
    }
    else {
      result = date
    }
    return result
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (!actions.generalActions.isLoading && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setIsFetching(true)
      setProductsCount(productsCount=>productsCount+1)
    }
    else {
      setIsFetching(false)
    } 
  }

  useEffect(() => {
    if (!isFetching) return;
    actions.generalActions.allProductsAction(productsCount)
  }, [isFetching]);

  useEffect(() => {
    if (state.generalStates.products !== undefined) {
      setProducts(state.generalStates.products)
    }
  })

  const fetchProducts = useCallback(() => {
      actions.generalActions.setLoading(true)
      actions.generalActions.allProductsAction(0)
  }, [actions.generalActions.products, actions.generalActions.isLoading]);
  
  useEffect(()=>{
    fetchProducts();
  },[fetchProducts])

  const sortyByPrice = () => {
    actions.generalActions.productsSortAction('price');
  }

  const sortById = () => {
    actions.generalActions.productsSortAction('id');
  }

  const sortBySize = () => {
    actions.generalActions.productsSortAction('size'); 
  }

  return (
    <div>
      <button onClick={sortyByPrice}>
        SORT BY PRICE
      </button>
      <button onClick={sortById}>
        SORT BY ID
      </button>
      <button onClick={sortBySize}>
        SORT BY SIZE
      </button>
      {products.length > 0 ? products.map((c, index) => (
        <div key={index}>
          <div>
            <h2 style={{fontSize:`${c.size}px`}}>{c.face}</h2>
      			<p>{'$'+c.price}</p>
      			<p>{computeDaysDifference(c.date)}</p>
          </div>
        </div>
      )) : "Loading" }
    </div>
  );
};

export default App;