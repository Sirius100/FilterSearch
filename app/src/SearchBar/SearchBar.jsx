import React from 'react';

import styles from './SearchBar.module.css';


export default class SearchBar extends React.Component {
  constructor(props) {
  	super(props)


    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChecked = this.handleOnChecked.bind(this)
  }

  componentDidMount(){
    this.props.AutoFocus.current.focus();
  }

  handleOnChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleOnChecked(e) {
    this.props.onChangeChecked(e.target.checked)
  }



  render() {
  	return (
  		<div className={styles.SearchBar}>
        <input
          type="text"
          value={this.props.FilterText}
          ref={this.props.AutoFocus}
          onChange={this.handleOnChange}
        />
        <input
          type="checkbox"
          checked={this.props.InOnlyCheked}
          onChange={this.handleOnChecked}
        />
  		</div>

  	)

  }
}
// export SearchBar;
