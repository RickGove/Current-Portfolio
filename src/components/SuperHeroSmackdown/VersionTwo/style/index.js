import styled from 'styled-components';

import wp from '../../img/wpBW.jpg';
// import bangers from '../../../../font/Bangers-Regular.ttf';

const narrow = `@media (max-width: 488px)`;

const transition = `20ms`;

export const IntroDiv = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
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

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.header-title {
		height: auto;
		min-height: 1.8rem;
		align-items: end;
		width: 100%;
		background: yellow;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid black;
		border-radius: 2rem 2rem 0 0;
		margin-bottom: 1px;
	}

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
		transition: ${transition};
	}

	.image-fade {
		transition: ${transition};
	}

	.show-search {
		display: unset;
	}

	.hidden {
		display: none;
	}

	.skip-button {
		font-family: 'Bangers', sans;
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

	.card-container {
		margin: auto;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		${narrow} {
			flex-direction: column;
			margin: unset;
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
		height: 54vh;
		width: 27vw;
		max-width: 240px;
		min-width: 135px;
		min-height: 230px;
		max-height: 360px;
		display: flex;
		justify-content: center;

		@media (max-height: 600px) {
			max-width: 180px;
		}

		${narrow} {
			max-width: unset;
			max-height: unset;
			height: 34vh;
			width: 45vw;
			margin: unset;
		}
	}

	.div-back-card-title {
		display: flex;
		flex-direction: row;
		height: 3rem;
		border: 0;
	}

	.div-back-card-image {
		margin: 0;
		padding: 0;
		border: 0;
		width: 4rem;
	}

	.img-back-card {
		margin: auto;
	}

	.h3-back-card {
		border-bottom: 2px solid black;
		width: 68%;
	}

	.container-begin-button {
		position: absolute;
		top: 31%;
		left: 50;
		display: flex;
		justify-content: center;
		align-items: center;
		${narrow} {
			top: 50%;
		}
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
		height: 97vh;
		width: 76vw;
		max-height: 600px;
		align-items: center;
		background: radial-gradient(lightgoldenrodyellow, lightgray, gray, black);
		border-radius: 2rem;
		box-shadow: 16px 16px 7px grey;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin: auto;
		background-size: cover;
		background-repeat: no-repeat;

		${narrow} {
			max-height: unset;
			width: 100vw;
			height: 100vh;
		}
	}

	.vs-h1 {
		margin: 0.7rem;
		transform: rotateZ(-15deg);
		background: black;
		color: yellow;
		height: 2.5rem;
		width: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes shake {
		0% {
			transform: scale(1) translate(1px, 1px) rotate(0deg);
		}
		10% {
			transform: translate(-1px, -2px) rotate(-15deg);
		}
		20% {
			transform: scale(0.9) translate(-3px, 0px) rotate(15deg);
		}
		30% {
			transform: translate(3px, 2px) rotate(0deg);
		}
		40% {
			transform: scale(0.8) translate(1px, -1px) rotate(15deg);
		}
		50% {
			transform: translate(-1px, 2px) rotate(-15deg);
		}
		60% {
			transform: scale(0.7) translate(-3px, 1px) rotate(0deg);
		}
		70% {
			transform: translate(3px, 1px) rotate(-15deg);
		}
		80% {
			transform: scale(0.6) translate(-5px, -7px) rotate(15deg);
		}
		90% {
			transform: translate(-2.5px, -3.5px) rotate(8deg);
		}
		100% {
			transform: scale(1) translate(0) rotate(0deg);
		}
	}

	@keyframes loadin {
		0% {
			transform: scale(0.8);
		}
		100% {
			transform: scale(1);
		}
	}
`;
