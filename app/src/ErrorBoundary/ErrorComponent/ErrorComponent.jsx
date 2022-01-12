import React from 'react';

class ErrorComponent extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      hasError: false,
      log: null,
      error: null,
    }
  }
  static getDerivedStateFromError() {

  }

  render() {
    if(this.state.hasError){
      return (<i >Что то сломалось - проверте Ваш компьютер!</i>
      )
    }
  	return (
      this.props.children
  	)
  }
}
export default ErrorComponent;
