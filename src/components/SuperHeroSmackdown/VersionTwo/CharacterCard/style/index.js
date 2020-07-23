import styled from 'styled-components';

const landscape = `@media all and (orientation:landscape)`;

export const CharCard = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	background: white;
	border: 0;
	padding: 0;
	color: black;
	box-shadow: 4px 6px grey;
	border-radius: 1rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
	animation: BATMAN 1s;

	.animate {
	}

	h1 {
		text-align: center;
		font-size: ${(props) => (props.length > 8 ? '2rem' : '2.3rem')};
		width: 100%;
		background: yellow;
		border: 1px solid;
		display: block;
	}

	h1,
	img {
	}

	h2 {
		margin-left: auto;
		background: black;
		padding: 0.1rem;
		display: block;
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
		/* div with the bg imag */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background-size: cover;
		border: 9px solid white;
		background-position: center;
		width: 100%;
		height: 100%;
	}

	img {
		height: 4rem;
		width: 4rem;
		border-radius: 10rem;
	}

	@keyframes BATMAN {
		0% {
			transform: rotateY(90deg);
		}

		100% {
			transform: rotateY(0);
		}
	}
`;
