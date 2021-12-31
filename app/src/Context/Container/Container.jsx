import React from 'react';
import Button from '../Button/Button';
//import ReactDom from 'react-dom';


import styles from './Container.module.css';


class Container extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }


  render() {
  	return (
  		<div className={styles.Container}>

        <Button />

  		</div>
  	)
  }
}
export default Container;
