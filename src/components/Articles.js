import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Articles.css';

import ArticleTemplate from './ArticleTemplate.js';

class Articles extends Component {
	render() {
		return (
			<div id="article-container">
				<div id="article-title">
					<h3>Healthcare Articles</h3>
					<hr />
				</div>
				<div id="article-individuals">
					<ArticleTemplate />
					<ArticleTemplate />
					<ArticleTemplate />
					<ArticleTemplate />
				</div>
			</div>
		);
	}
}

export default Articles;
