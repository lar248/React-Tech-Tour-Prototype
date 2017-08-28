# API KEY = 3c5fce90000fe5d85e730651e26e2fa9

# C1 Shopper App - React
A sample shopping web app to demonstrate React, Redux, and Routing.

## Steps to running this app
### Clone this repo to your computer
`git clone https://github.com/lar248/React-Tech-Tour-Prototype.git`

## Nessie API Key
### Retrieve your [API key](http://api.reimaginebanking.com/)

### Insert Nessie API key in `/server/routes/api.js`

#### If you don't have node or npm installed, please follow this [link](http://blog.teamtreehouse.com/install-node-js-npm-mac). Once you have node installed, you are ready to build the app
#### Step 1: Install server dependencies inside your project's root directory:
`cd React-Tech-Tour-Prototype`

`npm install`

#### Step 2: Run the node server
`node server.js`

#### Step 3: Open a new tab in your command line to install dependencies for React client app
`cd React-Tech-Tour-Prototype/react-app`

`npm install`

#### Step 4: Run the React client app
`npm start`

#### View app running on localhost:3000

### Exercises
#### PurchaseItem.js
##### EXERCISE 1: Pass through correct data

#### ProductList.js
##### EXERCISE 2: Pass through correct data into Production

#### ProductItem.js
##### EXERCISE 3: Display product name

#### BONUS
Implement a ‘Make Purchase’ feature (similar to the Angular app’s functionality)

Hints:

Look at the localData/products.js and localData/purchasedTransactions.js local datasets (these were included to supplement the Nessie API)

Redux = in order to ’Make Purchase’, you will need to dispatch an action to ‘reducers/purchases.js’ 

Note there is no implemented solution in our codebase yet for this so feel free to read docs on:
React-Redux (http://redux.js.org/docs/basics/UsageWithReact.html)

Take a look at a few additional files purposefully left in the code but not currently used (ie: AddTodo.js (uses reducer todos.js), VisibleTodoList.js (uses reducer visibilityFilter.js)






