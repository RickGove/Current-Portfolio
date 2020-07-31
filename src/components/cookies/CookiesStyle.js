import styled from 'styled-components';

export const CookiesCon = styled.div`
	z-index: 100000;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.5);
	overflow: hidden;
	position: absolute;
	position: -webkit-sticky;
	top: 0;
	overflow: hidden;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	overflow-y: hidden;

	@media (max-width: 910px) {
		width: 100%;
	}

	* {
		box-sizing: border-box;
		@import url('../../font/BioRhyme-ExtraBold.ttf');
		font-family: 'BioRhyme', serif;
	}

	h1 {
		@media (max-width: 910px) {
			font-size: ;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 50%;
		height: 50%;
		background: white;
		padding: 2rem;
		border: 3px solid chartreuse;
		box-shadow: 11px -10px 25px chartreuse;
	}

	button {
		padding: 0.5rem;
		border-radius: 1rem;
		cursor: pointer;

		&:hover {
			opacity: 0.6;
		}
	}
`;
