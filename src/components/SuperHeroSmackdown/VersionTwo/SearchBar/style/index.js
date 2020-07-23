import styled from 'styled-components';

import mag from '../../../img/intro/mag.png';

const mobile = '@media (max-width: 550px)',
	width = '90%',
	maxWidth = 'max-width: 20rem',
	widthMobile = '90%';

export const Button = styled.button`
	display: flex;
	justify-content: space-around;
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	/* position: unset !important; */
	background: white;
	font: inherit;
	vertical-align: middle;
	width: 100%;
	font: inherit;
	text-align: left;
	padding: 1rem;
	cursor: pointer;
	transform: scale(1);
	transition: 300ms;
	line-height: 50px;
	padding: 0.1rem;
	font-size: ${(props) => (props.length > 8 ? '1rem' : '1.5rem')};
	position: relative;
	z-index: 500;

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	@media (hover: hover) {
		&:hover {
			transform: scale(1.2);
			transition: 300ms;
		}
	}
`;

export const SearchDiv = styled.div`
	@import url('../../../../font');
	font-family: 'Bangers', sans;
	width: 100%;

	.div-with-input-and-results {
		width: 100%;
	}

	.modal {
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		opacity: 1;
		transition: 200ms;
	}

	.take-space {
		visibility: hidden;
	}

	.input {
		z-index: 500;
		background-image: url(${mag});
		background-position: left;
		background-size: contain;
		background-repeat: no-repeat;
		border: 4px solid black;
		padding: 0.5rem;
		padding-left: 3.5rem;
		position: relative;
		font: inherit;
		width: ${width};
		${maxWidth};
		margin: 0 auto auto auto;
		display: block;
		border-radius: 8px 8px 8px 8px;
		font-size: 1.5rem;

		&:focus {
			box-shadow: 0 0 0 5pt yellow;
			outline: red;
		}
	}

	#results-div {
		font: inherit;
		position: relative;
		z-index: 500;
		box-shadow: 0 0 0 2pt yellow;
	}

	.results-ul {
		background: white;
		position: absolute;
		z-index: 500;
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.results-ul li a {
		position: relative;
		z-index: 500;
		margin: auto;
		border: 1px solid #ddd;
		margin-top: -1px;
		background-color: #f6f6f6;
		padding: 12px;
		text-decoration: none;
		font-size: 18px;
		color: black;
		display: block;
	}

	.results {
		position: relative;
		z-index: 500;
		font: inherit;
		/* div */
		border-radius: 0 0 8px 8px;
		height: 0px;
		/* display: none; */
		width: 0px;
		background-color: grey;
	}

	.results-shown {
		z-index: 500;
		font: inherit;
		height: auto;
		margin: auto;
		width: ${width};
		${maxWidth};
		display: block;
	}

	.hero-img {
		z-index: 500;
		margin-left: 1rem;
		height: 3rem;
		width: 3rem;
		border-radius: 8rem;
		vertical-align: middle;
	}
`;
