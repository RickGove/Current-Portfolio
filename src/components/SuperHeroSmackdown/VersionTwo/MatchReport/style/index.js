import styled from 'styled-components';

const landscape = `@media (max-height: 400px)`;

export const MatchReportDiv = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	display: flex;
	height: 100%;
	width: 100%;
	z-index: 500;
	max-height: 650px;

	.match-report__inner__div {
		width: 400px;
		max-width: 93vw;
		height: 95%;
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		color: black;
		margin: auto;
		border-radius: 2rem;
		box-shadow: 6px 6px 8px grey;
	}

	h1 {
		font-size: 3rem;
	}

	.match-report__logo__img {
		margin-top: 0.5rem;
		width: 87%;
		max-width: 64vw;

		${landscape} {
			width: 38%;
		}
	}

	.macth-report__hero__img {
		border-radius: 2rem;
		width: 32%;
		animation: happydance 2s infinite;

		${landscape} {
			width: 15%;
		}
	}

	.match-report__p {
		padding: 1 rem;
		text-align: center;
		width: 80%;

		${landscape} {
			font-size: 0.7rem;
		}
	}

	.match-report__play__again {
		font: inherit;
		height: 3rem;
		width: 50%;
		cursor: pointer;
		animation: pulsate 1s infinite;
		visibility: hidden;
		padding-bottom: 0.2rem;
		background: yellow;
		border: 2px solid red;

		${landscape} {
			height: 2rem;
			width: 29%;
		}

		&:hover {
			opacity: 0.5;
		}
	}

	@keyframes pulsate {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.6);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes happydance {
		0% {
		}
		25% {
			transform: scale(0.9) rotateZ(10deg);
			transform-origin: right middle;
		}
		50% {
			transform: scale(1);
		}
		75% {
			transform: scale(0.9) rotateZ(-10deg);
			transform-origin: left middle;
		}
	}
`;
