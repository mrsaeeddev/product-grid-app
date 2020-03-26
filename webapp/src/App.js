import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "./context/store/storeContext";
import Loader from './components/Loader';
import './App.css';

const App = () => {
  const [productsCount, setProductsCount] = useState(1);
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const { state, actions } = useContext(StoreContext);
  
  /* function to compute the days difference */
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

  /* logic to handle infinite scrolling */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  function handleScroll() {
    if (!actions.generalActions.isLoading && window.innerHeight + document.documentElement.scrollTop+5 >= document.documentElement.offsetHeight) {
      setIsFetching(true)
      setProductsCount(productsCount=>productsCount+1)
    }
  }

  useEffect(()=>{
    if (state.generalStates.products !== undefined) {
      setProducts(prevState=>prevState.concat(state.generalStates.products))
    }
  },[state.generalStates.products])

  useEffect(() => {
    actions.generalActions.setLoading(true)
    actions.generalActions.allProductsAction(productsCount)
  }, [actions.generalActions.products,actions.generalActions.isLoading,productsCount]);

  const sortyByPrice = () => {
    setProducts([])
    setIsFetching(false)
    actions.generalActions.productsSortAction('price');
  }

  const sortById = () => {
    setProducts([])
    setIsFetching(false)

    actions.generalActions.productsSortAction('id');
  }

  const sortBySize = () => {
    setProducts([])
    setIsFetching(false)

    actions.generalActions.productsSortAction('size'); 
  }

  return (
    <div className="main">
      <h2>Products Grid</h2>
Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.
      <br/>
      <br/>
      <button className="btn" onClick={sortyByPrice}>
        SORT BY PRICE
      </button>
      <button className="btn" onClick={sortById}>
        SORT BY ID
      </button>
      <button className="btn" onClick={sortBySize}>
        SORT BY SIZE
      </button>
    <div className="cards">
      {products.length > 0 ? products.map((c, index) => (
        <div key={index}>
        <div id="cards">
          <div className="cards_item">
            <div className="card">
            <h2 className="card_image" style={{fontSize:`${c.size}px`}}>{c.face}</h2>
            <div className="card_content"><p className="card_title">{'$'+c.price}</p>
      			<p className="card_text">{computeDaysDifference(c.date)}</p></div>
            {c.image&& <img src={c.image} />}
      			</div>
          </div>
        </div>
      </div>
      )) : products.length === 500 ? "End of catalogue" : <Loader /> }
      </div>
      {isFetching && <h1>Loading more products</h1>}
    </div>
  );
};

export default App;