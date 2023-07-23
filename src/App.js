import React,{ useState } from "react";
import data from "./data.js"
import Cards from "./Components/Cards.js"; 
import "./App.css";
function App() {
  const [cards,setCards]=useState(data);
  function removeCards(id){
    const newCards=cards.filter(card => card.id !== id);
    setCards(newCards); 
    

  }

  if (cards.length===0){
    return (
      <div className="refresh">
        <h2>No cards left</h2>
        <button className="btn-white" onClick={()=> setCards(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <div className="App">
      <div className="title"><h1>PlAn YoUr LoVe</h1></div>
      <Cards cards={cards} removeCards={removeCards} />
    </div>
  );
};

export default App;
