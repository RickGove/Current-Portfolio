import React from 'react';

import { GlobalStyle } from '../GlobalStyle';
import ScrollToTop from '../scrollToTop';

class Weather extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<div>Weather goes here</div>
				<ScrollToTop />
			</>
		);
	}
}

export default Weather;
