import React from 'react';

const ProductItem = (
                        product
                      ) => {
  return (
    <li>
      <div>{ product.product_name }</div>
    </li>
  )
};

export default ProductItem;
