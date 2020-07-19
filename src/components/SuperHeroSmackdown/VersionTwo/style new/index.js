import styled from 'styled-components';

import wp from '../../img/wpBW.jpg';
// import bangers from '../../../../font/Bangers-Regular.ttf';

const transition = `20ms`;

export const IntroDiv = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	background: url(${wp});
	background-size: cover;
	padding: 0;
	overflow: hidden;
	display: flex;
	height: 100vh;
	width: 100vw;
	margin: 0;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;

	#image-div {
		background: white;
		margin: auto;
		height: 100%;
		/* width: auto; */
		max-width: 100vw;
		max-height: 100vh;
	}

	.image {
		height: 100%;
		width: auto;
		max-width: 100vw;
		/* transform: scale(0); */
		transition: ${transition};
	}

	.image-fade {
		/* transform: scale(1.1); */
		transition: ${transition};
	}

	@keyframes loadin {
		0% {
			transform: scale(0.8);
		}
		100% {
			transform: scale(1);
		}
	}

	.image-display {
	}

	.show-search {
		display: unset;
	}

	.hidden {
		display: none;
	}

	.skip-button {
		position: absolute;
		top: 0;
		left: 45%;
		border: none;
		background: none;
		color: white;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}

	.image-on-search {
		position: absolute;
		top: 0;
		z-index: 0;
		height: 100%;
		max-width: 100vw;
		transform: scale(1);
		transition: ${transition};
	}

	.begin-button {
		position: relative;
		z-index: 1;
		top: 4rem;
		margin: auto;
		font: inherit;
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
	}

	.card-container {
		z-index: 1;
		margin-bottom: 2rem;
		height: 63%;
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
	}

	.vs-img {
		position: relative;
		z-index: 1;
		width: 7rem;
		height: 5rem;
	}

	.char-card {
		position: relative;
		z-index: 1;
		width: 90%;
		display: flex;
		justify-content: center;
	}

	#image-div-search {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: white;
		/* margin: auto; */
		height: 100%;
		max-height: vh100;
		max-width: 100vw;
		max-height: 100vh;
		background-size: contain;
		background-repeat: no-repeat;
	}

	.wrapper-div {
		position: aboslute;
		height: 100vh;
		top: 0;
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
			transform: scale(1.4) translate(-5px, -7px) rotate(15deg);
		}
		90% {
			transform: translate(-2.5px, -3.5px) rotate(8deg);
		}
		100% {
			transform: scale(1) translate(0) rotate(0deg);
		}
	}
`;
