import styled from 'styled-components';

import vs from '../../img/vs.png';

const widthV = 11;
const widthVMobile = 7;
const width = `${widthV}rem`;
const widthMobile = `${widthVMobile}rem`;

const widthUlV = widthV - 2;
const widthUl = `${widthUlV}rem`;
const widthUlVMobile = widthVMobile - 2;
const widthUlMobile = `${widthUlVMobile}rem`;

const heroHeight = `3rem`;
const heroHeightMobile = `1.7rem`;

const imageTrans = `800ms`;

const border = `solid`;
// const border=`none`;

const mobile = '@media (max-width: 700px)';
const huge = `@media (max-width: 1000px)`;
const mobilePort = `@media (max-width: 500px)`;

export const SearchDiv = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Basic&display=swap');

	display: grid;
	grid-template-columns: 37% auto 37%;
	grid-template-areas: 'search-a vs search-b';
	grid-gap: 1rem;
	text-align: center;
	font-family: 'Gentium Book Basic', serif;
	height: 100%;

	${mobile} {
		grid-template-rows: 37% auto 37%;
		grid-template-areas: 'search-a' 'vs' 'search-b';
		grid-template-columns: auto;
		height: 100%;
	}

	.shown {
		display: block;
	}

	.hidden {
		display: none;
	}

	#title {
		font-size: 2rem;
		${mobile} {
			font-size: 1.4rem;
		}
	}

	#vs {
		grid-area: vs;
		display: grid;
		grid-template-rows: 50% 50%;
		grid-template-areas: 'begin' 'reset';
		background: url(${vs});
		background-size: cover;
		background-repeat: no-repeat;
		overflow: visible;
		background-position: center;
		text-align: center;
		${mobile} {
			background-size: 160px;
		}
	}

	.search-a {
		grid-area: search-a;
		width: 100%;
		background-color: blue;
		border-radius: 1.5rem;
		box-shadow: 10px 10px 5px #aaaaaa;
		margin: auto;
		height: 350px;
		width: 250px;
		${mobile} {
			height: 200px;
			width: 250px;
		}
	}

	.search-b {
		border-radius: 2rem;
		grid-area: search-b;
		border-radius: 1.5rem;
		background-color: red;
		box-shadow: 10px 10px 5px #aaaaaa;
		height: 350px;
		width: 250px;
		margin: auto;
		${mobile} {
			height: 200px;
			width: 300px;
		}
	}

	@keyframes shake {
		0% {
			transform: scale(1) translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-15deg);
		}
		20% {
			transform: scale(1.1) translate(-3px, 0px) rotate(15deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: scale(1.2) translate(1px, -1px) rotate(15deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-15deg);
		}
		60% {
			transform: scale(1.3) translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-15deg);
		}
		80% {
			transform: scale(1.4) translate(-1px, -1px) rotate(15deg);
		}
		90% {
			transform: translate(1px, 2px) rotate(8deg);
		}
		100% {
			transform: scale(1.5) translate(1px, -2px) rotate(0deg);
		}
	}

	.begin-button {
		grid-area: begin;
		padding: 1rem;
		position: relative;
		top: 20%;
		font-size: 1.4rem;
		cursor: pointer;
		margin: auto;
		display: block;
		color: black;
		background: yellow;
		&:focus {
			transform: scale(1.5);
			transition: 500ms;
			border: 2px solid yellow;
			animation: shake 4s;
			animation-iteration-count: infinite;
		}

		${mobile} {
			display: block;
			top: 0%;
			/* right: 10%; */
		}
	}

	.hidden {
		display: none;
	}

	.reset-button {
		grid-area: reset;
		display: block;
		margin: auto;
		padding: 1rem;
		position: relative;
		top: 65%;
		color: red;
		font-size: 1.4rem;

		${mobile} {
			display: inline-block;

			top: 100%;
			/* left: 2%; */
			font-size: 0.8rem;
		}
	}

	.inputBar {
		/* input */
		width: ${width};
		padding: 0.5rem;
		margin-top: 0.5rem;
		border-radius: 8px 8px 8px 8px;

		&:focus {
			border-radius: 8px 8px 0 0;
			box-shadow: 0 0 0 5pt yellow;
			outline: red;
		}

		${mobile} {
			width: ${widthMobile};
		}
	}

	.fighter-a-img,
	.fighter-b-img {
		width: 75%;
		height: 75%;

		${mobile} {
			height: 75%;
			width: auto;
		}
	}

	#results-div {
		box-shadow: 0 0 0 2pt yellow;
	}

	.results {
		/* div */
		border-radius: 0 0 8px 8px;
		height: 0px;
		display: none;
		width: 0px;
		background-color: grey;
	}

	.hidden {
		display: none;
	}

	.results-shown {
		height: auto;
		margin: auto;
		width: ${width};
		display: block;
		${mobile} {
			width: ${widthMobile};
		}
	}

	#myUL {
		width: 100%;
		background-color: grey;

		${mobile} {
			width: 100%;
		}
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
	font-size: ${(props) => (props.length > 8 ? '1rem' : '1.5rem')};
	text-align: center;
	z-index: 10;

	${mobile} {
	font-size: ${(props) => (props.length > 8 ? '0.5rem' : '0.8rem')};
	line-height: 30px;
	}
	@media (hover: hover) {
		&:hover {
		transform: scale(2);
		transition: 300ms;
	}
	/* &:hover .hero-img {
		position: fixed;
		transition: ${imageTrans};
		transform: ${(props) =>
			props.float === 'right'
				? 'scale(2) translateX(6rem)'
				: 'scale(2) translateX(-3rem)'};
	} */
	}
	
	}

	.highlighted {
		transform: scale(2);
		transition: 300ms;
	}


	.hero-img {
		/* z-index: 10000; */
		height: ${heroHeight};
		width: ${heroHeight};
		border-radius: 2rem;
		float: ${(props) => props.float};
		vertical-align: middle;
		transition: ${imageTrans};
		transform: scale(1) translateX(0);

		${mobile}{
		height: ${heroHeightMobile};
		width: ${heroHeightMobile};
		

		}
	}
`;

Button.defaultProps = { float: 'right' };
