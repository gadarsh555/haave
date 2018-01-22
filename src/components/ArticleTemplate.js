import React, { Component } from 'react';
import '../styles/ArticleTemplate.css';
import axios from 'axios';

class ArticleTemplate extends Component {
	componentDidMount() {
		axios
			.get('http://localhost:8080/db', {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => console.log(response.data))
			.catch(err => console.log(err));
		// fetch('http://localhost:8080/db', {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// })
		// 	.then(response => {
		// 		console.log(response.json());
		// 		return response.json();
		// 	})
		// 	.catch(err => console.log('err', err));
	}
	render() {
		return (
			<div className="Template">
				<img
					src="https://www.mckinsey.com/~/media/McKinsey/About%20Us/New%20at%20McKinsey/Our%20top%2010%20insights%20of%202017/top-ten-insights2017-thumb.ashx?mw=677&car=42:25"
					alt="article"
				/>
				<h4>Top 10 Insights of 2017</h4>
				<p>December 22, 2017</p>
			</div>
		);
	}
}

export default ArticleTemplate;
