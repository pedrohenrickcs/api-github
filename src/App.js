import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.scss';
import Header from './Components/Header/Header'
import Repos from './Components/Repos/Repos'
import Commits from './Components/Commits/Commits'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [],
			nameProfile: '',
			avatar: '',
			searchString: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({
			searchString: this.refs.search.value
		});
	}

	getUser() {
		let BASE_URL = `https://api.github.com/users/pedrohenrickcs`;

		axios.get(`${BASE_URL}/repos`)
		.then(e => {

			const wayApi = e.data[0].owner;

			this.setState({ nameProfile: wayApi.login, avatar: wayApi.avatar_url, items: e.data })

		})
		.catch(err => console.error(err))
	}

	componentDidMount() {
		this.getUser()
	}

	render() {

		let state = this.state
		let item = state.items
		let search = this.state.searchString.trim().toLowerCase();

		const avatar = state.avatar
		const nameProfile = state.nameProfile	
		

		if (search.length > 0) {
            item = item.filter(function (user) {
                return user.name.toLowerCase().match(search);
            });
        }

		return (
			<Router>
				<Header
					avatar={avatar}
					nameProfile={nameProfile}
					item={item}
				/>
				<div className="container">
					<form>
						<input 
							id="venueType" 
							className="search__box"
							type="text"
							placeholder="Pesquisar"
							ref="search"
							value={this.searchString}
							onChange={this.handleChange}
							autoComplete="off"
						/>
					</form>

					{item.length === 0 ? (
							<h2 className="search__empty">Nenhum repositório encontrado <span aria-label="triste" role="img">🙁</span></h2>
						) : null
					}
					<Switch>
						<Route path="/commits/:repo" component={Commits} />
						<Route path="/" exact render={() => <Repos userResult={item} />} />
					</Switch>

					<small className="text-foot">Built with ❤ and React and deployed with Netlify, by @PedroHenricks  - © 2019"</small>
				</div>
				
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
