import React from 'react';
import { connect } from 'react-redux';

import PurchasesContainer from '../Purchases/PurchasesContainer';
import MerchantsContainer from '../Merchants/MerchantsContainer';

const View = ({
                items,
                match
              }) => {
  switch (match.path) {
    case '/merchants':
      return (
        <MerchantsContainer
          { ...match }
          { ...items }
        ></MerchantsContainer>
      );
    case '/purchases':
      return (
        <PurchasesContainer
          { ...match }
          { ...items }
        >
        </PurchasesContainer>
      );
    default:
      return <span></span>
  }
};

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    items: ownProps
  }
};

const TabView = connect(
  mapStateToProps
)(View);

export default TabView;