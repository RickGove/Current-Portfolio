import React from 'react';

import { ContactCon, ContactDiv, ContactA, EmailImg } from './ContactStyle';
import { ShowH1 } from '../about/AboutStyle';
import telegram from '../img/logo_telegram.png';
import linked from '../img/logo_linked.png';
import facebook from '../img/logo_facebook.png';
import twitter from '../img/logo_twitter.png';

class Contact extends React.Component {
	componentDidMount() {
		window.addEventListener('scroll', this.checkIfViewed);
	}

	componentDidUpdate() {
		this.checkIfViewed();
	}

	checkIfViewed() {
		// Get the current component

		let comp = document.getElementById('Contact');
		if (comp !== null) {
			// Get it's position in the viewport
			let bounding = comp.getBoundingClientRect();

			if (bounding.top <= 0 && bounding.top >= ~bounding.height) {
				// console.log('In the viewport');
			} else {
				// console.log('Not in the viewport');
			}
		}
	}
	render() {
		return (
			<ContactCon id="Contact">
				<ContactDiv>
					<ShowH1 col="black">Read Nastya's Blog and Contact Her</ShowH1>
					<br />
					<ContactA href="https://telegram.com">
						<EmailImg src={telegram} />
					</ContactA>
					<ContactA href="https://www.linkedin.com/in/anastasiya-karatkevich-b3b76b146/">
						<EmailImg src={linked} />
					</ContactA>
					<ContactA href="#">
						<EmailImg src={facebook} />
					</ContactA>
					<ContactA href="#">
						<EmailImg src={twitter} />
					</ContactA>
				</ContactDiv>
			</ContactCon>
		);
	}
}

export default Contact;
