import styled from 'styled-components';

import vs from '../../img/vs.png';

const widthV = 88;
const widthVMobile = 88;
const width = `${widthV}%`;
const widthMobile = `${widthVMobile}%`;

const heroHeight = `3rem`;
const heroHeightMobile = `1.7rem`;

const imageTrans = `800ms`;

const mobile = '@media (max-width: 550px)';

export const SearchDiv = styled.div`
	display: flex;
	flex-direction: row;
	max-height: 550px;
	text-align: center;
	height: 100%;
	width: 100%;
	max-width: 100%;
	max-height: 100%; /* overflow-y: hidden; */
	${mobile} {
		flex-direction: column;
		height: 100%;
	}

	.shown {
		display: block;
	}

	.hidden {
		display: none;
	}

	.ind-stat {
		font-size: 2rem;
	}

	#title {
		font-size: 2rem;
		${mobile} {
			font-size: 1.4rem;
		}
	}

	.hero-img {
		/* z-index: 10000; */
		height: 8rem;
		width: 8rem;
		border-radius: 8rem;
		vertical-align: middle;
	}

	.grid-icons {
		display: grid;
		grid-template-columns: repeat(6, 16%);
	}

	.hidden-icon {
		transform: scale(10);
		opacity: 0;
		transition: 1500ms;
	}

	.shown-icon {
		transform: scale(1);
		font-size: 1rem;
		opacity: 1;
		transition: 1500ms;
	}

	.loser {
		transform: scale(5000);
		color: black;
		font-size: 1.6rem;
		transition: 2000ms;
		opacity: 0;

		${mobile} {
			font-size: 1.2rem;
		}
	}

	.winner {
		color: black;
		font-size: 1.7rem;
		transition: 2000ms;
		transform: scale(5000);
		opacity: 0;

		${mobile} {
			font-size: 1.3rem;
		}
	}

	.search-a,
	.search-b {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: blue;
		border-radius: 1.5rem;
		box-shadow: 10px 10px 5px #aaaaaa;
		margin: auto;
		max-height: 350px;
		height: 90%;
		width: 30%;
		${mobile} {
			height: 200px;
			width: 250px;
		}
	}

	.search-b {
		background: red;
	}

	.battlingA,
	.battlingB {
		overflow: hidden;
		transition: 1s;
	}

	.battlingA {
		transform: translateX(1rem) scale(1.2) translateY(-2rem);

		${mobile} {
			transform: translateY(3rem) scale(1.05);
		}
	}

	.battlingB {
		transform: translateX(-4rem) scale(1.2) translateY(-2rem);

		${mobile} {
			transform: translateY(-3rem) scale(1.05);
		}
	}

	.fade {
		opacity: 0.2;
		transition: 1s;
	}

	.stats-hidden {
		position: absolute;
		text-align: left;
		top: 2rem;
		left: 3.8rem;
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
		width: 25%;
		max-height: 36%;
		display: flex;
		justify-content: space-between;
		margin-top: 5rem;
		margin-bottom: 5rem;
		flex-direction: column;
		background: url(${vs});
		background-size: contain;
		background-repeat: no-repeat;
		overflow: visible;
		background-position: center;
		${mobile} {
			margin: 0;
			width: 100%;
			flex-direction: row;
			justify-content: center;
			height: 10%;
			/* background-size: ; */
		}
	}

	.begin-button {
		padding: 1rem;
		font-size: 1.4rem;
		cursor: pointer;
		display: block;
		color: black;
		background: yellow;
		transform: scale(1.5);
		transition: 500ms;
		border: 2px solid red;
		animation: shake 4s;
		animation-iteration-count: infinite;

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
		position: relative;
		top: 100%;
		left: 0;
		cursor: pointer;
		display: block;
		z-index: 50000;
		padding: 1rem;
		transition: 400ms;
		background: black;
		color: red;
		font-size: 1.4rem;

		&:hover {
			opacity: 0.8;
			transform: scale(1.2);
		}

		${mobile} {
			top: 17%;
			left: 31%;
			height: 3rem;
			padding: 0;
			width: 33%;
			background: black;
			display: inline-block;
			font-size: 1rem;
			margin: 0;
		}
	}
	.match-report {
		font-size: 1.1rem;
	}
	.inputBar {
		/* input */
		width: ${width};
		/* height: 75%; */
		padding: 0.5rem;
		margin-top: 0.5rem;
		border-radius: 8px 8px 8px 8px;
		font-size: 1.8rem;

		&:focus {
			/* border-radius: 8px 8px 0 0; */
			box-shadow: 0 0 0 5pt yellow;
			outline: red;
		}
	}

	.fighter-a-img,
	.fighter-b-img {
		/* width: 75%; */
		align-self: center;
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
		font-size: ${(props) => (props.length > 8 ? '0.9rem' : '1.1rem')};
		line-height: 30px;
	}
	@media (hover: hover) {
		&:hover {
			transform: scale(1.2);
			transition: 300ms;
		}
	}

	.hero-img {
		/* z-index: 10000; */
		align-self: center;
		height: ${heroHeight};
		width: ${heroHeight};
		border-radius: 2rem;
		float: ${(props) => props.float};
		vertical-align: middle;
		transition: ${imageTrans};
		transform: scale(1) translateX(0);

		${mobile} {
			height: ${heroHeightMobile};
			width: ${heroHeightMobile};
		}
	}

	.highlighted {
		transform: scale(2);
		transition: 300ms;
	}
`;

Button.defaultProps = { float: 'right' };

export const MatchReport = styled.div`
	text-align: center;
	width: 100%;
	height: auto;
	align-items: center;
	justify-content: center;
	display: none;

	.match-report {
		font-size: 1.6rem;

		${mobile} {
			font-size: 1rem;
		}
	}

	.match-report-main {
		background: white;
		display: flex;
		align-self: center;
		flex-direction: column;
		box-shadow: 10px 10px 10px 10px #aaaaaa;
		z-index: 500;
		padding: 1.3rem;
		height: auto;
		width: 75vw;
		height: auto;
		text-align: center;
		opacity: 1;
		transition: 2s;

		${mobile} {
			width: 90%;
			height: 600%;
		}
	}

	.match-report-hidden {
		opacity: 0;
	}

	.hero-img {
		/* z-index: 10000; */
		margin: auto;
		align-self: center;
		height: 9rem;
		width: 9rem;
		border-radius: 2rem;
		float: ${(props) => props.float};
		vertical-align: middle;
		transition: ${imageTrans};
		transform: scale(1) translateX(0);
	}

	.hidden {
		display: none;
		opacity: 0;
		transition: 2s;
	}

	.reset-from-report-btn {
		cursor: pointer;
		align-self: center;
		padding: 1rem;
		opacity: 1;

		margin: auto;
		transition: 400ms;
		background: black;
		color: red;
		font-size: 1.4rem;

		&:hover {
			opacity: 0.8;
			transform: scale(1.2);
		}

		${mobile} {
			height: 6%;
			padding: 0;
			width: 33%;
			font-size: 1rem;
			margin: 0;
		}
	}
`;
