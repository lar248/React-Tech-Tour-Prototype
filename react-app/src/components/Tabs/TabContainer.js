import React from 'react';
import { connect } from 'react-redux';

import TabView from './TabView';

const Container = ({
                      match,
                      containerData
                    }) => {
  return (
    <div>
      <TabView
        match = { match }
        { ...containerData }
      >
      </TabView>
    </div>
  );
};

const getVisibleContainerData = (filter, merchants, products, purchases, purchasedTransactions) => {
  switch (filter) {
    case '/merchants':
      return {
        merchants: { ...merchants },
        products: { ...products }
      };
    case '/purchases':
      return {
        purchases: { ...purchases },
        purchasedTransactions: { ...purchasedTransactions }
      };
    default:
      return merchants;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    containerData: getVisibleContainerData(
      ownProps.match.path,
      state.merchants,
      state.products,
      state.purchases,
      state.purchasedTransactions
    )
  }
}

const TabContainer = connect(
  mapStateToProps,
)(Container);

export default TabContainer;