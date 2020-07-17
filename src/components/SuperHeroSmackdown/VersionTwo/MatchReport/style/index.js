import styled from 'styled-components';

export const MatchReportDiv = styled.div`
	display: flex;
	background: rgba(0, 0, 0, 0.7);
	height: 100%;
	width: 100%;

	.match-report__inner__div {
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		color: black;
		margin: auto;
		width: 80%;
		border-radius: 2rem;
		box-shadow: 22px 22px 60px white;
	}

	.match-report__logo__img {
		width: 100%;
		padding: 1rem;
	}

	.macth-report__hero__img {
		border-radius: 2rem;
		width: 44%;
	}

	.match-report__p {
		padding: 1rem 1rem 0 1rem;
	}

	.match-report__play__again {
		height: 3rem;
		width: 80%;
		cursor: pointer;
		animation: pulsate 4s infinite;
		visibility: hidden;
		padding-bottom: 0.2rem;

		&:hover {
			opacity: 0.5;
		}
	}

	@keyframes pulsate {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`;
