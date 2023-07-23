
import React,{useState} from "react";
import "./CardItems.css";

 function CardItems({id,name,info,image,price},removeCards){
    const [readmore,setReadMore]=useState(false);
    const description=`${info.substring(0,200)}....`
    function readmoreHandler(){
        setReadMore(!readmore);
    }
    return(
        <div className="card">
          <img src={image} className="image"></img>
          <div className="card-details">
               <h4>{price}</h4>
               <h4>{name}</h4>
            </div>       
            <div className="description">
                {description}
                <span className="read-more" onClick={ readmoreHandler }>
                    {readmore ? `show less`:`read more`}
                </span>
                </div>  
                <button className="butt" onClick={ ()=> removeCards(id) }>Not interested</button>
        </div>
    )
 }
 export default CardItems; 