import styled from 'styled-components';

const landscape = `@media only screen and (max-height : 600px)`;

export const CharCard = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	border: 3px solid white;
	background: black;
	color: white;
	box-shadow: 4px 6px grey;
	padding: 1rem;
	border-radius: 2rem;
	height: 100%;
	display: flex;
	width: 70%;
	overflow: hidden;

	${landscape} {
		flex-direction: column;
		align-items: center;
	}

	.animate {
	}

	h1 {
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

		${landscape} {
			position: unset;
		}
	}

	div {
		display: flex;
		width: 90%;
		align-items: center;
		justify-content: space-between;

		${landscape} {
			flex-direction: column;
			align-items: center;
		}
	}

	img {
		height: 6rem;
		width: 6rem;
		border-radius: 10rem;

		${landscape} {
			width: 6rem;
		}
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
