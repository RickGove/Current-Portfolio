import styled from 'styled-components';

export const CharCard = styled.div`
	border: 3px solid white;
	background: black;
	color: white;
	box-shadow: 4px 6px grey;
	padding: 1rem;
	border-radius: 2rem;
	height: 100%;
	display: flex;
	width: 90%;
	overflow: hidden;

	.animate {
	}

	h1 {
		margin: auto;
		height: 3rem;
	}

	h1,
	img {
		animation: BATMAN 3s;
	}

	h2 {
		position: relative;
		left: 2rem;
		color: red;
		cursor: pointer;
		font-family: initial;

		&:hover {
			opacity: 0.6;
		}
	}

	div {
		display: flex;
		width: 90%;
	}

	img {
		margin: auto;
		height: 6rem;
		width: 6rem;
		border-radius: 10rem;
	}

	@keyframes BATMAN {
		0% {
			color: red;
			transform: rotateZ(180deg) scale(2);
		}
		40% {
			transform: scale(12);
		}
		60% {
			transform: rotateZ(30deg);
			letter-spacing: 0.3rem;
		}
		100% {
			color: WHITE;
			transform: scale(1) rotateZ(0);
		}
	}
`;
