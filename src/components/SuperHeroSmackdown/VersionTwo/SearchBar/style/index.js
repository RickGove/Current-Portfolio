import styled from 'styled-components';

import mag from '../../../img/intro/mag.png';

const mobile = '@media (max-width: 550px)',
	width = '100%',
	widthMobile = '100%';

export const Button = styled.button`
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
	font-size: ${(props) => (props.length > 8 ? '2rem' : '3rem')};
	text-align: center;
	z-index: 10;

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

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		opacity: 1;
		transition: 200ms;
	}

	.input {
		z-index: 500;
		background-image: url(${mag});
		background-position: left;
		background-size: contain;
		background-repeat: no-repeat;
		text-align: center;
		border: 4px solid yellow;
		position: relative;
		font: inherit;
		width: ${width};
		margin: auto;
		display: block;
		padding: 0.5rem;
		border-radius: 8px 8px 8px 8px;
		font-size: 3rem;

		&:focus {
			box-shadow: 0 0 0 5pt yellow;
			outline: red;
		}
	}

	#results-div {
		font: inherit;

		box-shadow: 0 0 0 2pt yellow;
	}

	.results-ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.results-ul li a {
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
		font: inherit;

		/* div */
		border-radius: 0 0 8px 8px;
		height: 0px;
		/* display: none; */
		width: 0px;
		background-color: grey;
	}

	.results-shown {
		font: inherit;

		height: auto;
		margin: auto;
		width: ${width};
		display: block;
		${mobile} {
			width: ${widthMobile};
		}
	}

	.hero-img {
		margin-left: 5.5rem;
		height: 5rem;
		width: 5rem;
		border-radius: 8rem;
		vertical-align: middle;
	}
`;
