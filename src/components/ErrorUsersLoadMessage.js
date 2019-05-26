import React from 'react';
import img from '../error.png';

const ErrorUsersLoadMessage = () => {
	return (
		<a href="javascript:void(0)" className="user min">
			<img src={img} alt='error'></img>
			<div></div>
		</a>
	)
};

export default ErrorUsersLoadMessage;