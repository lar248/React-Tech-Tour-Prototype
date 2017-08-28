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
