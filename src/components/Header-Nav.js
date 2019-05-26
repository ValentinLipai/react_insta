import React, {Component} from 'react';

export default class HeaderNav extends Component {
	render () {
		return (
			<nav className="links">
				<ul>
					<li>
						<a href="./" className="menu__links">Лента</a>
					</li>
					<li>
						<a href="./" className="menu__links">Профиль</a>
					</li>
				</ul>
			</nav>
		)
	}
}