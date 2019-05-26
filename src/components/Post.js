import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
	render() {
		const postData = this.props;

		return (
			<div key={postData.key} className="post">
				<User 
					src={postData.photo}
					alt={postData.altname}
					name={postData.name} 
					min />
				<img src={postData.src} alt={postData.alt}></img>
				<div className="post__name">{postData.name}</div>
				<div className="post__descr">{postData.descr}</div>
			</div>
		)
	}
}