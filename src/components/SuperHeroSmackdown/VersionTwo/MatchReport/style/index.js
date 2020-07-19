import styled from 'styled-components';

const landscape = `@media only screen and (max-height : 600px)`;

export const MatchReportDiv = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	display: flex;
	background: rgba(0, 0, 0, 0.7);
	height: 100%;
	width: 100%;
	z-index: 500;

	.match-report__inner__div {
		width: 485px;
		height: 95%;
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		background: white;
		align-items: center;
		color: black;
		margin: auto;
		border-radius: 2rem;
		box-shadow: 22px 22px 60px white;

		${landscape} {
			width: 295px;
		}
	}

	.match-report__logo__img {
		margin-top: 0.5rem;
		width: 64%;
	}

	.macth-report__hero__img {
		border-radius: 2rem;
		width: 32%;

		${landscape} {
			width: 12%;
		}
	}

	.match-report__p {
		padding: 1 rem;
		text-align: center;
		width: 50%;
	}

	.match-report__play__again {
		height: 3rem;
		width: 50%;
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
