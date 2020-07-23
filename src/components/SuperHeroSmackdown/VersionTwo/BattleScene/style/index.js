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
		overflow: hidden;
		color: black;
		display: flex;
		border-radius: 1rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
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
		font-size: ${(props) => (props.lengthA > 5 ? '1.3rem' : '1.3rem')};
	}

	#name-B {
		font-size: ${(props) => (props.lengthB > 5 ? '1.3rem' : '1.3rem')};
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
		border: 0;
		visibility: hidden;
		justify-content: center;
	}

	.grid-icons {
		border: 0;
		padding: 0px;
		height: 2rem;
		display: grid;
		width: 80%;
		grid-template-columns: repeat(6, 16%);
	}

	.hidden-icon {
		font-size: 1rem;
		transform: scale(10);
		opacity: 0;
		transition: 400ms;
	}

	.shown-icon {
		margin: auto;
		padding: 2px;
		background: black;
		border-radius: 1rem;
		border: 1px solid white;
		transform: scale(1);
		font-size: 1rem;
		opacity: 1;
		transition: 400ms;
	}

	.loser,
	.winner {
		border: 1px solid black;
		/* box-shadow: 1px 1px 2px black; */
		box-shadow: 6px 2px 11px black;
		margin: 2px;
		text-align: center;
		font-size: 1.1rem;
		width: 95%;
		padding: 1px;
	}

	.loser {
		font: inherit;
		transform: scale(20);
		font-size: 1rem;
		transition: 400ms;
		opacity: 0;
	}

	.winner {
		font: inherit;
		font-size: 1.2rem;
		transition: 400ms;
		transform: scale(20);
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
