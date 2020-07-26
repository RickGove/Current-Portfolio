import styled from 'styled-components';

// let border = `solid`;
let border = `none`;

export const CookiesCon = styled.div`
	z-index: 100000;
	height: 100%;
	width: 100%;
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

	* {
		box-sizing: border-box;
		@import url('../../font/BioRhyme-ExtraBold.ttf');
		font-family: 'BioRhyme', serif;
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
