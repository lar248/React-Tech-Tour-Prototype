import React  from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import shopShopApp from './reducers';
import TabLayout from './components/Tabs/TabLayout';

import products from './localData/products';
import purchasedTransactions from './localData/purchasedTransactions';

import './App.css';

//Below is a combo of representative API data (TODO - integrate APIs to UI) AND supplemental data (ie: purchasedTransactions) 
const persistedState = {
  products: products,
  purchasedTransactions: purchasedTransactions
}

const store = createStore(shopShopApp, persistedState);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <TabLayout />
      </div>
    </Router>
  </Provider>
);

export default App;
