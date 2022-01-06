import React from 'react';
import {useState} from 'react'

import { Component2 } from '../Component2/Component2';
import { Component3 } from '../Component3/Component3';

import styles from './Component1.module.css';


// child to child
export function Component1() {
  const [name, setState] = useState('')

  const handleOnChange = (event) => {
    setState(event.target.value)
  }

  return (
    <div className={styles.Companent1}>
      <span>Child to Parent </span>
      <br />
      <span> Введен текст: {name}  </span>
      <br />
      <Component2 onChange={handleOnChange}/>
    </div>

  )
}
