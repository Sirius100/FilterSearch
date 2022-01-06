import React from 'react';

import { ThemeContext, themes } from './theme';
import ThemeButton from './ThemeButton';


function Toolbar(props) {
  console.log('Toolbar')
  return (
    <ThemeButton onClick={props.changeTheme}>
      Change Theme
    </ThemeButton>
  );
}




class App3 extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      theme: themes.light,
    }

    this.toggleTheme = () => {
      this.setState( state => ({
        theme:
          this.state.theme === themes.light
          ? themes.dark
          : themes.light
      }));
    };
  }


  render() {
    console.log('App3');
  	return (
      //смущает что нет Consumer-a
  		<div className={'.App3'}>

        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
  		</div>
  	)
  }
}
export default App3;
