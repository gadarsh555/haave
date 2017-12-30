import React, { Component } from 'react';
import '../styles/ArticleTemplate.css';

class ArticleTemplate extends Component {
	render() {
		return (
			<div className="Template">
				<img src="https://www.mckinsey.com/~/media/McKinsey/About%20Us/New%20at%20McKinsey/Our%20top%2010%20insights%20of%202017/top-ten-insights2017-thumb.ashx?mw=677&car=42:25" />
				<h4>Top 10 Insights of 2017</h4>
				<p>December 22, 2017</p>
			</div>
		);
	}
}

export default ArticleTemplate;
