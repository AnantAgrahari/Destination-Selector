import React,{ useState } from "react";
import data from "./data.js"
import Cards from "./Components/Cards.js"; 
import "./App.css";
function App() {
  const [cards,setCards]=useState(data);
  function removeCards(id){
    const newCards=cards.filter(card=>card.id!=id);
    setCards(newCards); 

  }
  return (
    <div>
      <div className="title"><h1>PlAn YoUr LoVe</h1></div>
      <Cards cards={cards} removeCards={removeCards}/>
    </div>
  );
}

export default App;
