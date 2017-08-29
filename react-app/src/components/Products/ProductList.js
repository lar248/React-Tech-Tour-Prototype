import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render () {
    const transactions = this.props.transactions;
    const productsFromProps = this.props.products;

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

export default ProductList;
