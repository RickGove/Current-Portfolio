import React from 'react';
import { useSelector } from 'react-redux';

import { GlobalStyle } from '../GlobalStyle';
import ScrollToTop from '../scrollToTop/';
import HeaderDeterminerW from './HeaderW/';
import Title from './Title/';
import FillScreen from './FillScreen/';
import Hourly from './Hourly';
import Daily from './Daily';
import Footer from '../footer';
import Images from './Images';
import Wallpaper from './Wallpaper';
import Cookies from '../cookies/';

function Weather() {
	const hide = useSelector((state) => state.hideOrShow);

	if (hide) {
		return (
			<React.Fragment>
				<GlobalStyle />
				<HeaderDeterminerW />
				<Wallpaper />
				<FillScreen />
				<Footer />
				<ScrollToTop />
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<GlobalStyle />
				<HeaderDeterminerW />
				<Wallpaper />
				<Title />
				<Hourly />
				<Daily />
				<Images />
				<FillScreen />
				<Footer />
				<ScrollToTop />
			</React.Fragment>
		);
	}
}

export default Weather;
