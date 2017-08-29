import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Link,
} from 'react-router-dom';

import MerchantItem from './MerchantItem';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.apiURL = `http://localhost:8080`; // This is included to precede the api call (found in api.js) to enable CORS
    
    this.state = {
      merchants: []
    };

    this.objectToArray = (
                            obj,
                            filter
                          ) => {
      return Object.keys(obj).map(key => {
        const merchant = obj[key];
        if (!merchant) return;
        if (merchant.address && merchant.address.city === "Ithaca") {
          return merchant;
        }
        return;
      });
    };
  }

  componentDidMount() {
    const getMerchants = (url) => {
      return fetch(url)
        .then(response => response.json())
        .catch(err => {
          console.log('err')
          console.log(err)
        });
    }
    
    getMerchants(this.apiURL + `/api/merchants`)
      .then(merchants => {
        this.setState({ merchants });
      });
  }

  componentWillUnmount() {
    this.setState({
      merchants: []
    })
  }

  render() {
    let merchants = this.state.merchants;
    let products = this.props.products;

    if (merchants.length === 0) {
      return <span></span>
    } else {
      // Returns only merchant objects from the API with city === 'Ithaca'
      const merchantItems = this.objectToArray(merchants, 'path').filter(item => item !== undefined);
      const match = this.props.match;
      
      return (
        <div>
          <ul>
            {merchantItems.map(merchantItem =>
              <MerchantItem
                key = { merchantItem._id }
                { ...merchantItem }
                match = { match }
                products = { products }
              />
            )}
          </ul>
        </div>
      );
    }
  };
}

const MerchantsContainer = connect()(Container);

export default MerchantsContainer;
