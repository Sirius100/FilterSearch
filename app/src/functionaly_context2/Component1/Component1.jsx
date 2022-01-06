import React from 'react';
import {useState} from 'react'

import { Component2 } from '../Component2/Component2';

import styles from './Component1.module.css';


// child to parent
export function Component1() {
  const [name, setState] = useState('')

  const handleOnChange = (event) => {
    setState(event.target.value)
  }

  return (
    <div className={styles.Companent1}>
      <span>Child to Parent </span>
      <br />
      <span> Введен текст в инпут:</span> <i>{name} </i>
      <br />
      <Component2 onChange={handleOnChange}/>
    </div>

  )
}
