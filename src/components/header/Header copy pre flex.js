import React from 'react';

import { HeadCon } from './HeadStyle';
// import {  Hamburger } from './HeadStyle';

import { sections } from '../data/Data';
import logo from '../../img/logo.png';
import weather from '../../img/weatherIconNew.png';
import superHSD from '../../img/superIcon.png';

function Header() {
	function renderSections() {
		return sections.map((section, i) => {
			let sect = section.toString();
			if (i !== 0) {
				return (
					<li key={section}>
						<p className="HeadLink" onClick={() => scrollToSection(sect)}>
							{section}
						</p>
					</li>
				);
			} else {
				return (
					<li key={section}>
						<p className="HeadLink" key={section}>
							{section}
						</p>
					</li>
				);
			}
		});
	}

	function scrollToSection(s) {
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
	}

	return (
		<HeadCon id="HeadCon">
			<nav className="HeadNav">
				<ul className="right-nav">
					<li key="logo">
						<img alt="logo" className="logo" src={logo} />
					</li>
					{renderSections()}
				</ul>
			</nav>
			<nav className="projects-nav">
				<ul>
					{/* <li>
						<Hamburger>
							<div key="hamburger">
								<div className="dropdown">
									<img alt="menu" src={navigate} className="dropimg" />
									<div className="dropdown-content">{renderSections()}</div>
								</div>
							</div>
						</Hamburger>
					</li> */}
					<li key="weather" className="project">
						<a className="project-icon-link" href="/#/weather">
							<img alt="Gove Weather" className="project__icon" src={weather} />
						</a>
						<li>
							<a className="project-icon-link" href="/#/SuperHeroSmackDown">
								<img
									alt="Super Hero Smack Down"
									className="project__icon"
									src={superHSD}
								/>
							</a>
						</li>
					</li>
				</ul>
			</nav>
		</HeadCon>
	);
}

export default Header;
