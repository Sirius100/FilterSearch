import React from 'react';

import styles from './Subcontaiber.module.css';
import {MyContext}  from '../GlobalWrapper/GlobalWrapper';

class Subcontaiber extends React.Component {

  render() {
  	return (

      <MyContext.Consumer>
        {( caption ) => (

          <div className={styles.Subcontaiber}>
              <button> {caption.caption3} </button>
          </div>
        )}
      </MyContext.Consumer>

  	)
  }
}

export default Subcontaiber;
