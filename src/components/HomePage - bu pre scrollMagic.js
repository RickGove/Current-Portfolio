import React from 'react';

import { GlobalStyle } from './GlobalStyle';
import HeaderDeterminer from './header/HeaderDeterminer';
import ScrollToTop from './scrollToTop';
import About from './about';
import Contact from './contact';
import Tools from './tools';
import Projects from './projects/Projects';
import Footer from './footer';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<HeaderDeterminer />
				<ScrollToTop />
				<About />
				<Contact />
				<Tools id="Tools" />
				<Projects />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
