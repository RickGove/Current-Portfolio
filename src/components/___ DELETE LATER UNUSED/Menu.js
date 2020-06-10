import React, { Component } from 'react';
import styled from 'styled-components';

import MenuIconDynamic from './MenuIconDynamic';

const StyledUl = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
	width: 80px;
`;

const StyledLi = styled.li`
	float: left;
`;

const Dropbtn = styled.div`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 0;
	text-decoration: none;
`;

const DropDownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
	padding: 0px;
	background-color: white;
	margin: 0px;
	display: inline-block;
	&:hover {
		background-color: white;
	}
	&:hover ${DropDownContent} {
		display: block;
	}
`;

const StyledA = styled.a`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	&:hover {
		background-color: red;
	}
`;

const SubA = styled.a`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	text-align: left;
	&:hover {
		background-color: #f1f1f1;
	}
`;

class Menu extends Component {
	handleClick = (action) => {
		if (!action) return;

		if (this.props.onClick) this.props.onClick(action);
	};

	render = () => {
		return (
			<StyledUl>
				<DropDownLi>
					<Dropbtn onClick={() => this.handleClick('DropDown')}>
						<MenuIconDynamic />
					</Dropbtn>
					<DropDownContent>
						{' '}
						<SubA onClick={() => this.handleClick('Link1')}>Link 1</SubA>
						<SubA onClick={() => this.handleClick('Link2')}>Link 2</SubA>
						<SubA onClick={() => this.handleClick('Link3')}>Link 3</SubA>
					</DropDownContent>
				</DropDownLi>
			</StyledUl>
		);
	};
}

export default Menu;
