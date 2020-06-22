import styled from 'styled-components';

export const ScrollBtnDiv = styled.div`
	border: 3px solid grey;
	border-radius: 16px;
	width: 12%;
	height: auto;
	cursor: pointer;
	overflow: hidden;
	left: 0px;
	bottom: 100px;
	text-align: center;
	/* position: -webkit-sticky; Safari */
	/* position: sticky; */
	position: fixed;
	display: block;
	transition: 0.3s;
	margin: 0;
	padding: 0;
	@media (min-width: 800px) {
		width: 50px;
	}
	&:hover {
		opacity: 0.4;
		transform: scale(1.8);
		transition: 0.3s;
		left: 1.4rem;
	}
`;

export const ScrollBtn = styled.img`
	vertical-align: middle;
	height: auto;
	width: 100%;
`;
