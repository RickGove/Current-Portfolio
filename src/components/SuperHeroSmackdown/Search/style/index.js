import styled from 'styled-components';

import vs from '../../img/vs.png';

const widthV = 11;
const widthVMobile = 7;
const width = `${widthV}rem`;
const widthMobile = `${widthVMobile}rem`;

const heroHeight = `3rem`;
const heroHeightMobile = `1.7rem`;

const imageTrans = `800ms`;

const mobile = '@media (max-width: 700px)';

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
	.winner {
		text-align: center;
		color: white;
		transform: scale(1.2);
		transition: 100ms;
		opacity: 0;
	}

	.loser {
		text-align: center;
		color: black;
		transform: scale(0.8);
		transition: 500ms;
		opacity: 0;
	}
	.search-a {
		position: relative;
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
		position: relative;
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
			width: 250px;
		}
	}

	.battlingA {
		transform: translateX(1rem) scale(1.6);
		transition: 1s;

		${mobile} {
			transform: translateY(3rem) scale(1.3);
		}
	}

	.battlingB {
		transform: translateX(-1rem) scale(1.6);
		transition: 1s;

		${mobile} {
			transform: translateY(-3rem) scale(1.3);
		}
	}

	.fade {
		opacity: 0.2;
		transition: 1s;
	}

	.stats-hidden {
		position: absolute;
		top: 2.6rem;
		left: 4.2rem;
		display: none;
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
			border: 2px solid red;
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
		background: black;
		color: red;
		font-size: 1.4rem;
		justify-self: center;
		/* align-self: */

		${mobile} {
			display: inline-block;
			font-size: 0.8rem;
			padding: 0.2rem;
			margin: 0;
			align-self: end;
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
