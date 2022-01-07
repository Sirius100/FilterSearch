import React from 'react';
import { useContext } from 'react';
import {Context} from '../Component1/Component1';

import styles from './Component3.module.css';


export function Component3() {
  const {handleOnChange, state} = useContext(Context);
  return (

    <div className={styles.Component3}>
      <span> Subchild </span> &nbsp;
      <span>Получаю данные:</span>&nbsp;<i>{state}</i>
      <br />
      <input type="text"
        className={styles.Component3}
        placeholder= 'Enter text'
        onChange={handleOnChange}
      />
    </div>

  )
}
