import React from 'react';
import stylesp from './children.module.css';

import MyContext from './Parent'
export function Children() {


  return (

    <MyContext.Consumer>
      {( {name, family, done} ) => (
        console.log(name),
        <div className={stylesp.Children}>
          <h3> {name }{ ' '}{ family} </h3>
        </div>
      )}

    </MyContext.Consumer>

  )
}
