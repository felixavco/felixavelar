import React, { Component } from 'react';
import mainBg from '../../img/mainBg.jpg';
import Loader from '../commons/loaders/Loader';
import Particles from 'react-particles-js';

class Landing extends Component {
	constructor() {
		super();

		this.state = {
			textProfession: ['"Web Developer"', '"Javascript Developer"', '"WordPress Developer"'],
			profession: '',
			txt: '',
			wait: 3000,
			isDeleting: false,
			wordIndex: 0,
			isLoading: true
		};
	}

	typing = () => {
		const { wordIndex, textProfession, isDeleting, txt, wait } = this.state;
		const current = wordIndex % textProfession.length;
		const fullTxt = textProfession[current];

		if (isDeleting) {
			this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
		} else {
			this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
		}

		this.setState({ profession: txt });

		let typeSpeed = 300;

		if (isDeleting) {
			typeSpeed /= 2;
		}

		if (!isDeleting && txt === fullTxt) {
			typeSpeed = wait;
			this.setState({ isDeleting: true });
		} else if (isDeleting && txt === '') {
			this.setState({
				isDeleting: false,
				wordIndex: wordIndex + 1
			});
			typeSpeed = 500;
		}

		setTimeout(() => this.typing(), typeSpeed);
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
			this.typing();
		}, 1500);
	}

	render() {
		const { isLoading } = this.state;
		let loaderComponent = null;
		if (isLoading) {
			loaderComponent = <Loader />;
		}

		const options = {
	    "particles": {
	        "number": {
	            "value": 500,
	            "density": {
	                "enable": true
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "right",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": false,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 250,
	                "duration": 1
	            }
	        }
	    }
	};

		return (
			<section id="landing" style={{ backgroundImage: `url(${mainBg})` }}>
				<Particles className="particles" params={options} />
				<div className="bg-overlay" />
				<div className={`window animated  ${!isLoading ? 'fadeInDown' : ''}`}>
					<div className="window-top">
						<span className="window-title">
							<i className="fas fa-terminal" /> &nbsp; About Me
						</span>
						<div>
							<span className="min" />
							<span className="max" />
							<span className="cls" />
						</div>
					</div>
					<div className="content">
						<div>
							<p>
								<span className="var">const </span>
								<span className="var-name">About_Me </span>
								&#61; &#123;
							</p>
							<p className="inner">
								Name: <span className="value">"Felix Avelar"</span>,
							</p>
							<p className="inner">
								I am a:
								<span className="value" id="profession">
									<span className="txt">
										{this.state.profession}
									</span>
								</span>,
							</p>
							<p className="inner">
								Email: <span className="value">"hey@felixavelar.com"</span>,
							</p>
							<p className="inner">
								Phone: <span className="value">"+503 73983350"</span>,
							</p>
							<p>&#125;</p>
						</div>
					</div>
				</div>
				{loaderComponent}
			</section>
		);
	}
}

export default Landing;
