import styled from 'styled-components';

const landscape = `@media only screen and (max-height : 600px)`;

export const BattleDiv = styled.div`
	z-index: 500;
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	align-items: center;

	${landscape} {
		flex-direction: row;
	}

	.fighter {
		overflow: hidden;
		color: black;
		margin-bottom: 0.2rem;
		display: flex;
		border-radius: 5rem;
		flex-direction: column;
		background: cadetblue;
		height: 49%;
		width: 80%;
		box-shadow: 0 15px grey;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		animation: SMACK 2s;

		${landscape} {
			height: 92%;
			border: 2px solid black;
		}
	}

	h1 {
		font-size: 2.3rem;
		transition: 200ms;

		${landscape} {
			font-size: 1.8rem;
		}
	}

	img {
		vertical-align: middle;
		height: 4rem;
		width: 4rem;
		border-radius: 2rem;
	}

	.stats-hidden {
		font: inherit;
		text-align: left;
		top: 2rem;
		left: 2.5rem;
		visibility: hidden;
	}

	.grid-icons {
		display: grid;
		grid-template-columns: repeat(6, 16%);
	}

	.hidden-icon {
		transform: scale(10);
		opacity: 0;
		transition: 1000ms;
	}

	.shown-icon {
		transform: scale(1);
		font-size: 1rem;
		opacity: 1;
		transition: 1000ms;
	}

	.loser {
		font: inherit;
		margin: 0;
		padding: 0;
		transform: scale(5000);
		font-size: 1.6rem;
		transition: 2000ms;
		opacity: 0;
	}

	.winner {
		font: inherit;
		margin: 0;
		padding: 0;
		font-size: 1.7rem;
		transition: 2000ms;
		transform: scale(5000);
		opacity: 0;
	}

	@keyframes SMACK {
		0% {
			transform: scale(0);
		}
		90% {
			transform: scale(1.3);
		}
		100% {
			transform: scale(1);
		}
	}
`;
