import React from 'react';

import { HeadCon, Hamburger } from './HeadStyle';
import { sections } from '../data/Data';
import logo from '../../img/logo.png';
import weather from '../../img/weatherIconNew.png';
import navigate from '../../img/navigate.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { active: '' };
	}

	renderSections() {
		return sections.map((section, i) => {
			let sect = section.toString();
			if (i !== 0) {
				return (
					<li key={section}>
						<a className="HeadLink" onClick={() => this.scrollToSection(sect)}>
							{section}
						</a>
					</li>
				);
			} else {
				return (
					<li key={section}>
						<a className="HeadLink" key={section}>
							{section}
						</a>
					</li>
				);
			}
		});
	}

	scrollToSection = (s) => {
		let elm = document.getElementById(s);
		elm.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
		setTimeout(() => {
			if (s === ' About') {
				window.scrollBy(0, 500);
			} else {
				window.scrollBy(0, 5);
			}
		}, 1000);
	};

	render() {
		return (
			<HeadCon id="HeadCon">
				<nav className="HeadNav">
					<ul>
						<li key="logo">
							<img alt="logo" className="logo" src={logo} />
						</li>
						{this.renderSections()}
						<li key="weather" className="project">
							<a className="project" href="/weather">
								<img
									alt="Gove Weather"
									className="project__icon"
									src={weather}
								/>
							</a>
						</li>
					</ul>
					<Hamburger>
						<div key="hamburger">
							<div className="dropdown">
								<img alt="menu" src={navigate} className="dropimg" />
								<div className="dropdown-content">{this.renderSections()}</div>
							</div>
						</div>
					</Hamburger>
				</nav>
			</HeadCon>
		);
	}
}

export default Header;
