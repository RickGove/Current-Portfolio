import styled from 'styled-components';

import wp from '../../img/wpBW.jpg';

const transition = `50ms`;

export const IntroDiv = styled.div`
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
		max-height: vh100;
		width: auto;
		max-width: 100vw;
		max-height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.image {
		height: 100%;
		width: auto;
		max-width: 100vw;
		transform: scale(1);
		transition: ${transition};
	}

	.image-fade {
		/* opacity: 0.9; */
		transition: ${transition};
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
		height: 100%;
		width: auto;
		max-width: 100vw;
		transform: scale(1);
		transition: ${transition};
	}

	#image-div-search {
		background: white;
		margin: auto;
		height: 100%;
		max-height: vh100;
		width: auto;
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
`;
