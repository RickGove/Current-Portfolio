import styled from 'styled-components';

import wp from '../../img/wpBW.jpg';

export const IntroDiv = styled.div`
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

	#outer-div {
		height: 97%;

		width: 20%;
		position: absolute;
		margin: auto;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;

		@media (max-width: 500px) {
			height: 97%;
		}
	}

	#inner-div {
	}

	img {
		height: 100%;
		/* max-width: 85vw; */
		position: absolute;
	}
`;
