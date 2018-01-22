import React, { Component } from 'react';
import '../styles/Healthcare.css';
import '../styles/Powerpoint.css';

class Healthcare extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div id="healthcare-container" className="animated fadeInUp">
				<div id="healthcare-title">
					<img src={require('../img/health.png')} alt="health.png" />
					<h3>Healthcare</h3>
					<hr />
				</div>
				<div className="healthcare-description">
					<h5>
						The healthcare landscape is evolving at the most rapid pace in
						history, and it‘s a challenge to keep pace. Historically, healthcare
						organizations have functioned without the benefit of deep data
						analytics guiding the way. That has now changed – Haave can lead you
						to the forefront of healthcare analytics.
					</h5>
					<p>
						With the implementation of electronic health records and the
						advancement of artificial intelligence, machine learning, neural
						networks and natural language processing, your accumulated data can
						now be integrated to build advanced analytics solutions.
					</p>
					<p>
						Research has shown that top performing organizations use advanced
						analytics five times more than lower performing organizations.
						Leveraging your data contributes directly to increased revenues,
						improved quality outcomes, higher patient satisfaction, increased
						market shares and enhanced compliance.
					</p>
					<p>
						Whether it’s Revenue Cycle Management, Coding, Claims Denial
						Management, Clinical Quality and Outcomes Improvement, Clinical
						Documentation Improvement or Supply Chain Management, our team of
						data scientists can build a predictive analytics platform that will
						help you to navigate your next steps and create insights that will
						allow you to meet your strategic objectives.
					</p>
					<h6>Revenue Cycle – Claims Denial Management</h6>
					<p>
						Denials, underpayments and delays are critical sources of revenue
						challenges. On average, 5% of all claims are denied, often requiring
						lengthy appeals. Whether it’s offering coding support, analyzing the
						accuracy of your coding, maximizing your reimbursement opportunities
						or minimizing your denials, Haave will use machine learning to work
						with you and aggregate your data to uncover sometimes hidden
						obstacles to create a denials prevention and solution plan.
						Predictive analytics can identify where you have the maximum
						opportunity to create efficiencies and reduce roadblocks to payment.
					</p>
					<p>
						Haave can also partner with your third party revenue cycle
						management group to offer significant added efficiencies to your
						processes.
					</p>
					<h6>Coding</h6>
					<p>
						High-quality coding is an expensive and time-consuming process
						requiring dedicated time from specialized medical coders. With
						qualified coders hard to find and expensive to retain, many
						organizations involved in medical coding are looking for ways to
						scale their existing workforce and increase coding quality.
					</p>
					<p>
						Fortunately, recent advances in natural language processing (NLP)
						and machine learning are revolutionizing the translation space. NLP
						allows a computer to understand valuable information hidden in
						blocks of text (such as doctors notes), and machine learning can
						perform sophistic manipulation on structured data (such as lab
						results). Haave can help your organization utilize these tools and
						transform your coding process.
					</p>
					<h6>Supply Chain</h6>
					<p>
						Supply chain management continues to become increasingly complex as
						costs continue to rise and reimbursements change with new payment
						models. Haave’s expert data scientists will evaluate and merge your
						data with your acquisition, contracting, utilization and pricing
						practices to deliver analysis that will allow you to meet and exceed
						your strategic and financial objectives.
					</p>
					<h6>Clinical Documentation Improvement</h6>
					<p>
						The adoption of ICD-10 and its more than 69,000 codes created a
						dramatic increase in the number of codes and the granular detail
						that is now required for accurate reimbursement. Haave’s expertise
						in Natural Language Processing integrates your documentation data,
						quality metrics, history, queries and coding to build a denial
						prevention strategy resulting in optimized accuracy and
						reimbursements. After learning from correctly coded examples, NLP
						learns to predict on its own which codes should or should not apply
						to a given document.
					</p>
					<p>
						Applying NLP to Clinical Documentation has the ability to reduce
						errors and engage physicians in real time.
					</p>
					<h6>Clinical Quality Improvement</h6>
					<p>
						As the momentum continues towards value-based care, maximizing your
						clinical quality is becoming more important than ever. Whether you
						are ready to develop Clinical Documentation Improvement, best
						practice clinical outcomes, episode-based payment model efficiencies
						or clinical process improvement, you will be exploring a data-driven
						initiative.
					</p>
					<p>
						Haave’s data science experts will integrate your quality data
						metrics and patient outcomes to build predictive analytics that will
						shape your clinical decision-making and enable you to build a new
						future for your organization.
					</p>
					<h6>Staff Augmentation</h6>
					<p>
						You may have great data access, but lack the staff to accomplish
						your goals. Haave offers highly skilled temporary or interim
						staffing to support both your immediate and long-term staffing and
						project needs.
					</p>
					<div className="powerpoint">
						<iframe
							src="https://docs.google.com/presentation/d/e/2PACX-1vQCXcsirjzc0TgHrWyT1Nnapyii7Qp8PGIW7cTSxUN_aKI7TTFVW3wfDm6a31tLOUgOFshGa3LFNj92/embed?start=false&loop=false&delayms=3000"
							frameBorder="0"
							width="100%"
							height="500"
							allowFullScreen="true"
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Healthcare;
