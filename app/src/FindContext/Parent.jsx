import React from 'react';
import Children from './Children'
import Children2 from './Children2'

import styles from './Parent.module.css';
import ThemeButton from './ThemeButton';


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

          {/* <ThemeButton>
            Change theme
          </ThemeButton> */}

  		  </div>
      </DataContext.Provider>

  	)
  }
}
// Parent.contentType = DataContext;
export default Parent;
export {DataContext};
