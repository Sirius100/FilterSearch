import './AppX.css';

import React from 'react';
import {GlobalWrapper} from './Context/GlobalWrapper/GlobalWrapper';
import MapInfo from './Context/MapInfo/MapInfo';
import { Component1 } from './functionaly_context1/Component1/Component1';
import { Component1 as Component1a } from './functionaly_context2/Component1/Component1';
import { Component1 as Component1b } from './functionaly_context3/Component1/Component1';
import { Component1 as Component1c } from './functionaly_context4/Component1/Component1';
// import Parent from './FindContext/Parent';
// import App3 from './FindContext/App3';


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

				<section>
					<Component1	/>
				</section>

				<section>
					<Component1a	/>
				</section>

				<section>
					<Component1b	/>
				</section>

				<section>
				<h3>Контекст на хуках</h3>
				</section>
				<section>
					<Component1c	/>
				</section>
  		</div>
  	)
  }
}
export default App2;
