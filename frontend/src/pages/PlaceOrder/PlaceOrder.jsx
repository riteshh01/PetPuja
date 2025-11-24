import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return (
    <div className="place-order">
      <h2 className="page-title">Place Your Order</h2>

      <div className="order-container">
        {/* left section */}
        <div className="order-details">
          <h3>Delivery Details</h3>

          <div className="input-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Mobile Number" />
          </div>

          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="House No. / Flat No." />
          <input type="text" placeholder="Street / Area" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Pincode" />
        </div>

        {/* right section */}
        <div className="order-summary">
          <h3>Your Order Summary</h3>

          <div className="summary-item">
            <span>Subtotal</span>
            <span>₹450</span>
          </div>
          <div className="summary-item">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹490</span>
          </div>

          <button className="pay-btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;