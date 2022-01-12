import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
// import '@animxyz/core'


import styles from './Refs1.module.css';
import { forwardRef } from 'react/cjs/react.production.min';




export const Block = (props) => {
  const [state, setState] = useState(false)

  const handlerClick = () => {
    setState(!state)
    // console.log(state);
  }

  return (
    <div className={styles.Block} onClick={handlerClick} >
      { state && <div className="square" xyz={props.xyz}></div>}
    </div>)
}



//#region start
export const MyInput = forwardRef( (props, ref ) => {

  const [state, setState] = useState(false)
  const name = props.name;

  const handlerClickMyInput = () => {
    console.log("на мне кликнули!");
    (props.func) ? props.func() : console.log("нет такого функционала");
  }


  useEffect(() => {
    // handlerClickMyInput();
  })

  return (

    <div className={styles.MyInput} ref={ref} onClick={handlerClickMyInput}>
      <label
        name="myinp"
        htmlFor="myinp"
        className={styles.label}>
      Name:
      </label>
      &nbsp;
      <input
        type="text"
        name="myinp"
        id="myinp"
        onChange={() => console.log(ref.current.querySelector('input'))}
        className={styles.input}  />
      &nbsp;
      <button
        className={styles.button}
        onClick={() => console.log(ref.current.querySelector('button').textContent)}>

        {name}
        </button>
    </div>

  )
})

MyInput.displayName = 'MyInput';
//#endregion

export const Checked = ({text})  => {

  const [state, setState] = useState();

  return (

    <div className={styles.Checked} >
      <label htmlFor="check">

        <input type="checkbox"  id="check"/>
        <div className={styles.chekout}></div>
      </label>
      {text}
    </div>

  )
}

export class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // создадим реф в поле `textInput` для хранения DOM-элемента
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Установим фокус на текстовое поле с помощью чистого DOM API
    // Примечание: обращаемся к "current", чтобы получить DOM-узел
    this.textInput.current.focus();  }

  componentDidMount() {
    console.log("CustomTextInput this.textInput  = ", this.textInput.current);
    }
  render() {
    // описываем, что мы хотим связать реф <input>
    // с `textInput` созданным в конструкторе

    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Фокус на текстовом поле"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}


export class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textButton = React.createRef();
    this.textInput = React.createRef();
  }


  componentDidMount() {
    this.btn = this.textButton.current.querySelector('button');
    console.log("AutoFocusTextInput = ", this.btn.textContent);
    this.btn.style.color = "red";
    this.btn.style.borderRadius = "10px";
    this.textInput.current.focusTextInput();
  }

  render() {

    return (
      <>
      <CustomTextInput ref={this.textInput} />
      <MyInput name={'Caption-A'} ref={this.textButton}/>
      </>
    );

  }
}

export const AutoFocusTextInput2 = ()  => {

  const button = React.createRef();
  const textInput = React.createRef();

  //функция колбек которая вызывается из ком-та MyInput
  const newButtonStyle = () => {
    const btn = button.current.querySelector('button');
    btn.style.color = "lime";
    btn.style.borderRadius = "10px";
  }


  return (

    <>
    <CustomTextInput ref={textInput} />
    <MyInput name={'Caption-A'} ref={button} func={newButtonStyle}/>
    </>

  )
}

export class CustomTextInput2 extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => { this.textInput = element; console.log('element = ', element); };
    this.focusTextInput = () => {      // Устанавливаем фокус на текстовом поле ввода с помощью чистого DOM API
      if (this.textInput) this.textInput.focus(); };
  }

  componentDidMount() {
    // устанавливаем фокус на input при монтировании
    this.focusTextInput();  }

  render() {
    // Используем колбэк в `ref`, чтобы сохранить ссылку на DOM-элемент
    // поля текстового ввода в поле экземпляра (например, this.textInput).
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}        />
      </div>
    );
  }
}
