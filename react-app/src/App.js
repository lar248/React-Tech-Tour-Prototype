import React  from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import shopShopApp from './reducers';
import TabLayout from './components/Tabs/TabLayout';

import './App.css';

//Below is a combo of representative API data (TODO - integrate APIs to UI) AND supplemental data (ie: purchasedTransactions) 
const persistedState = {
  merchants: [
    {
        "_id": "57cf75cea73e494d8675ec4d",
        "name": "Ithaca Bakery",
        "category": [
            "cafe",
            "bakery",
            "meal_takeaway",
            "restaurant",
            "food",
            "store",
            "point_of_interest",
            "establishment"
        ],
        "geocode": {
            "lat": 42.44261090000001,
            "lng": -76.5086618
        },
        "address": {
            "zip": "14850",
            "city": "Ithaca",
            "street number": "400",
            "state": "NY",
            "street name": "North Meadow Street"
        }
    },
    {
        "_id": "57cf75cea73e494d8675ec4e",
        "name": "Aurora Inn",
        "category": [
            "Health"
        ],
        "geocode": {
            "lat": 42.75448799999999,
            "lng": -76.7032
        },
        "address": {
            "zip": "13026",
            "city": "Aurora",
            "street number": "391",
            "state": "NY",
            "street name": "Main Street"
        }
    },
    {
        "_id": "57cf75cea73e494d8675ec4f",
        "name": "Zimet Musical Services",
        "category": [
            "store",
            "point_of_interest",
            "establishment"
        ],
        "geocode": {
            "lat": 42.4497493,
            "lng": -76.50136429999999
        },
        "address": {
            "zip": "14850",
            "city": "Ithaca",
            "street number": "104",
            "state": "NY",
            "street name": "Adams Street"
        }
    },
  ],
  products: [
    {
      "products_id": 0,
      "merchant_name": "Ithaca Bakery",
      "merchant_id": "57cf75cea73e494d8675ec4d",
      "products": [
        "donut",
        "iced coffee",
        "munchkins"
      ]
    },
    {
      "products_id": 1,
      "merchant_name": "Zimet Musical Services",
      "merchant_id": "57cf75cea73e494d8675ec4f",
      "products": [
        "piano lesson",
        "trumpet lesson",
        "guitar lesson"
      ]
    },
    {
      "products_id": 3,
      "merchant_name": "Terra Rosa",
      "merchant_id": "57cf75cea73e494d8675ec50",
      "products": [
        "pants",
        "dress shirt",
        "polo tee shirt"
      ]
    },
    {
      "products_id": 4,
      "merchant_name": "Dollar Tree",
      "merchant_id": "57cf75cea73e494d8675ec52",
      "products": [
        "silverware set",
        "2L Dr. Pepper bottle",
      ]
    },
    {
      "products_id": 5,
      "merchant_name": "AT&T",
      "merchant_id": "57cf75cea73e494d8675ec53",
      "products": [
        "iPhone",
        "Android",
      ]
    },
    {
      "products_id": 6,
      "merchant_name": "Six Mile Creek Vineyard",
      "merchant_id": "57cf75cea73e494d8675ec54",
      "products": [
        "Flichman Malbec Tupungato",
        "Chateau Feret Lambert Bordeaux Superieur",
      ]
    },
    {
      "products_id": 7,
      "merchant_name": "Saigon Kitchen",
      "merchant_id": "57cf75cea73e494d8675ec55",
      "products": [
        "summer rolls",
        "fried rice",
        "bubble tea"
      ]
    },
    {
      "products_id": 8,
      "merchant_name": "Ithaca Coffee Company",
      "merchant_id": "57cf75cea73e494d8675ec56",
      "products": [
        "decaf coffee",
        "iced coffee",
        "bag of coffee beans"
      ]
    },
    {
      "products_id": 9,
      "merchant_name": "Triphammer Wines & Spirits",
      "merchant_id": "57cf75cea73e494d8675ec57",
      "products": [
        "Merlot",
        "Chardonnay",
        "Montoya Cabernet"
      ]
    },
    {
      "products_id": 10,
      "merchant_name": "Unique eCigs - Ithaca, NY",
      "merchant_id": "57cf75cea73e494d8675ec59",
      "products": [
        "lighter",
        "gum",
      ]
    },
    {
      "products_id": 11,
      "merchant_name": "AT&T Authorized Retailer",
      "merchant_id": "57cf75cea73e494d8675ec5a",
      "products": [
        "repair service",
        "phone case",
      ]
    },
    {
      "products_id": 12,
      "merchant_name": "Buffalo Wild Wings",
      "merchant_id": "57cf75cea73e494d8675ec5b",
      "products": [
        "Buffalo wings",
        "BBQ wings",
      ]
    },
    {
      "products_id": 13,
      "merchant_name": "Dockers",
      "merchant_id": "57cf75cea73e494d8675ec5c",
      "products": [
        "Nike sneakers",
        "Sperrys",
      ]
    },
  ],
  purchases: [
    {
        "merchant_id": "57cf75cea73e494d8675ec49",
        "medium": "balance",
        "purchase_date": "2017-08-17",
        "amount": 6.71,
        "description": "food",
        "status": "pending",
        "type": "merchant",
        "payer_id": "597652bfa73e4942cdafd9a9",
        "_id": "599b3be2ceb8abe24251b79d"
    },
    {
        "merchant_id": "57cf75cea73e494d8675ec49",
        "medium": "balance",
        "purchase_date": "2017-08-17",
        "amount": 99.18,
        "description": "food",
        "status": "pending",
        "type": "merchant",
        "payer_id": "597652bfa73e4942cdafd9a9",
        "_id": "599ce8efceb8abe24251b834"
    }
  ],
  purchasedTransactions: [
    {
      "transaction_id": "0",
      "purchase_id": "599352d2ceb8abe2425183e7",
      "products": [
        {
          "id": "0",
          "product_name": "donut",
          "quantity": 2,
          "price": 1.00,
          "final_price": 2.00,
        },
        {
          "id": "1",
          "product_name": "iced coffee",
          "quantity": 1,
          "price": 4.71,
          "final_price": 4.71,
        }
      ]
    },
    {
      "transaction_id": "1",
      "purchase_id": "59949f41ceb8abe24251844f",
      "products": [
        {
          "id": "2",
          "product_name": "donut",
          "quantity": 4,
          "price": 1.00,
          "final_price": 4.00,
        },
        {
          "id": "3",
          "product_name": "iced coffee",
          "quantity": 20,
          "price": 4.71,
          "final_price": 94.20,
        },
        {
          "id": "4",
          "product_name": "munchkins",
          "quantity": 7,
          "price": 0.14,
          "final_price": 0.98,
        },
      ]
    },
  ]
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
