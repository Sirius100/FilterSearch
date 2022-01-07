import React from 'react';


import styles from './Component3.module.css';

import {ContextFrom_1To3} from '../Component1/Component1';

class Component3 extends React.Component {


  render() {
  	return (

      <ContextFrom_1To3.Consumer>
        {({data, OnChange}) => (

        <div className={styles.Component3}>
        <span> Child </span> &nbsp;
        <span>Получаю данные:</span>&nbsp;<i>{data}</i>
        <br />
        <input type="text"
          className={styles.Component3}
          placeholder='Введите текст'
          onChange={OnChange}
        />
      </div>
        )}

      </ContextFrom_1To3.Consumer>

  	)
  }
}
export default Component3;
