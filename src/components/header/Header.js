import React from 'react';

import { HeadCon } from './HeadStyle';
import { Hamburger } from './HeadStyle';
import { DDownDivAnchored } from '../DropDown/DropDownStyle';

import { sections } from '../data/Data';

import menu from '../../img/logo_menu.png';
import logo from '../../img/logo.png';
import weather from '../../img/weatherIconNew.png';
import superHSD from '../../img/superIcon.png';
import navigate from '../../img/navigate.png';

function Header() {
	function renderSections() {
		return sections.map((section, i) => {
			let sect = section.toString();
			if (i !== 0) {
				return (
					<p className="head-link" onClick={() => scrollToSection(sect)}>
						{section}
					</p>
				);
			} else {
				return (
					<p className="head-link" key={section}>
						{section}
					</p>
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

	function renderSectionsDrop() {
		return sections.map(
			(section) => {
				let sect = section.toString();
				return (
					<a key={section} onClick={() => scrollToSection(sect)}>
						{section}
					</a>
				);
			}
			// else statement here Deafult way{
		);
	}

	return (
		<HeadCon id="HeadCon">
			<img alt="logo" className="logo" src={logo} />
			{renderSections()}
			<DDownDivAnchored>
				<div className="dropdown">
					<img alt="menu" src={menu} className="dropimg" />
					<div className="dropdown-content">{renderSectionsDrop()}</div>
				</div>
			</DDownDivAnchored>
			<a className="first-right project-icon-link" href="/#/weather">
				<img alt="Gove Weather" className="project__icon" src={weather} />
			</a>
			<a className="last-right project-icon-link" href="/#/SuperHeroSmackDown">
				<img
					alt="Super Hero Smack Down"
					className="project__icon"
					src={superHSD}
				/>
			</a>
		</HeadCon>
	);
}

export default Header;
