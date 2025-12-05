import "./PlaceOrder.css";
import axios from "axios";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext);
  const [data, setData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    houseNo: "",
    street: "",
    city: "",
    pincode: ""
  })


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
      event.preventDefault();

      let orderItems = [];
      food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = { ...item };
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      });

      let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 34,
      };

      try {
        let response = await axios.post(url + "/api/order/place", orderData, {
          headers: { token },
        });

        if (response.data.success) {
          const { session_url } = response.data;
          window.location.replace(session_url);
        } else {
          alert("Backend Error: " + response.data.message);
        }
      } catch (err) {
        console.error("❌ Axios Error:", err);
        alert("Request Failed: " + err.message);
      }
  };

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }
    else if(getTotalCartAmount === 0){
        navigate('/cart');
    }
  },[token])
  return (
    <form onSubmit={placeOrder} className="place-order">
      <h2 className="page-title">Place Your Order</h2>

      <div className="order-container">
        {/* left section */}
        <div className="order-details">
          <h3>Delivery Details</h3>

          <div className="input-group">
            <input required name="fullName" onChange={onChangeHandler} value={data.fullName} type="text" placeholder="Full Name" />
            <input required name="mobileNo" onChange={onChangeHandler} value={data.mobileNo} type="text" placeholder="Mobile Number" />
          </div>

          <input required name="email" onChange={onChangeHandler} value={data.email} type="text" placeholder="Email Address" />
          <input required name="houseNo" onChange={onChangeHandler} value={data.houseNo} type="text" placeholder="House No. / Flat No." />
          <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street / Area" />
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="pincode" onChange={onChangeHandler} value={data.pincode} type="text" placeholder="Pincode" />
        </div>  

        {/* right section */}
        <div className="order-summary">
          <h3>Your Order Summary</h3>

          <div className="summary-item">
            <span>Subtotal</span>
            <span>₹{getTotalCartAmount()}</span>
          </div>
          <div className="summary-item">
            <span>Delivery Fee</span>
            <span>₹{getTotalCartAmount()===0?0:34}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹{getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 34)}</span>
          </div>

          <button type="submit" className="pay-btn">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;