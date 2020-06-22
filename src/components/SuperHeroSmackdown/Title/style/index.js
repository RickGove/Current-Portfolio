import styled from 'styled-components';

export const TitleDiv = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
	font-family: 'Bangers', cursive;
	text-align: center;
	color: #ff6c23;
	letter-spacing: 2px;
	font-size: 1.5rem;
	align-self: bottom;

	h1 {
		height: 100%;
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
