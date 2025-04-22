import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount, cartItems } = useContext(StoreContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      items: cartItems,
      subtotal: getTotalCartAmount(),
      deliveryFee: 2,
      total: getTotalCartAmount() + 2,
    };

    const response = await fetch("http://localhost:5000/api/order/place", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Order placed successfully!");
      // Optionally clear cart or redirect
    } else {
      alert("Failed to place order");
    }
  };

  return (
    <form className='place-order' onSubmit={handlePlaceOrder}>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>

        <div className="multi-fields">
          <input type="text" name="firstName" placeholder='First Name' onChange={handleChange} required />
          <input type="text" name="lastName" placeholder='Last Name' onChange={handleChange} required />
        </div>

        <input type="email" name="email" placeholder='Email address' onChange={handleChange} required />
        <input type="text" name="street" placeholder='Street' onChange={handleChange} required />

        <div className="multi-fields">
          <input type="text" name="city" placeholder='City' onChange={handleChange} required />
          <input type="text" name="state" placeholder='State' onChange={handleChange} required />
        </div>

        <div className="multi-fields">
          <input type="text" name="zip" placeholder='Zip code' onChange={handleChange} required />
          <input type="text" name="country" placeholder='Country' onChange={handleChange} required />
        </div>

        <input type='text' name="phone" placeholder='Phone' onChange={handleChange} required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-deatails">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>

            <div className="cart-total-deatails">
              <p>Delivery Fee</p>
              <p>2</p>
            </div>

            <div className="cart-total-deatails">
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
