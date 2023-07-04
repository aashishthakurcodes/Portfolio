import React from 'react';
import { useDispatch } from 'react-redux';
import { addItems } from '../Utilis/cartSlice';
import { removeItems } from '../Utilis/cartSlice';
import FoodItems from '../Utilis/foodItem';

const Card = (props) => {
  const options = props.options;
  const priceOption = Object.keys(options);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    // Dispatch the addItems action with the name and imgSrc as payload
    dispatch(
      addItems({
        name: props.foodname,
        img: props.imgSrc
      })
    );
  };

  const handleRemoveItem = () => {
    // Dispatch the removeItems action
    dispatch(removeItems());
  };

  return (
    <div>
      <div>
        <img src={props.imgSrc} alt="img" />
        <h1>{props.foodname}</h1>
        {/* <p>rygvhjbjbcbcjbcwdwhdjwndjwndjjndjjbcjbjbjbcbhjwbbh</p> */}
        <div>
          <select>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select>
            {priceOption.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div>Total Price</div>
        <button onClick={handleAddItem}>Add to cart</button>
        <button onClick={handleRemoveItem}>Remove Items</button>
        <hr />
      </div>
    </div>
  );
};

export default Card;
