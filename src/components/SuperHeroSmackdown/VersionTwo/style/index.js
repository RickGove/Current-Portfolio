import styled from 'styled-components';

import wp from '../../img/wpBW.jpg';
// import bangers from '../../../../font/Bangers-Regular.ttf';

const transition = `20ms`;
const landscape = `@media only screen and (max-height : 600px)`;

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
		height: 8rem;
		width: 100%;
		transition: 200ms;
		border-radius: 2rem;
	}

	.logo-on-battle {
		height: 6rem;
		align-self: center;
		width: 80%;
		transition: 200ms;
		border-radius: 2rem;
		margin-left: auto;
		margin-right: auto;
	}

	.begin-button {
		top: 7rem;
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
		margin-bottom: 1rem;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;

		${landscape} {
			flex-direction: row;
		}
	}

	.vs-img {
		position: relative;
		width: 7rem;
		height: 5rem;

		${landscape} {
			width: 5rem;
			height: 6rem;
		}
	}

	.char-card {
		width: 90%;
		display: flex;
		justify-content: center;
	}

	#image-div-search {
		align-items: center;
		width: 485px;
		background: white;
		border-radius: 2rem;
		box-shadow: 22px 22px 60px grey;
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

	.transparent {
		align-items: center;
		width: 485px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: auto;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		align-items: center;
		background: transparent;
		box-shadow: unset;
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
