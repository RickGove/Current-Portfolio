import styled from 'styled-components';
import { data } from '../data/Data';

export const ProjectsCon = styled.div`
	background-color: ${data.styles.darkBg};
	border-bottom: ${data.styles.borderDef};
`;

export const AlternatingColorCon = styled.div`
	background-color: ${(props) => props.bgCol};
	padding-top: 100px;
`;

AlternatingColorCon.defaultProps = { bgCol: 'red' };

export const ProjectsIndCon = styled.div`
	padding-top: 100px;
	padding-bottom: 100px;
	padding-left: 20px;
	display: grid;
	grid-template-columns: 10% auto 15%;
`;

export const ProjectsTitleCard = styled.div`
	text-align: center;
	padding-top: 60px;
	padding-bottom: 75px;
`;

export const ProjectsSide = styled.div`
	width: 20%;
	left: 0;
`;

export const ProjectsGrid = styled.div``;

export const ProjectsMain = styled.div`
	padding-left: 7%;
	margin: 0;
`;

export const ProjectsTitleCon = styled.div`
	padding-left: 13%;
`;

export const ProjectsTitle = styled.h1`
	color: ${data.styles.textDark};
	letter-spacing: 2px;
	padding-top: 5px;
	padding-left: 10%;
	margin: 0;
	text-emphasis: bold;
`;

export const ProjectsDesc = styled.h3`
	padding-top: 50px;
	color: ${(props) => props.col};
	margin: auto;
`;

ProjectsDesc.defaultProps = { col: 'black' };

export const ProjectsToolsSide = styled.div`
	padding: 5px;
	display: block;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(2, 48%);
		grid-template-rows: repeat(auto, 50px);
	}
`;

export const ProjectsToolsImg = styled.img`
	height: auto;
	width: 100%;
`;

export const ToolsUsedImg = styled.img`
	width: 200%;
	margin: auto;
	height: auto;
	grid-column-end: span 2;
`;
