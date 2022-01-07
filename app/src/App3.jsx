import React from 'react';

import styles from './AppX.css';
import { Button } from './ErrorBoundary/Button/Button';
import ErrorComponent from './ErrorBoundary/ErrorComponent/ErrorComponent';


export default function App3() {

  return(
    <div className='App3'>

      <section>
      <h3>Изучаю ErrorBoundary</h3>
      <ErrorComponent>
        <Button>
          Click Me!
        </Button>
      </ErrorComponent>

      </section>

    </div>


  )
}
