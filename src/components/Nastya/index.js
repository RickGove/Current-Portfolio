import React from 'react';

import { GlobalStyle } from '../GlobalStyle';
import HeaderDeterminer from './header/HeaderDeterminer';
import ScrollToTop from './scrollToTop/';
import About from './about/';
import Contact from './contact/';
import Projects from './projects/Projects';
import Footer from './footer/';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<HeaderDeterminer />
				<ScrollToTop />
				<About />
				<Contact />
				<Projects />
				<Footer />
			</>
		);
	}
}

export default App;
