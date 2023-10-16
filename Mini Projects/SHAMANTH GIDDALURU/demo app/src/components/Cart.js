import React from 'react';

const Cart = ({ cartItems }) => {
return (
    <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
        {cartItems.map(item => (
            <li key={item.id}>
                {item.image}
            {item.name} - ${item.price}
            </li>
        ))}
        </ul>
    </div>
);
};

export default Cart;
