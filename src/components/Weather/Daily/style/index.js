import styled from 'styled-components';

export const DailyContainer = styled.div`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	h1 {
		background: rgba(255, 255, 255, 0.5);
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
