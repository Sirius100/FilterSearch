import React from 'react';

import {DataContext} from './Parent'
import styles from './Children.module.css';


class Children extends React.Component {


  render() {
  	return (
      <DataContext.Consumer>
        {({count, inc, dec}) => (

          <div className={styles.Children}>
          <button onClick={dec}>-</button>
            <div>{count}</div>
          <button onClick={inc}>+</button>
        </div>

        )}
      </DataContext.Consumer>

  	)
  }
}
export default Children;
