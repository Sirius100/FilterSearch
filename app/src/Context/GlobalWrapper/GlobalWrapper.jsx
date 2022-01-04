import React from 'react';
import Wrapper from '../Wrapper/Wrapper';


import styles from './GlobalWrapper.module.css';

const MyContext = React.createContext()

export default class GlobalWrapper extends React.Component {

	render() {
		const caption = {
			caption1: "Left Click me!",
			caption2:  "Right Click me!",
			caption3: "Center Click me!",
		}

		return (

			<MyContext.Provider value={caption}>
				<div className={styles.GlobalWrapper}>

					<Wrapper />

				</div>
		</MyContext.Provider>
		)

	}
}

export {MyContext};
