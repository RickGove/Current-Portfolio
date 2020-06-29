import styled from 'styled-components';

const mobile = '@media (max-width: 850px)';

export const SpinningLoader = styled.div`
	height: 80%;
	width: 80%;
	padding-top: 1rem;
	text-align: center;
	margin: auto;

	${mobile} {
		padding-top: 1rem;
	}

	@keyframes SPINNER {
		0% {
			transform-origin: center;
			transform: rotate(0deg);
		}

		100% {
			transform: scale(1);
			transform: rotate(360deg);
		}
	}

	img {
		height: 5rem;
		width: 5rem;
		animation: SPINNER 1s 0s 100;
	}
`;
