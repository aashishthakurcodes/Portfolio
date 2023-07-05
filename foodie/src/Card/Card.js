import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../Utilis/cartSlice';
import { removeItems } from '../Utilis/cartSlice';
import FoodItems from '../Utilis/foodItem';

const Card = (props) => {
  const options = props.options;
  const priceOption = Object.keys(options);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState(priceOption[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddItem = () => {
    dispatch(
      addItems({
        name: props.foodname,
        img: props.imgSrc,
        option: selectedOption,
        quantity: quantity
      })
    );
  };

  const handleRemoveItem = () => {
    // Dispatch the removeItems action
    dispatch(removeItems());
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const getPrice = () => {
    const selectedPriceOption = options[selectedOption];
    return selectedPriceOption * quantity;
  };

  return (
    <div>
      <div>
        <img src={props.imgSrc} alt="img" />
        <h1>{props.foodname}</h1>
        {/* <p>rygvhjbjbcbcjbcwdwhdjwndjwndjjndjjbcjbjbjbcbhjwbbh</p> */}
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
        <div>Price: {getPrice()}</div>
       
        <button onClick={handleAddItem}>Add to cart</button>
        <button onClick={handleRemoveItem}>Remove Items</button>
        <hr />
        <FoodItems price={getPrice()}/>
      </div>
    </div>
  );
};

export default Card;
