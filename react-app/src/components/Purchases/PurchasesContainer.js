import React from 'react';
import { connect } from 'react-redux';

import PurchaseItem from './PurchaseItem';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.apiURL = `http://localhost:8080`; // This is included to precede the api call (found in api.js) to enable CORS    
    // this.customerAccount = this.props.customerAccount;

    this.state = {
      purchases: [],
      purchasedTransactions: []
    };

    // Formats purchaseItem so that it contains data both about the specific purchase as well as transactions data supplemented locally (inside localData/purchasedTransactions.js)
    this.formatPurchaseItemParams = (
                                      item, 
                                      purchasedTransactionItems
                                    ) => {
      const purchasedTransactionsByPurchaseId = purchasedTransactionItems.filter(pt => pt.purchase_id === item._id);
      const purchaseItem = {
        ...item,
        transactions: { ...purchasedTransactionsByPurchaseId }
      };
      return purchaseItem;
    }

    // Converts an object with items into an array with items - Should move this to a central location and reference it there
    this.objectToArray = (
                            obj,
                            filter
                          ) => {
      return Object.keys(obj).map(key => {
        if (key === filter) return;
    
        return obj[key];
      });
    };
  }

  // This function is invoked immediately after a component is mounted.
  // Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 
  // Setting state in this method will trigger a re-rendering.
  componentDidMount() {
    const getCustomerAccount = (url) => {
      return fetch(url)
        .then(response => response.json())
        .catch(err => {
          console.log('err')
          console.log(err)
        });
    }

    const getPurchases = (url) => {
      return fetch(url)
        .then(response => response.json())
        .catch(err => {
          console.log('err')
          console.log(err)
        });
    }

    getCustomerAccount(this.apiURL + `/api/customerAccount`)
      .then(customerAccount => {
        getPurchases(this.apiURL + `/api/customerAccount/` + customerAccount._id + `/purchases`)
          .then(purchases => {
            this.setState({ purchases });
          })
      });
  }

  // This function is invoked immediately before a component is unmounted and destroyed.
  // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount
  componentWillUnmount() {
    this.setState({
      purchases: [],
      purchasedTransactions: []
    })
  }
  
  render() {
    let items = this.props;
    if (!items) return <span></span>
  
    let purchasedItems = this.objectToArray(this.state.purchases, 'path');
    let purchasedTransactionItems = this.objectToArray(items.purchasedTransactions, 'path');

    return (
      <div>
        <ul>
          {purchasedItems.map(item => {
              const purchaseItem = this.formatPurchaseItemParams(item, purchasedTransactionItems);
              
              return (
                <PurchaseItem
                  key = { item._id}
                  { ...purchaseItem }
                >
                </PurchaseItem>
            )}
          )}
        </ul>
      </div>
    );
  };
}

const PurchasesContainer = connect()(Container);

export default PurchasesContainer;
