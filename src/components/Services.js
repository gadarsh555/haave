import React, { Component } from 'react';
import '../styles/Services.css';

import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
	render() {
		return (
			<div className="service-container">
				<ScrollAnimation animateIn="fadeInUp">
					<h3 className="service-title">
						<b>Haave</b> is a data science consulting firm, discover how you can
						utilize data to transform your business.
					</h3>
				</ScrollAnimation>
				<p className="service-description">
					We are uniquely skilled, academically-trained PhDs with real world
					experience. Our expanding team of over 30,000 data scientists leverage
					cloud and Hadoop infrastructures, ingest and clean data, produce
					intuitive visualization, perform feature engineering, develop models
					ranging from logistic regression to advanced neural networks, and are
					particularly adept at Natural Language Processing (NLP).
				</p>
				<p className="service-description">
					Our work has helped legal teams identify relevant documents,
					healthcare providers improve operational efficiency, CMOs better
					understand audience behavior, CFOs build better forecast models, and
					CIOs implement big data strategies. Our team moves you closer toward
					the goal you aspire, no dream is too large for us to assess, model,
					evaluate and deploy.
				</p>
			</div>
		);
	}
}

export default Services;
