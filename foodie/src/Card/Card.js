import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../Utilis/cartSlice';
import { removeItems } from '../Utilis/cartSlice';
import "./Card.css"
import FoodItems from '../Utilis/foodItem';
const Card = (props) => {
  const options = props.options;
  const priceOption = Object.keys(options);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(priceOption[0]);
  const [quantity, setQuantity] = useState(1);

 const handleAlert=()=>{
  alert("Please Login to add items")
 }


  const handleAddItem = () => {
    dispatch(
      addItems({
        name: props.foodname,
        img: props.imgSrc,
        option:props.selectedOption,
        quantity: quantity,
        price:getPrice(),
      
      })
    );
  };

  const handleRemoveItem = () => {
   
    dispatch(removeItems());
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const  getPrice = () => {
    const selectedPriceOption = options[selectedOption];
    return selectedPriceOption * quantity;
  };

  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <div>
      <div className='card_conatiner'>
       
        <img className='card_img' src={props.imgSrc} alt="img" />
        <h1>{props.foodname}</h1>
        <div className='card_select'>
          <div>
          <select value={selectedOption} onChange={handleOptionChange}>
            {priceOption.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>

          <select value={quantity} onChange={handleQuantityChange}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          </div>
          Price: &#8377; {getPrice()}
          {!isLoggedIn && (
            <button className='Addtocart' onClick={handleAlert}>
              Add to Cart
            </button>
          )}
        
        </div>
        {/* <div className='card_footer'> */}

        {isLoggedIn && (
          <div className='btn_card'>
            <button className='Addtocart' onClick={handleAddItem}>Add to cart</button>
            <button className='rmvbtn' onClick={handleRemoveItem}>Remove Items</button>
          </div>
        )}
      
        {/* </div> */}
        
        
        <hr />

        
       
      </div>
    </div>
  );
};

export default Card;
