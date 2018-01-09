import React, { Component } from 'react';
import '../styles/Carousel.css';

class Slides extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0
		};
	}
	setHeight() {
		if (this.divElement !== undefined && this.divElement !== null) {
			let height = this.divElement.clientHeight;
			const heightPx = height.toString() + 'px';
			if (heightPx !== this.state.height) {
				if (height !== this.state.height) {
					console.log(this.divElement);
					this.setState({
						height: heightPx
					});
				}
			}
		}
	}
	getHeight() {
		console.log('div', this.divElement);
		console.log('class', this.divElement.getAttribute('class'));
	}
	componentDidMount() {
		this.setHeight();
		window.map = this;
		window.addEventListener('resize', this.setHeight);
	}
	componentWillUnMount() {
		window.removeEventListener('resize', this.setHeight);
	}
	render() {
		return (
			<div id="carousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner" style={this.state}>
					<div
						className="carousel-item active"
						ref={divElement => {
							this.divElement = divElement;
						}}
					>
						<h5 className="company">
							Data Engineering to Improve Time to Market
						</h5>
						<h5 className="industry">Consumer Electronics</h5>
						<p>
							Prominent wearables firm needing to stay abreast of and drive the
							customer experience. The viability and workability of wearables
							and smartwatches involves connectivity across multiple platforms,
							such as mobile and cloud, as customers upload data, and this needs
							to be synced and analyzed by wearables providers. Multiple
							platforms, as well as Bluetooth connectivity, pose challenges for
							the movement of such data. Haave created data solutions that
							allowed for easy migration of the tonnes of data and at much
							greater speeds. This allowed the engineers to take new business
							processes out to market more quickly – time to market was reduced
							by 30% – resulting in a better customer experience as quality and
							frequency of features were made available more quickly.
						</p>
					</div>
					<div className="carousel-item">
						<h5 className="company">
							A/B Testing to Decrease Website Cart Abandonment
						</h5>
						<h5 className="industry">Sporting Goods Retailer</h5>
						<p>
							Company experiencing higher than normal cart abandonment on the
							web. Website had become cluttered and the shopping process was
							unclear – customers didn’t know where or how to checkout. Haave
							believed shopper processes and workflows were to blame and
							performed web analytics to test and validate the assumption. An
							alternative checkout process that was more clear and concise was
							developed which proved the assumption to be correct. Improvement
							of these web checkout processes resulted in mammoth change as
							customers had more clarity on checkout – top line web revenues
							were increased by $20M per year.
						</p>
					</div>
					<div className="carousel-item">
						<h5 className="company">
							Customer Segmentation and Gap Analysis for Retailer
						</h5>
						<h5 className="industry">Retail</h5>
						<p>
							As is common for many firms, company didn’t have a thorough
							understanding of who its customers were and what its most
							profitable customers looked like. These data were crucial to drive
							effective branding and marketing campaigns and, ultimately, top
							and bottom line results. Haave produced and distributed a detailed
							survey and performed cluster analysis on the results. Customer
							personas were identified and previously unidentified high profit
							segments surfaced, as part of the effort. Analytical results and
							recommendations were distributed to executives and lines of
							business, allowing the teams to drive targeted, improved and
							effective marketing efforts and campaigns.
						</p>
					</div>
					<div className="carousel-item">
						<h5 className="company">
							Natural Language Processing to Improve Call Center Efficiency
						</h5>
						<h5 className="industry">Telecommunications</h5>
						<p>
							Implemented Natural Language Processing (NLP), a form of text
							analysis, to look at the causes of client dissatisfaction and
							determine problem resolution in a call center setting. Using
							advanced data science tools and techniques, identified common
							themes for grouping the right questions to best address customers’
							needs. Streamlined process allowed for reduction in call length
							and increased on-call resolution resulting in fewer service
							technicians needing to be deployed in the field. Anticipated cost
							savings are expected to exceed $50 million per year.
						</p>
					</div>
					<div className="carousel-item">
						<h5 className="company">
							Sentiment Analysis to Increase Customer Satisfaction
						</h5>
						<h5 className="industry">Telecommunications</h5>
						<p>
							Company challenged with understanding customer sentiment and was
							losing business to the competition. Customer complaint feedback
							was voluminous and employees were inundated with making sense of
							the data. Performed text, sentiment and topic modeling to assess
							the feedback of former customers and understand why they were
							unhappy; analyses helped determine where best to focus efforts.
							Result was a reduction in customer churn and an improvement in
							workplace efficiencies, revenues associated with the project
							exceeded $8M per year.
						</p>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carousel"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carousel"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

export default Slides;
