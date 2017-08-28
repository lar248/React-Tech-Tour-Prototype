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
        transactions = { purchaseItem.transactions }
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
