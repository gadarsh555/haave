import React, { Component } from 'react';
import '../styles/Legal.css';
import '../styles/Powerpoint.css';

class Legal extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div id="Legal" className="animated fadeInUp">
				<div id="legal-title">
					<img src={require('../img/circle.png')} alt="circle.png" />
					<h3>Advanced NLP for Predictive Coding</h3>
					<hr />
				</div>
				<div className="legal-description">
					<p>
						Over the past decade, deep learning has made possible self-driving
						cars and other once- unthinkable innovations. Only in the past few
						years, however, have researchers found ways to channel the
						incredible power of deep learning for NLP objectives. In fields
						ranging from speech recognition to machine translation, deep NLP
						models are dramatically outperforming traditional techniques. In
						2016, these advances convinced Google to abandon a translation model
						in which it had invested over 200 years of human labor, switching
						instead to deep NLP.
					</p>
					<p>
						Nor is deep learning limited to the likes of Google, Facebook, and
						Amazon. Google itself, by publishing its research and open-sourcing
						its code, is actively encouraging the broader machine learning
						community to capitalize on its massive investments. The result is an
						unparalleled opportunity for anyone who stores, processes, or
						analyzes text. The NLP technologies are now freely available; the
						challenge is applying them wisely.
					</p>
					<p>
						Consider the case of predictive coding (technology-assisted review).
						Because the dominant players in this space continue to rely on
						outdated, bag-of-words models that disregard the sequence in which
						words occur, their models remain unnecessarily blunt, casting aside
						invaluable syntactic information. Instead of searching for the
						fine-grained distinctions upon which human beings depend, the
						current bag-of-words models merely map documents to topics. They
						search not for meanings, but only for subject matter. Instead of
						zeroing in on what is actually being said, they settle for what is
						being talked about. By contrast, deep NLP models are powerful and
						sensitive enough to attend, like a human reader, to each sentence’s
						unique structure. As a result, deep models can detect nuances of
						meaning that bag-of-words models intentionally ignore. In the age of
						multilayer neural nets, however, there is no longer any reason to
						dumb our inputs down. To be sure, human languages are incredibly
						complex and ambiguous. But deep learning is up to that challenge.
					</p>
					<p>
						And so are you. By bridging the gap between research and reality,
						between potential and production, Haave brings the state of the art
						within your grasp. After determining which of the new architectures
						is best suited for your objectives, we work with you to implement,
						test, and tune those models within your unique environment,
						optimizing for your particular applications. We look forward to
						placing these extraordinary new technologies in your hands and
						seeing where they lead you.
					</p>
					<div className="powerpoint">
						<iframe
							src="https://docs.google.com/presentation/d/e/2PACX-1vTxRXZnehNMNBrExtSXJSU7Mz_oMC6n_-lIQR1bPkxkzlkuXwy6F3pJqeOqA6NuogmuaFcBUkU_R6IW/embed?start=false&loop=false&delayms=3000"
							frameborder="0"
							width="100%"
							height="500"
							allowfullscreen="true"
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Legal;
