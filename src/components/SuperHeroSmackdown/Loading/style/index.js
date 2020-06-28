import styled from 'styled-components';

export const SpinningLoader = styled.div`
	height: 80%;
	width: 80%;

	@keyframes DANCE {
		0% {
			transform: scale(1);
			transform: skew(15deg, 15deg);
		}
		10% {
			transform: skew(5deg, 20deg);
		}
		30% {
			transform: skew(25deg, 60deg);
		}
		50% {
			transform: scale(1.4);
			transform: skew(5deg, 45deg);
		}
		75% {
			transform: skew(66deg, 66deg);
		}

		100% {
			transform: scale(1);
			transform: skew(10deg, 19deg);
		}
	}

	p {
		padding-top: 5rem;
		font-size: 16;
		color: white;
		animation: DANCE 10s 0s 100;
	}
`;
