import React from 'react';

import {DataContext} from './Parent'
import { ThemeContext } from './theme';
import styles from './Children.module.css';
import {ContextFunc} from './funcModule';

class Children extends React.Component {

  static context = this.context;
  render() {
      // console.log(this.context);
  	return (
      <DataContext.Consumer>
        {({count, inc, dec}) => (

          <div className={styles.Children} >
          <button onClick={dec}>-</button>
            <div>{count}</div>
          <button onClick={inc}>+</button>
        </div>

        )}
      </DataContext.Consumer>

  	)
  }
}
Children.contextType = ContextFunc;
export default Children;
