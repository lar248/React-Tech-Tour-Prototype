import React from 'react';

const PurchaseHeader = (
                          item
                        ) => {
  return (
    <ul>
      <li>Merchant ID: { item.merchant_id }</li>
      <li>Medium: { item.medium }</li>
      <li>Purchase Date: { item.purchase_date }</li>
      <li>Amount ($): { item.amount }</li>
      <li>Description: { item.description }</li>
      <li>Status: { item.status }</li>
      <li>Type: { item.type }</li>
      <li>Payer ID: { item.payer_id }</li>
      <li>Purchase ID: { item._id }</li>
    </ul>
  );
};

export default PurchaseHeader;