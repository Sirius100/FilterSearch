import './App2.css';

import React from 'react';
import {GlobalWrapper} from './Context/GlobalWrapper/GlobalWrapper';
import MapInfo from './Context/MapInfo/MapInfo';
// import { Parent } from './functionaly_context/Parent';
// import Parent from './FindContext/Parent';


class App2 extends React.Component {

  render() {
  	return (
  		<div className="App2">

				<section>
        	<h2> Изучение как работает контекст и его плюсы! </h2>
				</section>

				<section>
					<GlobalWrapper />
					<MapInfo/>
        </section>

  		</div>
  	)
  }
}
export default App2;
