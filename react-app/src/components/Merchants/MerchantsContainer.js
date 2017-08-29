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

    // Converts an object with items into an array with items - Should move this to a central location and reference it there
    // This implementation is specific as well for filtering any merchant that is not located in the city of Ithaca
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

  // This function is invoked immediately after a component is mounted.
  // Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 
  // Setting state in this method will trigger a re-rendering.
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

  // This function is invoked immediately before a component is unmounted and destroyed.
  // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount
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
