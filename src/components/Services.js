import React, { Component } from 'react';
import '../styles/Services.css';

class Services extends Component {
	render() {
		return (
			<div>
				<h3 className="service-title">
					<b>Haave</b> is a data science consulting firm. Discover how our
					combination of experience and training can help grow your business.
				</h3>
				<p className="service-description">
					We are uniquely skilled, academically-trained PhDs comfortable in
					chaos. Our expanding team of data scientists leverage cloud Hadoop
					infrastructures, ingest and clean data, produce intuitive
					visualization, perform feature engineering, develop models ranging
					from logistic regression to advanced neural networks, and are adept at
					real-time streams processing and deep learning.
				</p>
				<p className="service-description">
					Our work has helped CMOs in better understanding audience behavior,
					Product Managers in finding better ways to commercialize products,
					CFOs in building better forecast models, and CISOs in better
					information management and security measures. Our team moves you
					closer toward the goal you aspire, no dream is too large for us to
					assess, model, evaluate and deploy.
				</p>
			</div>
		);
	}
}

export default Services;
