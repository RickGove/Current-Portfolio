import styled from 'styled-components';

const media900 = `@media (max-width: 900px)`;
const media450 = `@media (max-width: 450px)`;

export const HourlyDiv = styled.div`
	padding-top: 3.5rem;
	background: rgba(255, 255, 255, 0.5);

	* {
		margin: 0;
		box-sizing: border-box;
	}

	.hide-extra-hours {
		height: 119px;
		display: grid;
		grid-template-columns: repeat(12, auto);
		grid-template-rows: repeat(3, 118px);
		color: black;
		text-align: center;
		grid-auto-rows: 0; /* set height to 0 for autogenerated grid rows */
		overflow: hidden; /*hide grid items that overflow */
		transition: 1s;

		${media900} {
			height: 237px;

			grid-template-columns: repeat(6, auto);
			grid-template-rows: repeat(6, 118px);
		}

		${media450} {
			height: 356px;

			grid-template-columns: repeat(4, auto);
			grid-template-rows: repeat(9, 118px);
		}
	}

	.show-all-hours {
		display: grid;

		height: 356px;

		grid-template-columns: repeat(12, auto);
		grid-template-rows: repeat(3, 118px);
		color: black;
		text-align: center;
		grid-auto-rows: 0; /* set height to 0 for autogenerated grid rows */

		overflow: hidden; /* hide grid items that overflow */

		transition: 1s;

		${media900} {
			grid-template-columns: repeat(6, auto);
			grid-template-rows: repeat(6, 118px);
			height: 709px;
		}
		${media450} {
			height: 1063px;

			grid-template-columns: repeat(4, auto);
			grid-template-rows: repeat(9, 118px);
		}
	}

	.hour {
		border: 1px solid grey;
		background: rgba(30, 124, 255, 0.5);
		padding: 9px;
	}

	.hour-top {
		font-weight: bold;
	}

	.icon img {
		height: 3rem;
	}

	.degree {
	}
`;

export const MoreArrow = styled.div`
	background: rgba(30, 124, 255, 0.5);

	border: 1px solid grey;
	border-radius: 0 0 50px 50px;

	* {
		margin: 0;
		padding: 0.4rem;
		box-sizing: border-box;
	}

	p {
		padding: 3px 3px 0px 3px;
		display: inline;
		vertical-align: bottom;
	}

	.chevron {
		text-align: center;
		border-radius: 0 0 50px 50px;

		width: auto;
	}

	.chevron img {
		height: 1rem;
		padding: 0;
	}

	.chevron:hover {
		cursor: pointer;
		opacity: 0.4;
	}

	.show-all-btn {
		transition: 300ms;
		transform: rotate(180deg);
	}

	.hide-extra-btn {
		transform: rotate(0);
		transition: 300ms;
	}
`;
