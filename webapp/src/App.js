import React, { useContext } from "react";
import { StoreContext } from "./context/store/storeContext";

const App = () => {
	const { state, actions } = useContext(StoreContext);
	const arrangeDaysDifference = (date) => {
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
  return (
    <div>
    {console.log(state.generalStates.count)}
      <button onClick={() => { actions.generalActions.reset('price'); }}>
        SORT BY PRICE
      </button>
      <button onClick={() => { actions.generalActions.reset('id'); }}>
        SORT BY ID
      </button>
      <button onClick={() => { actions.generalActions.reset('size'); }}>
        SORT BY SIZE
      </button>
      <button onClick={() => { actions.generalActions.setValue(); }}>
        GET ALL PRODUCTS
      </button>
      {state.generalStates.count && state.generalStates.count.map((c, index) => (
        <div key={index}>
          <div>
            <h2>{c.face}</h2>
      			<p>{'$'+c.price}</p>
      			<p>{arrangeDaysDifference(c.date)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;