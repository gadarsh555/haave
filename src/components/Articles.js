import React, { Component } from 'react';
import '../styles/Articles.css';
import axios from 'axios';

import ArticleTemplate from './ArticleTemplate.js';

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		//const url = 'http://localhost:8080/db'; // dev mode
		const url = 'http://haave.azurewebsites.net/db'; // production
		axios
			.get(url, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				const limit = response.data.reverse().slice(0, 3);
				this.setState({ data: limit });
			})
			.catch(err => console.log(err));
	}
	render() {
		return (
			<div id="Articles">
				<div id="article-container">
					<div id="article-title">
						<h3>Headlines</h3>
						<hr />
					</div>
					<div id="article-individuals">
						{this.state.data.map(article => {
							return <ArticleTemplate key={article.url} article={article} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Articles;
