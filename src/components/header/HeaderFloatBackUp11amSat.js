import React from 'react';
import {
	HeadFloatCon,
	LeftCon,
	HeadImg,
	SideCurLink,
	HeadLinkSide,
	MenuImg,
	HeadMenuLi,
	CurLink,
} from './HeadStyle';
import icon from '../../img/icon.png';
import { RightMenu } from './RightMenu';
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

	componentDidUpdate() {
		// console.log(this.props.active);
		// this.setState({ active: this.props.active });
	}

	goToTop() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}

	renderSections() {
		return sections.map((section) => {
			let sect = section.toString();
			// if props say it's a default
			if (this.props.active === section) {
				return (
					<CurLink onClick={() => this.scrollToSection(sect)}>
						{section}
					</CurLink>
				);
			} else {
				return (
					<div key={section}>
						<HeadMenuLi onClick={() => this.scrollToSection(sect)}>
							{section}
						</HeadMenuLi>
						<br />
					</div>
				);
			}
			// else statement here Deafult way{
		});
	}

	renderSectionsAfterClick(act) {
		return sections.map((section) => {
			// if props say it's a default

			///////////
			// testing
			//
			//
			/////////

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
				<LeftCon>
					<HeadImg src={icon} onClick={this.goToTop} />
				</LeftCon>
				<RightMenu id="grid">
					<img
						src={menu}
						onMouseEnter={() => {
							this.setState({ rightMenuShow: 'grid' });
						}}
					/>
					<br />
					<div className="MenuBg" vis={this.state.rightMenuShow}>
						<HeadLinkSide href="#">TEST</HeadLinkSide>
						<HeadLinkSide href="#">Hello</HeadLinkSide>
						<SideCurLink href="#">Tools</SideCurLink>
						<HeadLinkSide href="#">Projects</HeadLinkSide>
					</div>
				</RightMenu>
			</HeadFloatCon>
		);
	}
}

export default Header;
