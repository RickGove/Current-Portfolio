import styled from 'styled-components';

const mobile = '@media (max-width: 550px)',
	width = '88%',
	widthMobile = '88%';

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
	font-size: ${(props) => (props.length > 8 ? '1rem' : '1.5rem')};
	text-align: center;
	z-index: 10;

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	${mobile} {
		font-size: ${(props) => (props.length > 8 ? '0.9rem' : '1.1rem')};
		line-height: 30px;
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

	.input {
		font: inherit;
		width: 7rem;
		padding: 0.5rem;
		margin-top: 0.5rem;
		border-radius: 8px 8px 8px 8px;
		font-size: 1.8rem;

		&:focus {
			box-shadow: 0 0 0 5pt yellow;
			outline: red;
		}
	}

	#results-div {
		font: inherit;

		box-shadow: 0 0 0 2pt yellow;
	}

    #myUL {
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	#myUL li a {
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
		display: none;
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

	/* #li-def {
		font: inherit;

		width: 100%;
		background-color: grey;

		${mobile} {
			width: 100%;
		}
	} */

	.hero-img {
		/* z-index: 10000; */
		height: 3rem;
		width: 3rem;
		border-radius: 8rem;
		vertical-align: middle;
	}
`;
