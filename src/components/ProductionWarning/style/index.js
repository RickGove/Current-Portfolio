import styled from 'styled-components';

export const ProductionWrapper = styled.div`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		z-index: 1000;
	}

	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.9);
	display: grid;
	grid-template-rows: 20% auto 20%;
	grid-template-columns: 10% auto 10%;
	grid-template-areas:
		'. . .'
		'warning warning warning'
		'. . .';

	.warning {
		grid-area: warning;
		background: white;
		height: 100%;
		width: 100%;
		color: black;
		margin: auto;
		text-align: center;
		opacity: 1;
	}

	h4 {
		text-align: left;
		margin-left: 1rem;
	}

	ul {
		text-align: left;
		margin-left: 3rem;
	}

	button {
		display: inline;
		border-radius: 1rem;
		padding: 0.5rem 1rem 0.5rem 1rem;
		font: inherit;
		cursor: pointer;
		margin-top: 2rem;
		margin-bottom: 2rem;

		&:hover {
			opacity: 0.5;
		}
	}

	input {
		-webkit-appearance: none;
		background-color: #fafafa;
		border: 1px solid #cacece;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
			inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
		padding: 9px;
		border-radius: 3px;
		display: inline-block;
		position: relative;
		text-align: middle;
		cursor: pointer;
		margin: 0 0.3rem 0 1rem;

		&:checked {
			background-color: blue;
			border: 1px solid #adb8c0;
			box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
				inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
				inset 15px 10px -12px rgba(255, 255, 255, 0.1);
			color: #99a1a7;
		}
	}

	.understand {
		display: inline;
		font-weight: bold;
	}
`;
