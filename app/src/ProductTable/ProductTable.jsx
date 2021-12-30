import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';
import styles from './ProductTable.module.css';

// import("../Console/messeng.js").then( data => console.log(data.now()))



class ProductTable extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }


  render() {
    let lastCategory = null;
    const rows = [];
    const SearchProduct = this.props.FilterText;


    this.props.listproduct.forEach( product => {

      if( product.name.indexOf(SearchProduct) === -1) {
        return;
      }
      if( lastCategory !== product.category ) {

        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.price}
          />
        )
        lastCategory = product.category;
      }

      if( this.props.InOnlyCheked && product.stocked ) {
        return
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      )

    });


  	return (
  		<div >
        <table className={styles.ProductTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>

  		</div>
  	)
  }
}
export default ProductTable;
