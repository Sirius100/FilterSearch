import React from 'react';
import Container from '../Container/Container';

import styles from './Wrapper.module.css';

class Wrapper extends React.Component {

  render() {

  	return (
  		<div className={styles.Wrapper}>

        <Container />

  		</div>
  	)
  }
}
export default Wrapper;
