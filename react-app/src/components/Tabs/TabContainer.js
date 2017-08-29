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

// Gets data specific to the container we are routing into
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

//  If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
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