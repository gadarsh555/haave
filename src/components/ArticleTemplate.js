import React, { Component } from 'react';
import '../styles/ArticleTemplate.css';

class ArticleTemplate extends Component {
	render() {
		return (
			<div className="Template">
				<a href={this.props.article.url} target="_blank">
					<img
						src="https://www.mckinsey.com/~/media/McKinsey/About%20Us/New%20at%20McKinsey/Our%20top%2010%20insights%20of%202017/top-ten-insights2017-thumb.ashx?mw=677&car=42:25"
						alt="thumbnail"
						// src={this.props.article.img}
					/>
				</a>
				<h4>{this.props.article.title}</h4>
				<p>{this.props.article.pubDate}</p>
			</div>
		);
	}
}

export default ArticleTemplate;
