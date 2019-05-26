import React, {Component} from 'react';
import logo from '../logo.svg';


export default class HeaderLogo extends Component {
	render() {
		return (
			<a href="./" className="logo">
				<img src={logo} alt="logo" ></img>
			</a>
		)
	}
}