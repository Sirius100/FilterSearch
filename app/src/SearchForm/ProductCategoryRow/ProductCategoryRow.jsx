import React from 'react';


import styles from './ProductCategoryRow.module.css';


class ProductCategoryRow extends React.Component {


  render() {
    let category = this.props.category;
  	return (
      <tr className={styles.ProductCategoryRow} >
        <th style={{textAlign:"center"}} colSpan="2">
          {category}
        </th>
      </tr>
  	)
  }
}
export default ProductCategoryRow;
