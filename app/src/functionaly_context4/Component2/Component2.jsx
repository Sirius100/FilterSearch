import React from 'react';
import {useState} from 'react';
import { Component3 } from '../Component3/Component3';
//import ReactDom from 'react-dom';


import styles from './Component2.module.css';


export function Component2() {

  return (
    <div className={styles.Component2}>
      <Component3 />
    </div>

  )
}
