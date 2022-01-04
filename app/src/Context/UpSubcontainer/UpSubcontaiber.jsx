import React from 'react';

import styles from './UpSubcontaiber.module.css';
import {MyContext}  from '../GlobalWrapper/GlobalWrapper';

class Subcontaiber extends React.Component {

  render() {
  	return (

      <MyContext.Consumer>
        {( {caption, reset} ) => (

          <div className={styles.Subcontaiber}>
              <button onClick={reset} > {caption.caption3} </button>
          </div>
        )}
      </MyContext.Consumer>

  	)
  }
}

export default Subcontaiber;
