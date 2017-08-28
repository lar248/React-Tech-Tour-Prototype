import React from 'react';

import PurchaseHeader from './PurchaseHeader';
import ProductList from '../Products/ProductList';

const PurchasesItem = (
                          purchaseItem
                        ) => {
  return (
    <div>
      <PurchaseHeader
        { ...purchaseItem }
      >
      </PurchaseHeader>
      <h3>Purchased Products</h3>
      <ProductList
        transactions = { <TODO - EXERCISE 1 - Pass through correct data }
      >
        
      </ProductList>
      <br />
      <br />
      <hr/>
      <br />
      <br />
    </div>
  );
};

export default PurchasesItem;
