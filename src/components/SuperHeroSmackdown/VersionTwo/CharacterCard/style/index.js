import styled from 'styled-components';

export const CharCard = styled.div`
	border: 3px solid white;
	background: black;
	color: white;
	box-shadow: 4px 6px grey;
	padding: 1rem;
	border-radius: 2rem;
	height: 100%;
	display: flex;
	width: 90%;

	h1 {
		margin: auto;
		height: 3rem;
	}

	h2 {
		position: relative;
		left: 2rem;
		color: red;
		cursor: pointer;
		font-family: initial;

		&:hover {
			opacity: 0.6;
		}
	}

	div {
		display: flex;
		width: 90%;
	}

	img {
		margin: auto;
		height: 6rem;
		width: 6rem;
		border-radius: 10rem;
	}
`;
