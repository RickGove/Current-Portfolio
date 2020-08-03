import styled from 'styled-components';

let blue = `#1E7CFF`;

const mobile = `@media (max-width: 768px)`;
const media850 = `@media (max-width: 850px)`;

export const WeatherHeadCon = styled.div`
	* {
		box-sizing: border-box;
		color: ${blue};
	}

	z-index: 1;
	position: sticky;
	top: 0;
	height: 4.3rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: black;

	${mobile} {
		display: grid;
		height: 8.6rem;
		grid-template-rows: repeat(2, 4.3rem);
		grid-template-areas: 'logo switch' ' search search';
	}

	.modal {
		height: 0px;
		width: 100%;
		overflow: hidden;
		background: black;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		transition: opacity 400ms;
	}

	.show-modal {
		opacity: 0.9;
		height: 100vh;
		transition: opacity 400ms;
	}

	@keyframes SPIN {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.loader {
		/* display: none; */
		position: absolute;
		top: 0.6rem;
		left: 81%;
		height: 3rem;
		opacity: 1;
		transition: 600ms;
		animation: SPIN 3s 7;
	}

	.hidden {
		transition: 600ms;
		opacity: 0;
	}

	.input-container {
		grid-area: search;
		display: flex;
		background: white;
		border-radius: 1rem;
		padding: 0rem 1rem;
		align-items: center;
		justify-content: center;
	}

	.clear-search__btn {
		background: none;
		border: none;
		font-size: 1.5rem;
		outline: none;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}

	.search-container {
		width: 33%;
		margin: 0;
		padding: 0;
		align-items: start;
		position: relative;
		z-index: 50;

		${mobile} {
			grid-area: search;
			width: 100%;
		}
	}

	.search {
		background: white;
		border: none;
		width: 100%;
		height: 40%;
		padding: 0.5rem;
		font: inherit;
		font-size: 17px;
		color: black;
		border-radius: 10px;
		z-index: 50;
		font-weight: bold;
		outline: none;
		caret-color: ${blue};
	}

	.search:focus .search-container {
		border-radius: 10px 10px 0 0;
	}

	.search:focus .search__results {
		transform: scale(1);
		transition: 350ms;
	}

	.search__results {
		border-top: none;
		z-index: 50;
		position: absolute;
		height: auto;
		width: 100%;
		background: white;
		color: black;
		padding: 1px;
		margin-top: 1px;
		transform: scale(0);
		transition: 350ms;
		border-radius: 0 0 10px 10px;
	}

	.search__results ul {
		list-style: none;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.search__results button {
		border: none;
		border-radius: 10px;
		text-align: left;
		background: white;
		width: 100%;
		height: auto;
		z-index: 50;
		color: black;
		font-size: 1rem;
		cursor: pointer;
		padding: 8px;
	}

	.search__results button:hover {
		background: grey;
		opacity: 0.8;
	}

	.currently__selected {
		color: red;
		background: grey;
		opacity: 0.8;
	}

	.highlight {
		background-color: black;
		opacity: 0.5;
	}

	.search__results img {
		margin-left: 1rem;
		height: 1rem;
		text-align: left;

		${media850} {
			height: 0.5rem;
		}
	}

	.title-h1 {
		grid-area: logo;
		font-family: 'Lora', serif;
		z-index: 500;
		width: 30%;
		text-align: center;

		${mobile} {
			width: 100%;
		}
	}

	.switch-container {
		width: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.switch-outer {
		grid-area: switch;
		font-size: 1.5rem;
		cursor: pointer;

		${mobile} {
			width: 100%;
		}
	}

	.system-choice {
		grid-area: switch;
		font-weight: bold;
		font-size: 1.7rem;
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 37px;
		height: 21px;
		margin: 0.2rem;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #2196f3;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 12px;
		width: 12px;
		left: 4px;
		bottom: 5px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(18px);
		-ms-transform: translateX(18px);
		transform: translateX(18px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;
