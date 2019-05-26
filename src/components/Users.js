import React, {Component} from 'react';
import User from './User'
import InstaService from '../services/instaservice';
import ErrorUsersLoadMessage from './ErrorUsersLoadMessage';

export default class Users extends Component {

	InstaService = new InstaService();

	state = {
		users: [],
		error: false
	}

	componentDidMount() {
		this.updateUsers();
	}

	onUsersLoaded = (users) => {
		this.setState({
			users,
			error: false
		});
	}

	onError = (err) => {
		this.setState({
			error: true
		});
	}

	updateUsers = () => {
		this.InstaService.getAllPosts()
		.then(this.onUsersLoaded)
		.catch(this.onError)
	}

	renderItems(arr) {
		return arr.map( (item) => {
			const {name, altname, photo, id} = item;

			return (
				<User 
					key={id}
					src={photo} 
					alt={altname}
					name={name}
					min
				/>
			)
		});
	}

	render() {
		const {error, users} = this.state;
		if (error) {
			return <ErrorUsersLoadMessage />
		}

		const items = this.renderItems(users);

		return (
			<div className="right">
				<User 
						src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" 
						alt="Принц"
						name="Harry_the_prince" />
				<div className="users__block">
					{items}
				</div>
			</div>
		)
	}
} 