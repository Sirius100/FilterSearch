import React from 'react';

import { Children } from './Children';

// import stylesp from './children.module.css';
import stylesc from './parent.module.css';
import stylesm from './container.module.css'

const MyContext = React.createContext()

export function Parent() {


  return (

    <MyContext.Provider value={{name:'ali',family:'mohammady',done:'false'}} >
    <div className={stylesc.Parent}>
      <Children />
    </div>
    </MyContext.Provider>


  )
}



export function Container() {


  return (

    <div className={stylesm.Container} >
      <Children/>
    </div>

  )
}

// function Children() {


//   return (

//     <MyContext.Consumer>
//       {( {name, family, done} ) => (
//         console.log(name),
//         <div className={stylesp.Children}>
//           <h3> {name }{ ' '}{ family} </h3>
//         </div>
//       )}

//     </MyContext.Consumer>

//   )
// }
export default MyContext;
