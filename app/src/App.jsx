import './App.css';
import {FilterableProductTable, PRODUCTS} from './SearchForm/FilterableProductTable/FilterableProductTable';

import React from 'react';

class App extends React.Component {

  render() {
  	return (
  		<div className="App">
        <FilterableProductTable
          product={PRODUCTS}
        />
  		</div>
  	)
  }
}
export default App;
