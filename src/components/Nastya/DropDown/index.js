import React from 'react';

import { DDownDiv } from './DropDownStyle';
import { sections } from '../data/Data';

import menu from '../../img/logo_menu.png';

class DropDown extends React.Component {
	renderSections() {
		return sections.map((section) => {
			let sect = section.toString();
			// if props say it's a default
			if (this.props.active === section) {
				return (
					<a className="active" onClick={() => this.scrollToSection(sect)}>
						{section}
					</a>
				);
			} else {
				return <a onClick={() => this.scrollToSection(sect)}>{section}</a>;
			}
			// else statement here Deafult way{
		});
	}

	render() {
		return (
			<DDownDiv>
				<p className></p>
				<div className="dropdown">
					<img src={menu} className="dropimg" />
					<div className="dropdown-content">{this.renderSections()}</div>
				</div>
			</DDownDiv>
		);
	}
}

export default DropDown;
