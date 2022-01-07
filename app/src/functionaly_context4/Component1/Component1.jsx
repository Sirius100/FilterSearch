import React from 'react';
import {useState} from 'react';
import { Component2 } from '../Component2/Component2';


import styles from './Component1.module.css';

export const Context = React.createContext(); //export for ../Component3/Component3

export function Component1() {

  const [state, setState] = useState('');

  const handleOnChange = (event) => { setState(event.target.value) }

  return (

    <Context.Provider value={{handleOnChange, state}}>
        <div className={styles.Component1}>
          Subchild to Parent to Subchild
          <br />
          <span>тут вывод имени: </span> <i>{state}</i>
          <Component2 />
      </div>
    </Context.Provider>


  )
}
