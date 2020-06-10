import React from 'react';

import { ContactCon, ContactDiv, ContactA, EmailImg } from './ContactStyle';
import { ShowH1 } from '../about/AboutStyle';
import email from '../../img/logo_email.png';
import linked from '../../img/logo_linked.png';
// import facebook from '../../img/logo_facebook.png';
import twitter from '../../img/logo_twitter.png';

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

		// Get it's position in the viewport
		let bounding = comp.getBoundingClientRect();

		////////////////////////////////////
		//
		// TESTING
		//
		// Log the results
		// console.log(bounding);
		// console.log(~bounding.height);
		//
		///////////////////////////////////////

		if (bounding.top <= 0 && bounding.top >= ~bounding.height) {
			// console.log('In the viewport');
		} else {
			// console.log('Not in the viewport');
		}
	}
	render() {
		return (
			<ContactCon id="Contact">
				<ContactDiv>
					<ShowH1 col="white">Contact Me</ShowH1>
					<br />
					<ContactA href="mailto:rick.gove.developer@gmail.com">
						<EmailImg src={email} />
					</ContactA>
					<ContactA href="http://www.linkedin.com/in/richard-gove-developer">
						<EmailImg src={linked} />
					</ContactA>
					{/* <ContactA href="FaceBook">
						<EmailImg src={facebook} />
					</ContactA> */}
					<ContactA href="https://twitter.com/@gove_rick">
						<EmailImg src={twitter} />
					</ContactA>
				</ContactDiv>
			</ContactCon>
		);
	}
}

export default Contact;
