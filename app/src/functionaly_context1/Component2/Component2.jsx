import React from 'react';


import styles from './Component2.module.css';


export function Component2({onChange}) {

  return (

    <div className={styles.Component2}>

      <span> Сhild </span>
      <input type="text"
        className={styles.Component2}
        placeholder='Введите текст'
        onChange={onChange}
      />

    </div>


  )
}
