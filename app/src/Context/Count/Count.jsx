import React from 'react';


import styles from './Count.module.css';
import {MyContext}  from '../GlobalWrapper/GlobalWrapper';

class Count extends React.Component {

  render() {
  	return (
      <MyContext.Consumer>
        { ( {inc, dec, count} ) => (
          <div className={styles.Count}>
          <button className={styles.button} onClick={ dec }>-</button>
          <div>{count}</div>
          <button className={styles.button} onClick={ inc }>+</button>
        </div>
        ) }
      </MyContext.Consumer>

  	)
  }

}
export default Count;
