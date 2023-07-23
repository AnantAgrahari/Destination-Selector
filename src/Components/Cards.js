
import "./Cards.css";
import CardItems from "./CardItems.js";

function Cards({cards,removeCards}) {
 return (                                          //we use map() so that we can print any no. of cards and we dont need to list down the component for every card//
    <div className="container">
        <div className="tours">
            {
                cards.map((card)=>{
                    return <CardItems key={card.id} {...card} removeCards={removeCards} />
                })
            }
            </div>                                                                          
    </div>
 );
}
export default Cards;