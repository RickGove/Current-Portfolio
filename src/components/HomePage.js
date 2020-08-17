import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import HeaderDeterminer from './header/HeaderDeterminer';
import ScrollToTop from './scrollToTop/';
import ShowCase from './about/';
import Contact from './contact/';
import Boxes from './tools/';
import Projects from './projects/Projects';
import Footer from './footer/';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<HeaderDeterminer />
				<ScrollToTop />
				<ShowCase />
				<Contact />
				<Boxes id="Tools" />
				<Projects />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
