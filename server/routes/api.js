const express = require('express');
const request = require('superagent');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const APIKey = '3c5fce90000fe5d85e730651e26e2fa9'; //TODO: Fill in your key
const APIPrefix = 'http://api.reimaginebanking.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get account (default using first account)
router.get('/customerAccount', (req, res) => {
  const getCustomerAccount = `${APIPrefix}/accounts?key=${APIKey}`;

  axios.get(getCustomerAccount)
    .then(customerAccounts => {
      res.status(200).json(customerAccounts.data[0]);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

// Get purchases by customer account id
router.get('/customerAccount/:customerAccountId/purchases', (req, res) => {
  const getCustomerAccountPurchases = `${APIPrefix}/accounts/${req.params.customerAccountId}/purchases?key=${APIKey}`;
  axios.get(getCustomerAccountPurchases)
    .then(purchases => {
      res.status(200).json(purchases.data);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

// Get merchants
router.get('/merchants', (req, res) => {
  const getMerchants = `${APIPrefix}/merchants?key=${APIKey}`;
  axios.get(getMerchants)
    .then(merchants => {
      res.status(200).json(merchants.data.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Get merchant by id
router.get('/merchants/:merchantId', (req, res) => {
  const getMerchant = `${APIPrefix}/merchants/${req.params.merchantId}?key=${APIKey}`;
  axios.get(getMerchant)
    .then(merchant => {
      res.status(200).json(merchant.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

// Create purchase (NOTE: this is the '_id' from /account)
// EX: {
// 	"merchant_id": "57cf75cea73e494d8675ec49",
// 	"medium": "balance",
// 	"purchase_date": "2017-08-17",
// 	"amount": 0.71,
// 	"description": "food"
// }
router.post('/purchase/:customerAccountId', (req, res) => {
  const createPurchase = `${APIPrefix}/accounts/${req.params.customerAccountId}/purchases?key=${APIKey}`; 

  axios({
    method: 'post',
    url: createPurchase,
    data: req.body
  })
    .then(purchase => {
      res.status(201).json(purchase.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
