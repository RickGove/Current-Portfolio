import styled from 'styled-components';

const landscape = `@media (max-height: 575px)`;

export const MatchReportDiv = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	display: flex;
	background: rgba(0, 0, 0, 0.7);
	height: 100%;
	width: 100%;
	z-index: 500;

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
		animation: pulsate 4s infinite;
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
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
`;
