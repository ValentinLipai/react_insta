import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {

	InstaService = new InstaService();

	state = {
		posts: [],
		error: false
	}

	componentDidMount() {
		this.updatePosts();
	}

	onPostsLoaded = (posts) => {
		this.setState({
			posts,
			error: false
		});
	}

	onError = (err) => {
		this.setState({
			error: true
		});
	}

	updatePosts = () => {
		this.InstaService.getAllPosts()
		.then(this.onPostsLoaded)
		.catch(this.onError)
	}

	renderItems(arr) {
		return arr.map( (item) => {
			const {name, altname, photo, src, alt, descr, id} = item;

			return (
				<Post 
					key={id}
					photo={photo}
					altname={altname}
					name={name}
					alt={alt} 
					src={src} 
					descr={descr}
				/> 
			)
		});
	}

	render() {
		const {error, posts} = this.state;

		if (error) {
			return <ErrorMessage />
		}

		const items = this.renderItems(posts);

		return (
			<div className="left">
				{items}
			</div>
		)
	}
}