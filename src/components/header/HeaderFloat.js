import React from 'react';
import { HeadFloatCon, HeadImg, HeadLinkSide, CurLink } from './HeadStyle';
import icon from '../../img/icon.png';
import menu from '../../img/logo_menu.png';
import { sections } from '../data/Data';
import { DDownDiv } from '../DropDown/DropDownStyle';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { rightMenuShow: 'grid' }; // 0 off 1 on
	}

	componentDidMount() {
		this.setState({ active: this.props.active });
	}

	goToTop() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}

	renderSections() {
		return sections.map((section) => {
			let sect = section.toString();
			// if props say it's active
			if (this.props.active === section) {
				return (
					<p
						key={section}
						className="active"
						onClick={() => this.scrollToSection(sect)}>
						{section}
					</p>
				);
			} else {
				return (
					<p key={section} onClick={() => this.scrollToSection(sect)}>
						{section}
					</p>
				);
			}
			// else statement here Deafult way{
		});
	}

	renderSectionsAfterClick(act) {
		return sections.map((section) => {
			// if props say it's a default

			if (act === section) {
				return <CurLink>{section} </CurLink>;
			} else {
				let sect = section.toString();
				return (
					<div key={section}>
						<HeadLinkSide onClick={() => this.scrollToSection(sect)}>
							{section}
						</HeadLinkSide>
						<br />
					</div>
				);
			}
			// else statement here Deafult way{
		});
	}

	scrollToSection = (s) => {
		if (s === 'About') {
			window.scrollTo({ top: 200, behavior: 'smooth' });
		} else {
			let elm = document.getElementById(s);
			elm.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
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
			<HeadFloatCon>
				<HeadImg id="Img" src={icon} onClick={this.goToTop} />
				<p>{this.props.active}</p>
				<DDownDiv>
					<div className="dropdown">
						<img alt="menu" src={menu} className="dropimg" />
						<div className="dropdown-content">{this.renderSections()}</div>
					</div>
				</DDownDiv>
			</HeadFloatCon>
		);
	}
}

export default Header;
