
import React,{useState} from "react";


 function CardItems({id,name,info,img,price,removeCards}){
    const [readmore,setReadmore]=useState(false);
    const description=readmore ? info: `${info.substring(0,200)}....`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }
    
    return(
        <div className="card">
          <img src={img} className="image"></img>
          <div className="card-info">
          <div className="card-details">
               <h4 className="card-price">{price}</h4>
               <h4 classname= "card-name">{name}</h4>
            </div>       
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `Show Less`:`Read More`}
                </span>
                </div>
                  </div>
                <button className="butt" onClick={ ()=> removeCards(id)  }>Not interested</button>
        </div>
    );
 }
 export default CardItems; 