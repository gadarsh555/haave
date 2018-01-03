import React, { Component } from 'react';
import '../styles/Articles.css';

import ArticleTemplate from './ArticleTemplate.js';

class Articles extends Component {
	render() {
		return (
			<div id="Articles">
				<div id="article-container">
					<div id="article-title">
						<h3>News</h3>
						<hr />
					</div>
					<div id="article-individuals">
						<ArticleTemplate />
						<ArticleTemplate />
						<ArticleTemplate />
					</div>
				</div>
			</div>
		);
	}
}

export default Articles;
