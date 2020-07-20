import styled from 'styled-components';

const landscape = `@media all and (orientation:landscape)`;

export const CharCard = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	border: 3px solid white;
	background: linear-gradient(5deg, black, grey, transparent);
	color: black;
	box-shadow: 4px 6px grey;
	padding: 1rem;
	border-radius: 2rem;
	height: 100%;
	display: flex;
	width: 100%;
	overflow: hidden;

	.animate {
	}

	h1 {
		font-size: ${(props) => (props.length > 8 ? '1rem' : '2.3rem')};
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
	}

	img {
		height: 4rem;
		width: 4rem;
		border-radius: 10rem;
	}

	@keyframes BATMAN {
		0% {
			transform: rotateZ(350deg) scale(1);
		}
		40% {
			transform: scale(1.2);
		}
		50% {
			transform: rotateZ(150deg);
		}
		100% {
			transform: scale(1) rotateZ(0);
		}
	}
`;
