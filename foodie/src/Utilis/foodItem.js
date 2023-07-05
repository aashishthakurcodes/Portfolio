import React from 'react';

const FoodItems = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <h2>Price: {props.price}</h2>
      
    </div>
  );
};

export default FoodItems;
