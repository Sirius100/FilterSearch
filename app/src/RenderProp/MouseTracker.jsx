import React from 'react';
import {useState, useCallback, useRef} from 'react';



import styles from './MouseTracker.module.css';


export function Mouse(props) {

  const [state, setState] = useState({ x: 0, y: 0 });
  const ref = useRef();

  const handleMouseMove = useCallback ((event) => {
    const rect = ref.current.getBoundingClientRect()
    setState({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  }, [ref])

    return (
      <div ref={ref} onMouseMove={handleMouseMove}>

        {props.children(state)}

      </div>
    );
}

function Cat(props) {

    const mouse = props.mouse;
    return (
      <>
        <div style={{ width:"50px", height: "50px", backgroundColor:"green",position: 'absolute', left: mouse.x, top: mouse.y }} />
      </>

    );
}



export const Card = ()  => {

  return (

    <Mouse>
      {(mouse) => (
      <div mouse={mouse} style={{ width: "100%", height:"100px", border:"1px solid black", backgroundColor: "hsla(18, 100%, 55%, 1)" }} >
        ({mouse.x} : {mouse.y})
      </div>
    )}
    </Mouse>
  )

}
