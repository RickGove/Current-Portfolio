import styled from 'styled-components';

import vs from '../../img/vs.jpg';

const widthV = 11;
const width = `${widthV}rem`;
const widthUlV = widthV - 2;
const widthUl = `${widthUlV}rem`;

const heroHeight = `3rem`;

const imageTrans = `800ms`;

const border = `solid`;
// const border=`none`;

export const SearchDiv = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Basic&display=swap');

	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-areas: 'search-a search-b';
	height: 100%;
	padding-top: 1rem;
	text-align: center;
	font-family: 'Gentium Book Basic', serif;
	background: url(${vs});
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.5);

	.search-a {
		grid-area: search-a;
		/* background: pink; */
		width: 100%;
		overflow: hidden;
	}

	.search-b {
		grid-area: search-b;
		/* background: blue; */
	}

	#searchA {
		/* input */
		width: ${width};
		padding: 0.5rem;
		border-radius: 8px 8px 8px 8px;

		&:focus {
			border-radius: 8px 8px 0 0;
			box-shadow: 0 0 0 2pt rgba(255, 108, 35, 0.7);
		}
	}

	#results-div {
		
		box-shadow: 0 0 0 2pt rgba(255, 108, 35, 0.7);
	}

	.results {
		/* div */
		border-radius: 0 0 8px 8px;
		height: 0px;
		display: none;
		width: 0px;
		background-color: grey;

	}

	.results-shown {
		height: auto;
		margin: auto;
		width: ${width};
		display: block;
		/* display: block; */

	}

	#myUL {
		/* ul */
		/* margin: 2px; */
		/* width: ${widthUl}; */
		width: 100%;
		background-color: grey;

	}

	

	

	.heroB {
		border: 3px solid orange;
	}

	#heroA {
		border: 2px solid red;
	}
`;

export const Button = styled.button`
	vertical-align: middle;
	width: 100%;
	font: inherit;
	text-align: left;
	padding: 1rem;
	cursor: pointer;
	transform: scale(1);
	transition: 300ms;
	line-height: 50px;
	padding: 0.1rem;
	/* font-size: 1.5rem; */
	font-size: ${(props) => (props.length > 10 ? '1rem' : '1.5rem')}
	text-align: center;
	z-index: 10;

	&:hover {
		transform: scale(1.2);
		transition: 300ms;
	}

	&:hover .hero-img {
		position: fixed;
		transition: ${imageTrans};
		transform: ${(props) =>
			props.float === 'right'
				? 'scale(2) translateX(6rem)'
				: 'scale(2) translateX(-3rem)'};
	}

	.hero-img {
		z-index: 10000;
		height: ${heroHeight};
		width: ${heroHeight};
		border-radius: 2rem;
		float: ${(props) => props.float};
		vertical-align: middle;
		transition: ${imageTrans};
		transform: scale(1) translateX(0);
	}
`;

Button.defaultProps = { float: 'right' };
