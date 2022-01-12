import React from 'react';
import {useState} from 'react';



import styles from './MouseTracker.module.css';


// export function MouseTracker() {

//   const [y, setY] = useState(0);
//   const [x, setX] = useState(0);

//   const handleMouseMove = (event) => {
//     setX(event.clientX);
//     setY(event.clientY);
//   }
//   return (

//     <div onMouseMove={handleMouseMove} className={styles.Mouse}>
//       <p>{x}:{y}</p>
//     </div>

//   )
// }


export function Mouse(props) {

  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY
    });
  }

    return (
      <div className={styles.Mouse} onMouseMove={handleMouseMove}>

        <p>Текущее положение курсора мыши: ({state.x}, {state.y})</p>
        {props.render(state)}
        {/* <Cat mouse={state}/> */}
      </div>
    );
}

function Cat(props) {

    const mouse = props.mouse;
    console.log(mouse);
    return (
      <>
        <div style={{ width:"50px", height: "50px", backgroundColor:"green",position: 'absolute', left: mouse.x, top: mouse.y }} />
      </>

    );
}

export const MouseWrapper = ()  => {

  return (
    <>
      <h1>Перемещайте курсор мыши!</h1>
      <Mouse render={ (mouse) =>
      (<Cat mouse={mouse}/>  )}/>
    </>

  )
}
