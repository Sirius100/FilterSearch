import React from 'react';
//import ReactDom from 'react-dom';


import styles from './Button.module.css';


class Button extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {}
  }


  render() {
  	return (
  		<button className={styles.Button}>


  		</button>
  	)
  }
}
export default Button;
