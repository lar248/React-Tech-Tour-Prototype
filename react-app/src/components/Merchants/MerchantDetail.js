import React from 'react';
import { connect } from 'react-redux';

const DetailView = ({ merchantItem }) => {
  console.log(merchantItem)
  return (
    <div>
      <h3>ID: { merchantItem._id }</h3>
    </div>
  )
}

const MerchantDetail = connect()(DetailView);

export default MerchantDetail;
