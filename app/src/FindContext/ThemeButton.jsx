import React from 'react';
import { ThemeContext } from './theme';



class ThemeButton extends React.Component {

  render() {
    let props = this.props;
    console.log('props = ', props);
    let theme = this.context;
    console.log('this.context = ', this.context);
    console.log('theme.background = ' ,theme.background);
    console.log('ThemeButton')
  	return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
  	)
  }
}
ThemeButton.contextType = ThemeContext;


export default ThemeButton;
