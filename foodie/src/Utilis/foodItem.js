import React from "react";
import "./fooditems.css";
const price=require('../Card/Card')
const FoodItems = (props) => {
  
  return (
    <div>
      <div className="fooditems_cont">
        <img className="food_img" src={props.img} alt={props.name} />
        {console.log(props)}
        <h1>{props.name}</h1>
        <h1>{props.quantity}</h1>
        <h1>{price.getprice}</h1>
        <button>1256</button>
      </div>
    </div>
  );
};

export default FoodItems;
