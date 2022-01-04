import React from 'react';
import Wrapper from '../Wrapper/Wrapper';


import styles from './GlobalWrapper.module.css';

const MyContext = React.createContext()

class GlobalWrapper extends React.Component {
		constructor(props) {
			super()
			this.state = {
				count : 0,
				reset: this.handelOnReset,
				multy: this.handelOnMulty,
				division: this.handelOnDivision,
				inc: this.handelOnIncrement,
				dec: this.handelOnDecrement,

				caption : {
					caption1: "Count * 2",
					caption2:  "Count / 2",
					caption3: "Reset",
				}
			};
			this.handelOnReset = this.handelOnReset.bind(this)

			this.handelOnMulty = this.handelOnMulty.bind(this)
			this.handelOnDivision = this.handelOnDivision.bind(this)

			this.handelOnIncrement = this.handelOnIncrement.bind(this)
			this.handelOnDecrement = this.handelOnDecrement.bind(this)


		}
		handelOnMulty = () => this.setState( ({count}) => ({count: count * 2}))
		handelOnDivision = () => this.setState( ({count}) => ({count: Math.round( count / 2 )}) )

		handelOnReset = () => this.setState( ({count}) => ({count: count = 0}))

		handelOnDecrement = () => this.setState( ({count}) => ({count: count - 1}) )
		handelOnIncrement = () => this.setState( ({count}) => ({count: count + 1}) )



	render() {

		return (

			<MyContext.Provider value={this.state}>
				<div className={styles.GlobalWrapper}>

					<Wrapper />

				</div>
		</MyContext.Provider>
		)

	}
}

export {GlobalWrapper, MyContext};
