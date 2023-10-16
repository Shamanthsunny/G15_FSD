import React from 'react';
import Product from './products';


const ProductList = ({ products, onSelect }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ProductList;
