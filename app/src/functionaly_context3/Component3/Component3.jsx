import React from 'react';


import styles from './Component3.module.css';

import {ContextFrom_1To3} from '../Component1/Component1';

class Component3 extends React.Component {


  render() {
  	return (

      <ContextFrom_1To3.Consumer>
        {({data, OnChange}) => (

        <div className={styles.Component3}>
        <span>Component3 child</span> &nbsp;
        <i>Получаю данные от Component1</i>&nbsp;<b>{data}</b>
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
