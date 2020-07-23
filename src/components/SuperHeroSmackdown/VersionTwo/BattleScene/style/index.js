import styled from 'styled-components';

export const BattleDiv = styled.div`
	z-index: 500;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: space-evenly;

	@media (max-height: 560px) {
		flex-direction: row;
	}

	.fighter {
		max-height: 260px;
		max-width: 168px;
		border: 2px solid black;
		margin: 1rem;
		overflow: hidden;
		color: black;
		margin-bottom: 0.2rem;
		display: flex;
		border-radius: 1rem;
		flex-direction: column;
		background: linear-gradient(71deg, grey, transparent);
		height: 46%;
		width: 54%;
		box-shadow: 7px 15px 5px grey;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		animation: SMACK 2s;

		@media (max-height: 560px) {
			height: 85%;
			max-height: 275px;
		}

		@media (max-width: 500px) {
			width: 80%;
		}
	}

	h1 {
		transition: 200ms;
	}

	.vs-h1 {
		transform: rotateZ(-15deg);
		background: black;
		color: yellow;
		height: 2.5rem;
		width: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#name-A {
		font-size: ${(props) => (props.lengthA > 5 ? '1.3rem' : '2.3rem')};
	}

	#name-B {
		font-size: ${(props) => (props.lengthB > 5 ? '1.3rem' : '2.3rem')};
	}

	img {
		vertical-align: middle;
		height: 3rem;
		width: 3rem;
		border-radius: 2rem;
	}

	.stats-hidden {
		font: inherit;
		text-align: left;
		width: 80%;
		transform: rotateZ(5deg);

		visibility: hidden;
	}

	.grid-icons {
		padding: 2px;
		height: 2.2rem;
		display: grid;
		width: 100%;
		grid-template-columns: repeat(6, 16%);
	}

	.hidden-icon {
		font-size: 0.8rem;
		transform: scale(10);
		opacity: 0;
		transition: 1000ms;
	}

	.shown-icon {
		margin: auto;
		padding: 0.7px;
		background: black;
		border-radius: 1rem;
		transform: scale(1);
		font-size: 0.8rem;
		opacity: 1;
		transition: 1000ms;
	}

	.loser,
	.winner {
		border: 1px solid black;
		box-shadow: 1px 1px 2px black;
		text-align: center;
	}

	.loser {
		font: inherit;
		margin: 0;
		padding: 0;
		transform: scale(5000);
		font-size: 1rem;
		transition: 2000ms;
		opacity: 0;
	}

	.winner {
		font: inherit;
		margin: 0;
		padding: 0;
		font-size: 1.2rem;
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
