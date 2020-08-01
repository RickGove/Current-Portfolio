import styled from 'styled-components';

import mag from '../../../img/intro/mag.png';

const width = '100%';

export const Button = styled.button`
	border: 0;
	border-radius: 2rem;
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
	outline: none;

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	@media (hover: hover) {
		&:hover {
			${(props) =>
				props.hover === 'false'
					? ''
					: 'transform: scale(1.2); transition: 300ms;'}
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

	form {
		display: flex;
	}

	.input-container {
		display: flex;
		background: white;
		border: 1px solid gray;
		border-radius: 2rem 2rem 0 0;
		display: flex;
		padding: 0.3rem 2rem;
		z-index: 5;
		align-items: center;
		justify-content: space-between;
	}

	.input-on-super {
		border: 0;
		z-index: 5;
		background-image: url(${mag});
		background-position: left;
		background-size: contain;
		background-repeat: no-repeat;
		padding: 0.6rem;
		padding-left: 3.5rem;
		position: relative;
		font: inherit;
		width: ${width};
		display: block;
		border-radius: 8px 8px 8px 8px;
		font-size: 1.5rem;

		&:focus {
			border: none;
			outline: none;
		}
	}

	.clear-search__btn {
		cursor: pointer;
		outline: none;
		background: none;
		border: none;
		font-size: 2.5rem;
		position: relative;
		z-index: 7;
		color: red;
		font-family: bangers;
		&:hover {
			opacity: 0.7;
		}
	}

	#results-div {
		font: inherit;
		position: relative;
		z-index: 500;
	}

	.results-ul {
		border: 1px solid grey;
		border-top: 0;
		border-radius: 0 0 2rem 2rem;
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
		border-radius: 0 0 8px 8px;
		height: 0px;
		width: 0px;
		background-color: grey;
	}

	.results-shown {
		z-index: 500;
		font: inherit;
		height: auto;
		margin: auto;
		width: ${width};
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
