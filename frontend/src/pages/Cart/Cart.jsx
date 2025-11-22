import React from 'react'
import './Cart.css'

const Cart = () => {

    const {cartItems, food_list, removedFromCart} = userContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
    </div>
  )
}

export default Cart