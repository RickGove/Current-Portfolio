import React from 'react';
import Header from './Header';
import HeaderFloat from './HeaderFloat';
import { sections } from '../data/Data';

class HeaderDeterminer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { anchor: 0, active: '' };
	}

	componentDidMount() {
		window.addEventListener('scroll', this.listenScroll);
	}

	listenScroll = () => {
		this.chooseHeader();
		this.findActiveSection();
	};

	findActiveSection = () => {
		// console.log(sections);
		let activeSection = '';
		sections.map((sec) => {
			// Get the current component
			let comp = document.getElementById(sec);

			// Get it's position in the viewport
			let bounding = comp.getBoundingClientRect();

			////////////////////////////////////
			//
			// TESTING
			//
			// console.log(` ${sec} ${bounding.top}`);
			// Log the results
			// console.log(comp);
			// console.log(bounding);
			// if (sec === 'Tools') {
			// console.log(comp);
			// console.log(bounding);
			// }
			//
			// console.log(~bounding.height);
			//
			///////////////////////////////////////
			//
			// doesn't work on scroll...
			// if (bounding.top <= 0 && bounding.top >= ~bounding.height) {
			//
			if (bounding.top < 0 && bounding.top >= ~bounding.height) {
				//////////////////////////////////
				// console.log(`${sec} In the viewport`);
				// console.log(bounding);
				////////////////////
				activeSection = sec;
			}
			return activeSection;
		});
		if (this.state.active !== activeSection) {
			this.setState({ active: activeSection });
		}
		///////////////////////////
		// console.log(this.state);
		////////////////////////
	};

	chooseHeader = () => {
		let scroll = document.body.scrollTop || document.documentElement.scrollTop;

		////// TESTING /////
		// console.log(scroll);
		///// end TEST /////

		if (scroll >= 150) {
			this.setState({ anchor: 1 });
		} else {
			this.setState({ anchor: 0 });
		}
	};

	render() {
		if (this.state.anchor === 0) {
			return <Header active={this.state.active} />;
		} else {
			return <HeaderFloat active={this.state.active} />;
		}
	}
}

export default HeaderDeterminer;
