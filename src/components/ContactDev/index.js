import React from 'react';
import { ScrollBtn, ScrollBtnDiv } from './ContactDevStyle';

import email from '../../img/logo_email.png';

class ContactDev extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href="mailto:rick.gove.developer@gmail.com">
				<ScrollBtnDiv>
					<ScrollBtn src={email} alt="rick.gove.developer@gmail.com" />
				</ScrollBtnDiv>
			</a>
		);
	}
}

export default ContactDev;
