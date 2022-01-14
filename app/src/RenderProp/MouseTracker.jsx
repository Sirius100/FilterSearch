import React from 'react';
import {useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
// import '@animxyz/core'
import { XyzTransition, XyzTransitionGroup } from '@animxyz/react'
import '@animxyz/core/dist/animxyz.css'

import styles from './MouseTracker.module.css';



export function Mouse({children}) {

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

        {children(state)}

      </div>
    );
}

//сначала было так
/**
 * <Mouse myrender={ (mouse) => {(
 * <Cat mouse={mouse}/>)} }
 *
 *
 */
export function Cat(props) {
  const toggled = true;
  const mouse = props.mouse;
  return (
    <>
      <div style={{ width:"50px", height: "50px", backgroundColor:"green",position: 'absolute', left: mouse.x, top: mouse.y }} />
      <XyzTransition appear xyz="fade rotate-right ease-out-back">
        {toggled && <div className="square" />}
      </XyzTransition>
        </>
  );
}


/**
 *
 * а потом стало так !
 */
export const Card = ()  => {

  return (

    <Mouse>
      {(mouse) => (
      <div mouse={mouse} style={{ width: "100%", height:"100px", border:"1px solid black", backgroundColor: "hsla(18, 100%, 55%, 1)", color:"lime" }} >
        ({mouse.x} : {mouse.y})
      </div>
    )}
    </Mouse>
  )

}

Mouse.propTypes = {
  state: PropTypes.objectOf(PropTypes.number),
  handleMouseMove: PropTypes.func,

}

export const Xyz = () => {
  let [toggled, setToggled] = useState(true)

  const handleOnClick = () => {
    setToggled(!toggled);
  }
  return (
    <>
        <XyzTransition appear duration="auto" xyz="fade up-100% duration-10">
          {toggled && (
            <div className="item-block"
                style={{width:"5em", height:"5em", display:"flex"}}>
              {[...Array(4)].map((_, index) => (
                <div
                  className="square xyz-nested"
                  style={{width:"5em", height:"5em", backgroundColor:"aqua"}}
                  xyz="fade small stagger"
                  key={index}
                />
              ))}
            </div>
          )}
        </XyzTransition>

      <button onClick={handleOnClick}>Click</button>
    </>
  )

}

export const MyXyzTransition = ()  => {


  const [numElements, setNumElements] = useState(3);

  const addElement = () => {
    setNumElements( (prevnumElements) => prevnumElements + 1)
  }

  const removeElement = () => {
    setNumElements( (prevnumElements) => prevnumElements - 1)
  }
  return (
    <div className="example-wrap flex-col">

      <XyzTransitionGroup
        appear
        className="example-grid"
        xyz="fade small out-down out-rotate-right appear-stagger"
      >
        {[...Array(numElements)].map((_, index) => (
          <div className="square" key={index} style={{height: "5rem", width: "5rem", backgroundColor:"#56ccf2"}}/>
        ))}

      </XyzTransitionGroup>

      <div className="flex-row">
        <button className="example-button" onClick={addElement}>
          Add Element
        </button>
        <button className="example-button" onClick={removeElement}>
          Remove Element
        </button>
      </div>

    </div>

  )
}
