import React, { useContext, useEffect } from "react";
import { StoreContext } from "./context/store/storeContext";

const App = () => {
	const { state, actions } = useContext(StoreContext);
	const computeDaysDifference = (date) => {
    let date1 = new Date(date); 
    let date2 = new Date(); 
    let difference = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
		let result;
		if (difference == 1) {
			result = difference + ' day ago'
		}
    if (difference < 7 && difference != 1) {
      result = difference + ' days ago'
    }
    else {
      result = date
    }
    return result
	}
	useEffect(() => {
		actions.generalActions.allProductsAction();
  }, [actions.generalActions.products]);

  return (
    <div>
      <button onClick={() => { actions.generalActions.productsSortAction('price'); }}>
        SORT BY PRICE
      </button>
      <button onClick={() => { actions.generalActions.productsSortAction('id'); }}>
        SORT BY ID
      </button>
      <button onClick={() => { actions.generalActions.productsSortAction('size'); }}>
        SORT BY SIZE
      </button>
      {state.generalStates.products && state.generalStates.products.map((c, index) => (
        <div key={index}>
          <div>
            <h2 style={{fontSize:`${c.size}px`}}>{c.face}</h2>
      			<p>{'$'+c.price}</p>
      			<p>{computeDaysDifference(c.date)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;