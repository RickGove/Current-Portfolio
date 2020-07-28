import styled from 'styled-components';

export const GoHomeDiv = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 5000;
	height: 3.2rem;
	width: 3.2rem;
	max-height: 3.2rem;
	max-width: 3.2rem;
	* {
		transition: all 300ms;
		max-height: 3.2rem;
		max-width: 3.2rem;
	}

	div {
		max-height: 3.2rem;
		max-width: 3.2rem;
	}
	a {
		width: 3.5rem;
		max-height: 3.2rem;
		max-width: 3.2rem;
	}

	img {
		opacity: 0.8;
		height: 3.2rem;
		width: 3.2rem;
		max-height: 3.2rem;
		max-width: 3.2rem;

		&:hover {
			max-height: 3.2rem;
			max-width: 3.2rem;
			opacity: 0.8;
			transform: scale(1.2) translate(-9px, 6px);
		}
	}
`;
