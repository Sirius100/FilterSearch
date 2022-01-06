import React from 'react';


import styles from './Component3.module.css';


export function Component3({word}) {


  return (
    <div className={styles.Component3}>
      <span> Child </span>
      <br />
      <span>слово из инпута: </span><i>{word}</i>
    </div>

  )
}
