import styled from 'styled-components';

export const FootCon = styled.div`
	* {
		box-sizing: border-box;
	}
	max-width: 100%;
	/* border: 3px solid pink; */
	padding: 0;
	margin: 0;
	max-height: 350px;
	padding: 20px 0;
	overflow: hidden;
	background-color: white;

	.top__div {
		/* border: 3px solid red; */
		margin: 5px 0;

		img {
			height: 30px;
			@media (min-width: 500px) {
				height: 60px;
			}
		}
	}
	.top__right {
		float: right;
	}
	.footer__top {
		/* border: 3px solid blue; */
		list-style: none;
		padding: 0;

		li {
			display: inline;
			padding-right: 25px;
			padding-left: 25px;
		}
	}

	.middle {
		/* border: 3px solid green; */
		text-align: center;
		margin: 5px 0;
	}

	.middle__list {
		list-style: none;
		/* border: 3px solid black; */
		img {
			height: 40px;
			padding: 10px 0;
			vertical-align: middle;
		}
		li {
			margin-top: 10px;
		}
	}

	.bottom {
		/* border: 3px solid magenta; */
		padding: 15px;
		margin: 5px 0;
	}

	.bottom__list {
		list-style: none;
		/* border: 3px solid darkblue; */
		text-align: center;
		margin: auto;
		padding: 15px;

		img {
			height: 40px;
			padding: 0 5px;

			&:hover {
				opacity: 0.6;
				cursor: pointer;
			}
		}

		li {
			/* border: 2px solid orange; */
			display: inline;
		}
	}
`;
