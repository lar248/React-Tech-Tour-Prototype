import React from 'react';
import ProductItem from './ProductItem';

// NOTE: Both 'merchants' and 'purchases' use <ProductList> - this demonstrates component reusability despite completely different functions.
// There are opportunities to break this down even further.
class ProductList extends React.Component {
  render () {
    const transactions = this.props.transactions;
    const productsFromProps = this.props.products;

    // This passes when using the products inside of a specific merchant within the merchants tab
    if (productsFromProps && productsFromProps.length > 0) {
      return (
        <div>
          {productsFromProps.map(product => {
            return (
            <ProductItem
              key = { Math.random() }
              product = { product }
              path = "/merchant"
            >
            </ProductItem>
            )})
          }
        </div>
      );
    } 
    // This passes when using the transactions inside a specific purchase within the purchase tab
    else {
      if (Object.keys(transactions).length === 0 && transactions.constructor === Object) {
        return <span></span>
      }
  
      const transactionsSet = transactions[Object.keys(transactions)[0]];
      const products = transactionsSet.products;
      
      return (
        <ul>
          {
            products.map(product => {
              return (
                <ProductItem
                  key = { product.id }
                  product = { product }
                >
                </ProductItem>
              )}
          )}
        </ul>
      );
    }
  }

}

export default ProductList;
