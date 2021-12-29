import React from 'react';
import ReactDom from 'react-dom';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';


import styles from './FilterableProductTable.module.css';


class FilterableProductTable extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {FilterText: '', InOnlyCheked: false};
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckedChange = this.handleCheckedChange.bind(this)
  }

  handleFilterTextChange(FilterText)   {
    console.log('замечено изменение фильтра!');
    this.setState({FilterText: FilterText})
  }

  handleCheckedChange(InOnlyCheked){
    console.log('изменение чекбокса');
    this.setState({InOnlyCheked});
  }

  render() {
  	return (
  		<div className={styles.FilterableProductTable}>
        <SearchBar
          FilterText={this.state.FilterText}
          InOnlyCheked={this.state.InOnlyCheked}
          onFilterTextChange={this.handleFilterTextChange}
          onChangeChecked={this.handleCheckedChange}
        />
        <ProductTable />
  		</div>
  	)
  }
}
export default FilterableProductTable;

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export {FilterableProductTable, PRODUCTS}
