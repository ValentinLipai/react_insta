import React from 'react';
import HeaderLogo from './Header-Logo';
import HeaderNav from './Header-Nav';

export default function Header() {
	return (
		<header className="header">
			<div className="container h-flex">
				<HeaderLogo />
				<HeaderNav />
			</div>
		</header>
	)
}