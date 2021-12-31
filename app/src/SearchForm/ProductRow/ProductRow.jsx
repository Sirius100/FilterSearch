import React from 'react';


import styles from './ProductRow.module.css';


class ProductRow extends React.Component {

  render() {

    const product = this.props.product;
    const name = product.stocked ?
    product.name:
    <span style={{color: "red"}}>{product.name}</span>;

  	return (
  		<tr className={styles.ProductRow}>
        <td>{name}</td>
        <td>{product.price}</td>
  		</tr>
  	)
  }
}
export default ProductRow;
