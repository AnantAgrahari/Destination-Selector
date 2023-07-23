
import "./Cards.css";
import CardItems from "./CardItems.js";

function Cards(cards,removeCards) {
 return(                                          //we use map() so that we can print any no. of cards and we dont need to list down the component for every card//
    <div>
        <div>
            {
                cards.map((card)=>{
                    return <CardItems  {...card} removeCards={removeCards} ></CardItems>
                })
            }
            </div>                                                                          
    </div>
 )
}
export default Cards;