import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.scss';

import Search from './Components/Search/Search'
import Repos from './Components/Repos/Repos'
import Header from './Components/Header/Header'
import Commits from './Components/Commits'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
			nameProfile: '',
			avatar: ''
		}
	}

	getUser() {
		let BASE_URL = `https://api.github.com/users/pedrohenrickcs`;

		axios.get(`${BASE_URL}/repos`)
		.then(e => {

			const wayApi = e.data[0].owner;

			this.setState({ nameProfile: wayApi.login, avatar: wayApi.avatar_url })

			const result = e.data.map((i) => {
				return this.state.items = i;
			})

			this.setState({ items: result });

		})
		.catch(err => console.error(err))
	}

	getCommit() {
		let BASE_URL = `https://api.github.com/repos/pedrohenrickcs`;

		const names = this.state.items.map((result) => {
			return result.name;
		})

		axios.get(`${BASE_URL}/contacts/commits`)
		.then(commit => {
			// console.log('COMMITS', commit);
		})
	}

	componentDidMount() {
		this.getUser()
	}

	render() {

		
		let state = this.state
		
		const item = state.items
		const avatar = state.avatar
		const nameProfile = state.nameProfile

		const isVisible = this.props.isVisible

		this.getCommit()

		console.log('isVisible', this);
		

		return (
			<Router>
				<Header
					avatar={avatar}
					nameProfile={nameProfile}
					item={item}
				/>
				{
					isVisible ? (
						// <Route path="/commits" exact component={Commits} />
						<h1>sdfsdfdgf</h1>
						) : (
						<Search
							isVisible={this.props.isVisible}
							item={item}
						></Search>
					)
				}
				
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
