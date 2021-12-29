import React from 'react';
import ReactDom from 'react-dom';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';


import styles from './ProductTable.module.css';


class ProductTable extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }


  render() {
  	return (
  		<div className={styles.ProductTable}>
        <ProductCategoryRow/>
        <ProductRow/>
  		</div>
  	)
  }
}
export default ProductTable;
