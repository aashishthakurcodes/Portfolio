import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Crausal from "../Crausal/Crausal";
import './Container.css'
const Container = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodCat(response[1]);
    setFoodItem(response[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Crausal />
      <div>
        {foodCat.map((items) => {
          return (
            <div key={items._id}>
              <h1>{items.CategoryName}</h1>
              <hr />
              <div className="data_div" >
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter((data) => data.CategoryName === items.CategoryName)
                    .map((filterItem) => {
                      return (
                        <div className="data_container" key={filterItem._id}>
                          <Card
                            foodname={filterItem.name}
                            imgSrc={filterItem.img}
                            options={filterItem.options[0]}
                          
                          />
                        </div>
                      );
                    })
                ) : (
                  <div>No result found</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
