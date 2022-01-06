import React from 'react';
import Component2  from '../Component2/Component2';


import styles from './Component1.module.css';

const ContextFrom_1To3 = React.createContext()
class Component1 extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      data: 'текст от Component1',
      OnChange: this.handleOnChange,  }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange = (event) => {
    this.setState({data: event.target.value})
  }


  render() {
  	return (
      <ContextFrom_1To3.Provider value={this.state}>
        <div className={styles.Component1}>
          Subchild to Parent to Subchild
          <br />
          <i>тут вывод имени: </i> <b>{this.state.data}</b>
          <Component2 />
        </div>
      </ContextFrom_1To3.Provider>

  	)
  }
}
export {Component1}       // for App2.jsx
export {ContextFrom_1To3} // for ../Component3/Component3.jsx
