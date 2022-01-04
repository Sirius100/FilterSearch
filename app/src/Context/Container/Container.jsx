import React from 'react';


import styles from './Container.module.css';
import {MyContext}  from '../GlobalWrapper/GlobalWrapper';
import Subcontaiber from '../Subcontainer/Subcontaiber';


class Container extends React.Component {


  render() {
  	return (


        <MyContext.Consumer>

          {( caption ) => (

            <div className={styles.Container}>
              <Subcontaiber />
              <button > {caption.caption1} </button>
              <button > {caption.caption2} </button>
            </div>
            )}

        </MyContext.Consumer>
  	)
  }
}
export default Container;
