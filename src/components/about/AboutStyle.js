import styled from 'styled-components';
import { data } from '../data/Data';

import wallpaper from '../../img/WallPapers/wallpaperA.jpg';

let wallPaperSettings = `
background-image: url(${wallpaper});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-attachment: fixed;`;

export const AboutWPDiv = styled.div`
	${wallPaperSettings}
`;

export const ShowCaseCon = styled.div`
	min-height: 100px;
	/* background-image: url(${wallpaper});
	background-attachment: fixed;  */
	width: 60%;
	margin: auto;
	/* background: ${data.styles.lightBg}; */
	color: white;
	font-weight: bold;
	padding-bottom: 100px;
	text-align: center;
`;

export const AboutTitle = styled.div`
	padding-top: 80px;
	padding-bottom: 150px;
`;

export const ShowImg = styled.img`
	border-radius: 50%;
	float: top;
	width: 27%;
	padding-bottom: 25px;
`;

export const ShowH1 = styled.span`
	text-decoration: none;
	letter-spacing: 4px;
	font-size: 35px;
	font-weight: bold;
	border-bottom: ${data.styles.borderSpan};
	color: ${(props) => props.col};
	padding-bottom: 4px;
	@media (min-width: 800px) {
		font-size: 55px;
	}
`;

ShowH1.defaultProps = { color: 'white' };

export const ShowP = styled.p`
	font-size: 15px;
`;

export const ShowSubhead = styled.h2`
	font-style: italic;
`;
