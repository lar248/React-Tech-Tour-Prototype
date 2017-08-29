 import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../Products/ProductList';

const DetailView = ({ merchantItem }) => {
  const productsMatch = getProductsByMerchantId(merchantItem.products, merchantItem._id);

  return (
    <div>
      <h3>Name: { merchantItem.name }</h3>
      <h3>ID: { merchantItem._id }</h3>
      <h3>Address: { merchantItem.address['street number'] } { merchantItem.address['street name'] }, { merchantItem.address.city }, { merchantItem.address.state } { merchantItem.address.zip }</h3>
      <h3>Category: { merchantItem.category[0] }
      </h3>
      <span>Products:</span>
      <ProductList
        products = { productsMatch }
      >
      </ProductList>
    </div>
  )
}

// Converts an object with items into an array with items - Should move this to a central location and reference it there
const objectToArray = (
                        obj,
                        filter
                      ) => {
  return Object.keys(obj).map(key => {
    if (key === filter) return;

    return obj[key];
  });
};

// Return the products offered by a specific merchant
const getProductsByMerchantId = (products, merchantId ) => {
  const productItems = objectToArray(products);
  return productItems.find(product => merchantId === product.merchant_id).products;
}

const MerchantDetail = connect()(DetailView);

export default MerchantDetail;
