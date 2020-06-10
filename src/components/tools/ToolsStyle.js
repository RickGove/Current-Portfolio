import styled from 'styled-components';
import { data } from '../data/Data';

import wallpaper from '../../img/WallPapers/wallpaperB.jpg';

const wallPaperSettings = `
background-image: url(${wallpaper});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-attachment: fixed;`;

export const BoxCon = styled.div`
	${wallPaperSettings};
	text-align: center;
	padding-top: 30px;
	box-sizing: border-bottom;
	background-color: ${data.styles.lightBg};
	padding-bottom: 100px;
	border-bottom: ${data.styles.borderDef};
`;

export const BoxGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 100%);
	grid-template-rows: repeat(auto, 300px);
	width: 97%;
	color: white;
	@media (min-width: 800px) {
		grid-template-columns: repeat(4, 25%);
		grid-template-rows: repeat(auto, 200px);
	}
`;

export const ToolsTitle = styled.div`
	text-align: center;
	padding-bottom: 150px;
	padding-top: 80px;
`;

export const Box = styled.div`
	width: 99%;
	height: auto;
	padding: 0px;
	min-width: 115px;
	background-color: ${(props) => props.bg};
	text-align: center;
	overflow: hidden;
	border: 1px solid white;
`;

Box.defaultProps = { bg: 'white' };

export const BoxImg = styled.img`
	width: ${(props) => props.sz};
	height: ${(props) => props.sz};
	padding-top: 10px;
	padding-right: ${(props) => props.r};
`;

BoxImg.defaultProps = { r: '0', sz: '80px' };

export const H3Box = styled.h3`
	margin: 0;
	padding-top: 10px;
`;

export const PBox = styled.p`
	margin: 0;
	padding: 0;
`;
