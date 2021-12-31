import './App2.css';

import React from 'react';
import GlobalWrapper from './Context/GlobalWrapper/GlobalWrapper';

class App2 extends React.Component {

  render() {
  	return (
  		<div className="App2">

				<section>
        	<h2> Изучение как работает контекст и его плюсы! </h2>
					<GlobalWrapper />
        </section>

  		</div>
  	)
  }
}
export default App2;
