import styled from 'styled-components';

export const BattleDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	background: black;

	.fighter {
		margin-bottom: 0.2rem;
		display: flex;
		border-radius: 5rem;
		flex-direction: column;
		border: 2px solid black;
		background: whitesmoke;
		height: 50%;
		width: 100%;
		box-shadow: 0 15px grey;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		animation: SMACK 2s;
	}

	h1 {
		font-size: 2.8rem;
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
		display: none;
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
		color: black;
		font-size: 1.6rem;
		transition: 2000ms;
		opacity: 0;
	}

	.winner {
		font: inherit;
		margin: 0;
		padding: 0;
		color: black;
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
