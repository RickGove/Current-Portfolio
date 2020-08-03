import styled from 'styled-components';

export const TitleDiv = styled.div`
	display: grid;
	grid-template-rows: 35% auto 35%;
	grid-template-areas: '. current-name .';
	justify-items: center;
	align-items: center;
	background: grey;

	* {
		box-sizing: border-box;
	}

	.current {
		grid-area: current-name;
	}
`;
