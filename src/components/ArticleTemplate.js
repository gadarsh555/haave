import React, { Component } from 'react';
import '../styles/ArticleTemplate.css';

class ArticleTemplate extends Component {
	render() {
		return (
			<div className="Template">
				<a href={this.props.article.url} target="_blank">
					<img alt="thumbnail" src={this.props.article.img} />
				</a>
				<h4>{this.props.article.title}</h4>
				<p>{this.props.article.pubDate}</p>
			</div>
		);
	}
}

export default ArticleTemplate;
