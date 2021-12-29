import './App.css';
import {FilterableProductTable, PRODUCTS} from './FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable product={PRODUCTS}/>
    </div>
  );
}

export default App;
