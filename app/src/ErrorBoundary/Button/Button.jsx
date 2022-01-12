import React from 'react';
import {useState} from 'react';


import styles from './Button.module.css';


export function Button(props) {

  const [state, setState] = useState(0);


    // console.log(state);
    if(state === 3)  throw Error('Превышено количество попыток!')


  return (
    <button
      className={styles.Button}
      onClick={() => setState(state+1)}
    >
      {props.children}
    </button>

  )
}
