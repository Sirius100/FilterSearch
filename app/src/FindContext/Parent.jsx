import React from 'react';
import Children from './Children'

import styles from './Parent.module.css';


const DataContext = React.createContext();

class Parent extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      count: 0,
      inc: this.headelOnClickInc,
      dec: this.headelOnClickDec,
    }
    this.headelOnClickInc = this.headelOnClickInc.bind(this)
    this.headelOnClickDec = this.headelOnClickDec.bind(this)
  }
  headelOnClickInc = () => this.setState( ({count}) => ({count: count + 1}) )
  headelOnClickDec = () => this.setState( ({count}) => ({count: count - 1}) )






  render() {
  	return (

      <DataContext.Provider value={this.state} >
        <div className={styles.Parent}>
          <Children/>
  		  </div>
      </DataContext.Provider>

  	)
  }
}
export default Parent;
export {DataContext};
