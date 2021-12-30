import React, {Suspense} from 'react';
import ProductTable from '../ProductTable/ProductTable';
// import SearchBar from '../SearchBar/SearchBar';


import styles from './FilterableProductTable.module.css';

const SearchBarr = React.lazy( () => import('../SearchBar/SearchBar') )

class FilterableProductTable extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {FilterText: '', InOnlyCheked: false};
    this.textInput = React.createRef();
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleCheckedChange = this.handleCheckedChange.bind(this)

  }

  handleFilterTextChange(FilterText)   {
    this.setState({FilterText: FilterText})
  }

  handleCheckedChange(InOnlyCheked){
    this.setState({InOnlyCheked});
  }

  render() {

  	return (
  		<div className={styles.FilterableProductTable} >

        <Suspense fallback={<div>идет загрузка.....</div>}>
          <SearchBarr
            FilterText={this.state.FilterText}
            InOnlyCheked={this.state.InOnlyCheked}
            AutoFocus={this.textInput}
            onFilterTextChange={this.handleFilterTextChange}
            onChangeChecked={this.handleCheckedChange}
          />
          <ProductTable
            FilterText={this.state.FilterText}
            listproduct={this.props.product}
            InOnlyCheked={this.state.InOnlyCheked}
          />
        </Suspense>
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
