import React, { useContext } from "react";
import { StoreContext } from "./context/store/storeContext";

const App = () => {
  const { state, actions } = useContext(StoreContext);
  const valueRandom = () => {
    return Math.round(Math.random() * (1000 - 1) + 1);
  };
  return (
    <div>
    {console.log(state.generalStates.count)}
      <button onClick={() => { actions.generalActions.increment(); }}>
        INCREMENT
      </button>
      <button onClick={() => { actions.generalActions.decrement(); }}>
        DECREMENT
      </button>
      <button onClick={() => { actions.generalActions.reset(); }}>
        RESET
      </button>
      <button onClick={() => { actions.generalActions.setValue(valueRandom()); }}>
        VALUE RANDOM
      </button>
      {state.generalStates.count && state.generalStates.count.map((c, index) => (
        <div key={index}>
          <div>
            <h2>{c.face}</h2>
      			<p>{'$'+c.price}</p>
      			<p>{c.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;