import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';


class Accounts extends Component {
	componentDidMount() {
// render the Blaze accounts form then find the div
// we just rendered in the 'render' method and place
// the Blaze accounts form in that div
	}

	componentWillUnmount() {
// go find the forms we created and destroy them
// we need to clean up those forms ourselves
	}

	render() {
		return (
			<div></div>
		);
	}
}

export default Accounts;