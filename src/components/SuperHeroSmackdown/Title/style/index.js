import styled from 'styled-components';

const mobile = `@media (max-width: 850px)`;
const mobileTitle = `@media (max-width: 850px)`;

export const TitleDiv = styled.div`
	/* @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap'); */
	@import url('../../../font/Bangers-Regular.ttf');
	font-family: 'Bangers', cursive;
	text-align: center;
	color: red;
	letter-spacing: 2px;
	font-size: 1.5rem;
	align-self: bottom;

	${mobile} {
		font-size: 0.9rem;
	}

	h1 {
		height: 100%;
		font-size: 7rem;
		text-shadow: 7px 7px blue;
		${mobileTitle} {
			font-size: 4rem;
		}
	}

	div {
		transform: scale(0);
		transition: 2s;
	}

	.grow {
		transform: scale(1);
		transition: 2s;
	}
`;
