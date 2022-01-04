import React from 'react';


import styles from './Container.module.css';
import {MyContext}  from '../GlobalWrapper/GlobalWrapper';
import UpSubcontaiber from '../UpSubcontainer/UpSubcontaiber';
import Count from '../Count/Count';


class Container extends React.Component {


  render() {
  	return (


        <MyContext.Consumer>

          {( { caption, multy, division } ) => (

            <div className={styles.Container}>
              <UpSubcontaiber />
              <button onClick={multy}> {caption.caption1} </button>
              <button onClick={division}> {caption.caption2} </button>
              <Count/>
            </div>
            )}

        </MyContext.Consumer>
  	)
  }
}
export default Container;
