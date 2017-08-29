import React from 'react';

import PurchaseHeader from './PurchaseHeader';
import ProductList from '../Products/ProductList';

// PurchaseItem contains both a PurchaseHeader and a ProductList. Note that while the PurchaseHeader is specific to 'Purchases', the ProductList is general and is also used inside of 'Merchants'
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
      <
        ProductList
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
