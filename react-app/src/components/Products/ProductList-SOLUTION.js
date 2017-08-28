import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (
                        transactions
                      ) => {
  const transactionsSet = transactions[Object.keys(transactions)[0]];
  
  if (Object.keys(transactionsSet).length === 0 && transactionsSet.constructor === Object) {
    return <span></span>
  }

  const products = transactionsSet[0].products;
  
  return (
    <ul>
      {
        products.map(product => {
          return (
            <ProductItem
              key = { product.id }
              { ...product }
            >
            </ProductItem>
          )}
      )}
    </ul>
  );
};

export default ProductList;
