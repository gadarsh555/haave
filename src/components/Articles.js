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
		axios
			.get('http://localhost:8080/db', {
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
