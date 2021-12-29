import React from 'react';
import ReactDom from 'react-dom';


import styles from './ProductRow.module.css';


class ProductRow extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }


  render() {
  	return (
  		<div className={styles.ProductRow}>

  		</div>
  	)
  }
}
export default ProductRow;
