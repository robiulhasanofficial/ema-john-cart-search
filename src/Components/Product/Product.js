import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    // console.log(props.product)
    const { handleAddToCart, product } = props;
    const { name, img, price, quantity, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-name'>Price : $ {price}</p>
                <p><small>Rating : {ratings} Star</small></p>
                <p><small>Brand : {seller}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='product-btn'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;