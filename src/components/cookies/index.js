import React from 'react';
// import { connect } from 'react-redux';
// import { agreeCookies } from '../../actions/';
import { CookiesCon, MoreCon } from './CookiesStyle';

class Cookies extends React.Component {
	constructor(props) {
		super(props);
		this.agreeToCookies = this.agreeToCookies.bind(this);
		this.refuseCookies = this.refuseCookies.bind(this);
	}

	agreeToCookies() {
		window.localStorage.setItem('cookies', 'yes');
		// this.props.agreeCookies('yes');
		console.log(
			`agreeToCookies calls agreeCookies from redux and props are ${this.props.cookies}, ${this.props.system}`
		);
	}

	componentDidMount() {
		// this.props.agreeCookies(window.localStorage.getItem('cookies'));
	}

	showModal() {
		let el = document.getElementById('more');
		el.style.display = 'block';
	}

	refuseCookies() {
		window.localStorage.setItem('cookies', 'no');
		// this.props.agreeCookies('no');
	}

	render() {
		//1. Test for empty localstorage
		let cookiesInit = localStorage.getItem('cookies');
		if (cookiesInit == null) {
			localStorage.setItem('cookies', 'unknown');
		}

		//2. render based on cookie selection
		let cookiesAllowed = localStorage.getItem('cookies');

		if (cookiesAllowed === 'unknown') {
			return (
				<>
					<CookiesCon>
						<ul>
							<li className="full">
								Note: This site uses cookies to personalize and enhance your
								experience
							</li>
							<li className="mobile">We use cookies </li>
							<li className="more" onClick={this.agreeToCookies}>
								Yes, I'm okay with that
							</li>
							<li className="more-mobile" onClick={this.agreeToCookies}>
								Yes
							</li>
							<li className="more" onClick={this.showModal}>
								Tell me more
							</li>
							<li className="more-mobile" onClick={this.showModal}>
								More
							</li>
						</ul>
					</CookiesCon>
					<MoreCon id="more" className="moreHide">
						<p>
							<a href="http://www.whatarecookies.com/">Cookies</a> are small
							pieces of data that websites use to personlize user experiences,
							and other things.
							<br />
							Here, we use{' '}
							<a href="https://www.techopedia.com/definition/27674/html5-local-storage">
								local storage
							</a>{' '}
							to keep track of a few things for you:
							<br />
							<ul>
								<li>Whether you prefer celcius or farenheit</li>

								<li>Your saved locatons for weather data</li>
								<li>Your favourite photos</li>
								<li className="button" onClick={this.agreeToCookies}>
									Yes, that's fine
								</li>
								<li className="button" onClick={this.refuseCookies}>
									No, I refuse
								</li>
							</ul>
						</p>
					</MoreCon>
				</>
			);
		} else {
			return <div></div>;
		}
	}
}

// const mapStateToProps = (state) => {
// 	return { cookies: state.cookies };
// };

export default Cookies;
// export default connect(mapStateToProps, { agreeCookies })(Cookies);
