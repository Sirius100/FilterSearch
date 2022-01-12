import React from 'react';
import {useEffect} from 'react'

import styles from './AppX.css';
import { Button } from './ErrorBoundary/Button/Button';
import ErrorComponent from './ErrorBoundary/ErrorComponent/ErrorComponent';
import {MyInput, Checked, AutoFocusTextInput, CustomTextInput,  CustomTextInput2, AutoFocusTextInput2} from './Refs/Refs1'


export default function App3() {
  const refMyInputA= React.createRef();
  const refMyInputB= React.createRef();
  const refMyInputC= React.createRef();
  const refMyInputD= React.createRef();

  return(
    <div className='App3'>

      <section>

        <h3>Изучаю ErrorBoundary</h3>
        <ErrorComponent>
          <Button>
            Click Me!
          </Button>

        </ErrorComponent>

        <Checked text={'чекед'}/>
      </section>

      <section>
        <h3>Изучаю Ref & forwardRef</h3>
        <AutoFocusTextInput2/>
        <AutoFocusTextInput2/>
        <AutoFocusTextInput2/>
        <AutoFocusTextInput2/>
        <MyInput name={'Caption-B'} ref={refMyInputB}/>
        <MyInput name={'Caption-C'} ref={refMyInputA}/>
        <CustomTextInput/>
        <CustomTextInput2 />
      </section>
      <section>

      </section>

      <section>

      </section>


    </div>


  )
}
