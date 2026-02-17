import React, { useContext } from 'react'
import './PlaceOrder.css'
import '../Cart/Cart.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } = useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City ' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zipcode ' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
  <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details"><p>Delivery Fee</p>
              <p>${4}</p></div>
              <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount() + 4}</b>
            </div>
          </div>
          <button className='cart-total-bottom' onClick={()=> {}}>
            Proceet to payment
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
