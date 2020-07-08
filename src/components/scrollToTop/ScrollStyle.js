import styled from 'styled-components';

export const ScrollBtnDiv = styled.div`
	border: 2px solid grey;
	border-radius: 35px 0 0 35px;
	width: 9%;
	height: auto;
	cursor: pointer;
	overflow: hidden;
	right: 0px;
	bottom: 100px;
	text-align: center;
	position: -webkit-sticky; /* Safari */
	position: sticky;
	position: fixed;
	display: ${(props) => props.vis};
	margin: 0;
	padding: 0;
	@media (min-width: 800px) {
		width: 50px;
	}
	&:hover {
		opacity: 0.4;
	}
`;

ScrollBtnDiv.defaultProps = { vis: 'none' };

export const ScrollBtn = styled.img`
	vertical-align: middle;
	height: auto;
	width: 100%;
`;
