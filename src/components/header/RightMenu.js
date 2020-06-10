import styled from 'styled-components';

export const RightMenu = styled.div`
	display: grid;
	grid-template-columns: 100%;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	width: 105px;
	padding-top: 60px;
	text-align: right;
	position: absolute;
	right: 20px;
	margin: auto;
	overflow: hidden;

	.MenuBg {
		/* opacity: 0; */
		opacity: 0.5;
		display: grid;
		/* display: none; */
		width: 98%;
		text-align: left;
		/* padding-right: 20px; */
		grid-template-columns: 100%;
		grid-template-rows: repeat(auto, 100px);
		@media (min-width: 1030px) {
			opacity: 0.9;
		}
	}

	img {
		height: 50px;
		cursor: pointer;
		opacity: 0.6;
		position: absolute;
		right: 0;
		padding-top: 20px;
		padding-right: 20px;
		@media (min-width: 1030px) {
			display: none;
		}
	}
	
		img:hover .MenuBg {
			opacity: 1;
		}
	}
`;
