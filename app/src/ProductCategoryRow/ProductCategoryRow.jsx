import React from 'react';
import ReactDom from 'react-dom';


import styles from './ProductCategoryRow.module.css';


class ProductCategoryRow extends React.Component {


  render() {
    let category = this.props.category;
  	return (
      <tr className={styles.ProductCategoryRow} >
        <th colSpan="2">
          {category}
        </th>
      </tr>
  	)
  }
}
export default ProductCategoryRow;
