import styled from 'styled-components';

const rollDur = '1500ms';

export const DiceWrap = styled.div`
	img {
		height: 100%;
	}

	#view {
		width: 50px;
		height: 50px;
		margin: 25px;
		perspective: 150px;
	}

	#dice {
		width: 50px;
		height: 50px;
		position: relative;
		transform-style: preserve-3d;
		transition: all 1s;
	}

	.diceFace {
		color: black;
		position: absolute;
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 0px;
		border: 0.5px solid black;
	}

	#front,
	#right,
	#back,
	#left,
	#top,
	#bottom {
		background-color: white;
	}
	#front {
		transform: rotateY(0deg) translateZ(25px);
	}
	#right {
		transform: rotateY(90deg) translateZ(25px);
	}
	#back {
		transform: rotateY(180deg) translateZ(25px);
	}
	#left {
		transform: rotateY(-90deg) translateZ(25px);
	}
	#top {
		transform: rotateX(90deg) translateZ(25px);
	}
	#bottom {
		transform: rotateX(-90deg) translateZ(25px);
	}

	.six {
		transform: rotateX(0) rotateY(360deg);

		animation: roll-6 ${rollDur};
	}

	.five {
		animation: roll-5 ${rollDur};

		transform: rotateX(0) rotateY(-90deg);
	}

	.four {
		animation: roll-4 ${rollDur};

		transform: rotateX(0) rotateY(180deg);
	}

	.three {
		animation: roll-3 ${rollDur};

		transform: rotateX(0) rotateY(90deg);
	}

	.two {
		animation: roll-2 ${rollDur};

		transform: rotateY(0) rotateX(-90deg);
	}

	.one {
		animation: roll-1 ${rollDur};

		transform: rotateX(0) rotateX(90deg);
	}

	@keyframes roll-1 {
		0% {
			transform: rotateX(0) rotateY(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotateX(180deg) rotateY(-90deg) translate3d(-5px, -15px, 40px);
		}

		50% {
			transform: rotateX(-90deg) rotateY(360deg) translate3d(5px, 15px, -40px);
		}

		75% {
			transform: rotateX(-270deg) rotateY(180deg) translate3d(-5px, -15px, 40px);
		}

		100% {
			transform: rotateX(0) rotateX(90deg);
		}
	}

	@keyframes roll-2 {
		0% {
			transform: rotateX(0) rotateY(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotateX(180deg) rotateY(-90deg) translate3d(-5px, -15px, 40px);
		}

		50% {
			transform: rotateX(-90deg) rotateY(360deg) translate3d(5px, 15px, -40px);
		}

		75% {
			transform: rotateX(-270deg) rotateY(180deg) translate3d(-5px, -15px, 40px);
		}

		100% {
			transform: rotateY(0) rotateX(-90deg);
		}
	}

	@keyframes roll-3 {
		0% {
			transform: rotateX(0) rotateY(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotateX(180deg) rotateY(-90deg) translate3d(-5px, -15px, 40px);
		}

		50% {
			transform: rotateX(-90deg) rotateY(360deg) translate3d(5px, 15px, -40px);
		}

		75% {
			transform: rotateX(-270deg) rotateY(180deg) translate3d(-5px, -15px, 40px);
		}

		100% {
			transform: rotateX(0) rotateY(90deg) !important;
		}
	}

	@keyframes roll-4 {
		0% {
			transform: rotateX(0) rotateY(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotateX(180deg) rotateY(-90deg) translate3d(-5px, -15px, 40px);
		}

		50% {
			transform: rotateX(-90deg) rotateY(360deg) translate3d(5px, 15px, -40px);
		}

		75% {
			transform: rotateX(-270deg) rotateY(180deg) translate3d(-5px, -15px, 40px);
		}

		100% {
			transform: rotateX(0) rotateY(180deg) !important;
		}
	}

	@keyframes roll-5 {
		0% {
			transform: rotateX(0) rotateY(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotateX(180deg) rotateY(-90deg) translate3d(-5px, -15px, 40px);
		}

		50% {
			transform: rotateX(-90deg) rotateY(360deg) translate3d(5px, 15px, -40px);
		}

		75% {
			transform: rotateX(-270deg) rotateY(180deg) translate3d(-5px, -15px, 40px);
		}

		100% {
			transform: rotateX(0) rotateY(-90deg) !important;
		}
	}

	@keyframes roll-6 {
		0% {
			transform: rotateX(0) rotateY(0) translate3d(0, 0, 0);
		}

		25% {
			transform: rotateX(180deg) rotateY(-90deg) translate3d(-5px, -15px, 40px);
		}

		50% {
			transform: rotateX(-90deg) rotateY(360deg) translate3d(5px, 15px, -40px);
		}

		75% {
			transform: rotateX(-270deg) rotateY(180deg) translate3d(-5px, -15px, 40px);
		}

		100% {
			transform: rotateX(0) rotateY(360deg) !important;
		}
	}
`;
