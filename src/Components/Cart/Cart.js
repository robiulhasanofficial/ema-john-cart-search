import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h1>Cart Items</h1>
            <p>Slected Items : {cart.length}</p>
            <p>Total Price : </p>
            <p>Total Shipping : </p>
            <p>Tax : </p>
            <h4>Grand Total : </h4>
        </div>
    );
};

export default Cart;