import styled from 'styled-components';

const media450 = `@media (max-width: 450px)`;

export const DailyContainer = styled.div`
	padding-top: 3.5rem;
	background: rgba(255, 255, 255, 0.5);
	padding-bottom: 3.5rem;

	* {
		box-sizing: border-box;
		margin: 0;
		/* padding: 0; */
	}

	h1 {
		/* background: rgba(255, 255, 255, 0.5); */
	}

	#daily-con {
		background: rgba(255, 255, 255, 0.5);
	}

	.hide-extra-days {
		box-sizing: border-box;
		height: 339px;
		color: black;
		display: grid;
		grid-template-columns: repeat(4, auto);
		grid-template-rows: repeat(2, 338px);
		grid-auto-rows: 0;
		overflow: hidden;
		transition: 1s;

		${media450} {
			height: 678px;
			grid-template-columns: repeat(2, auto);
			grid-template-rows: repeat(4, 338px);
		}
	}

	.show-all-days {
		box-sizing: border-box;
		height: 677px;
		display: grid;
		grid-template-columns: repeat(4, auto);
		grid-template-rows: repeat(2, 338px);
		overflow: hidden;
		grid-auto-rows: 0;
		transition: 1s;

		${media450} {
			height: 1349px;

			grid-template-columns: repeat(2, auto);
			grid-template-rows: repeat(4, 338px);
		}
	}

	.day {
		border: 1px solid grey;
		text-align: center;
		background: rgba(30, 124, 255, 0.5);
		color: black;
		padding: 1rem;
	}

	.date {
		font-weight: bold;
	}

	.description {
		text-transform: capitalize;
	}
`;
