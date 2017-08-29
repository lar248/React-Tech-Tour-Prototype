import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  render () {
    const transactions = this.props.transactions;
    const productsFromProps = this.props.products;

    if (productsFromProps.length > 0) {
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
    
    const transactionsSet = transactions[Object.keys(transactions)[0]];
    
    if (Object.keys(transactionsSet).length === 0 && transactionsSet.constructor === Object) {
      return <span></span>
    }
  
    const products = transactionsSet[0].products;
    
    return (
      <ul>
        {
          products.map(product => {
            return (
              <ProductItem
                key = { product.id }
                { ...product }
              >
              </ProductItem>
            )}
        )}
      </ul>
    );
  }
}

export default ProductList;
