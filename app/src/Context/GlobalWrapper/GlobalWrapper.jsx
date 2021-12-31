import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
//import ReactDom from 'react-dom';


import styles from './GlobalWrapper.module.css';


class GlobalWrapper extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }


  render() {
  	return (
  		<div className={styles.GlobalWrapper}>

        <Wrapper />

  		</div>
  	)
  }
}
export default GlobalWrapper;
