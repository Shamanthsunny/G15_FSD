import React from 'react';


const Product = ({ id, name, image, price, onSelect }) => {
return (
    <div className="col-md-4 mb-4">
        <div className="card">
        <img src={'image'} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <button className="btn btn-primary" onClick={() => onSelect({ id, name,image, price })}>
            Add to Cart
            </button>
        </div>
        </div>
        
    </div>
);
};

export default Product;

