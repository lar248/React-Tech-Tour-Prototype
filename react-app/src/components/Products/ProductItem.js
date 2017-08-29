import React from 'react';

const ProductItem = ({ 
  product,
  path
}) => {
  if (path === '/merchant') {
      return (
        <div style={{color:"teal", margin: "10px"}}>
          { product }
        </div>
    );
  }

  return (
    <li>
      <div>
        <span style={{color:"red"}}>Product: </span>
        { product.product_name }
      </div>
      <div>
        <span style={{color:"blue"}}>Quantity: </span>
        { product.quantity }
      </div>
      <div>
        <span style={{color:"green"}}>Price: </span>
        { product.price }
      </div>
      <br/>
      <div>
        <span style={{color:"green", fontSize: "18px"}}>Final Price: </span>
        { product.final_price }
      </div>
      <hr />
    </li>
  );
};

export default ProductItem;
