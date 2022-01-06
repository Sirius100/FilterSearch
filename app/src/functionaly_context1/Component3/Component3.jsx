import React from 'react';


import styles from './Component3.module.css';


export function Component3({name}) {


  return (
    <div className={styles.Component3}>
      <span>Component3 child</span>
      <h4>Subtext</h4>
      <span>Имя из инпута: {name}</span>
    </div>

  )
}
