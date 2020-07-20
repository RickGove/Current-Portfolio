import styled from 'styled-components';

import wp from '../../img/wpBW.jpg';
// import bangers from '../../../../font/Bangers-Regular.ttf';

const transition = `20ms`;
const landscape = `@media all and (orientation:landscape)`;

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

	.logo-on-search {
		@import url('../../../../font');
		font-family: 'Futura LT', 'Bangers', sans;
		height: 2rem;
		width: 100%;
		transition: 200ms;
		border-radius: 2rem 2rem 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.3rem;
		background: yellow;
	}

	/* .logo-on-battle {
		height: 6rem;
		align-self: center;
		width: 80%;
		transition: 200ms;
		border-radius: 2rem 2rem 0 0;
		margin-left: auto;
		margin-right: auto;
	} */

	.card-container {
		padding-top: 2rem;
		height: 222%;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-evenly;

		@media (max-height: 430px) {
			padding-top: 0;
		}
	}

	.vs-img {
		position: relative;
		width: 7rem;
		height: 5rem;

		@media (max-height: 430px) {
			width: 4rem;
			height: 2.5rem;
		}
	}

	.char-card {
		width: 90%;
		display: flex;
		justify-content: center;

		${landscape} {
			height: 90px;
		}
	}

	.container-begin-button {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.begin-button {
		height: 43px;
		width: 129px;
		font: inherit;
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

	#main-app-div {
		align-items: center;
		width: 485px;
		background: white;
		border-radius: 2rem;
		box-shadow: 16px 16px 7px grey;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: auto;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
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
