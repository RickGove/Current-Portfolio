import styled from 'styled-components';

// let border = `solid`;
let border = `none`;

export const MoreCon = styled.div`
	position: sticky;
	position: -webkit-sticky;
	position: fixed;
	display: none;
	background-color: white;
	padding: 25px;
	top: 56;
	border: 1px solid black;

	p {
		margin: 0;
	}

	ul {
	}

	li {
	}

	.button {
		border: 1px solid black;
		cursor: pointer;
		padding: 15px;
		width: 100px;
		list-style: none;
		display: inline-block;
		margin: 10px;
		text-align: center;
		color: blue;

		&:hover {
			opacity: 0.6;
		}
	}
`;

export const CookiesCon = styled.div`
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	width: 100%;
	background-color: white;
	border: 2px ${border} pink;
	border-bottom: 1px solid grey;
	height: 55px;
	overflow: hidden;
	margin: auto;

	/* * {
		box-sizing: border-box;
	} */
	.mobile,
	.more-mobile {
		display: none;
	}

	@media (max-width: 1000px) {
		.more-mobile,
		.mobile {
			display: inline;
		}

		.more,
		.full {
			display: none;
		}
	}

	ul {
		border: 2px ${border} blue;
		list-style: none;
		padding: 0;
	}

	li {
		border: 2px ${border} yellow;
		display: inline;
		padding: 0px 20px;
	}

	.more,
	.more-mobile {
		color: blue;
		border: 1px solid black;
		padding: 5px;
		cursor: pointer;
		margin: 10px;
		&:hover {
			color: black;
			opacity: 0.6;
		}
	}
`;
