import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const arrangeDaysDifference = (date) => {
    let date1 = new Date(date); 
    let date2 = new Date(); 
    let difference = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
    let result;
    if (difference < 7) {
      result = difference + ' days ago'
    }
    else {
      result = date
    }
    return result
  }

  const sortBySize = () => {
    setIsLoading(true);
    let sortedList = [...commitHistory].sort((a,b)=>{
      return a.size - b.size
    });
    setIsLoading(false);
    setCommitHistory(sortedList);
  };

  const sortByPrice = () => {
    setIsLoading(true);
    let sortedList = [...commitHistory].sort((a,b)=>{
      return a.price - b.price
    });
    setIsLoading(false);
    setCommitHistory(sortedList);
  };

  const sortById = () => {
    setIsLoading(true);
    let sortedList = [...commitHistory].sort((a,b)=>{
      return a.id.localeCompare(b.id);
    });
    setIsLoading(false);
    setCommitHistory(sortedList);
  };

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `http://localhost:3000/products`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        setCommitHistory(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div>
      <h1> Product Grid </h1>
      {isLoading && <p>Wait I'm Loading comments for you</p>}
      <button onClick={sortByPrice}>Sort by Price</button>
      <button onClick={sortById}>Sort by Id</button>
      <button onClick={sortBySize}>Sort by Size</button>
      {commitHistory.length !== 0 && (
        <button onClick={loadMoreCommit}>Load More Commits</button>
      )}
      {commitHistory && commitHistory.map((c, index) => (
        <div key={index}>
              <div>
                <h2>
                  {c.face}
                </h2>
      <p>{'$'+c.price}</p>
      {/* <p>{c.date}</p> */}
      <p>{arrangeDaysDifference(c.date)}</p>
              </div>
        </div>
      ))}
    </div>
  );
}


export default App;
