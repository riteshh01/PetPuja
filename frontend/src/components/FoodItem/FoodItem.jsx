import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">

      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>


      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <div className="food-item-desc">{description}</div>


        <div className="food-price-add">
            {/* yaha pe price show karega */}
          <p className="food-item-price">₹{price}</p>

            {/*  yaha pe add to cart karne ka feature hai */}
            {
            !cartItems[id] 
            ? (
                <img
                className="add-btn-inline"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
                alt="Add"
                />
            ) : (
                <div className="food-item-counter-inline">
                <img
                    onClick={() => removeFromCart(id)}
                    src={assets.remove_icon_red}
                    alt="Remove"
                />
                <p>{cartItems[id]}</p>
                <img
                    onClick={() => addToCart(id)}
                    src={assets.add_icon_green}
                    alt="Add"
                />
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;