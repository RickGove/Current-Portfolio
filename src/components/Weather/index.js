import React from 'react';

import { GlobalStyle } from '../GlobalStyle';
import ScrollToTop from '../scrollToTop/';
import HeaderDeterminerW from './HeaderW/';
import Title from './Title/';
import Hourly from './Hourly';
import Daily from './Daily';
import Footer from '../footer';
import Images from './Images';

class Weather extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<HeaderDeterminerW />
				<Title />
				<Hourly />
				<Images />
				<Daily />
				<Footer />
				<ScrollToTop />
			</>
		);
	}
}

export default Weather;
