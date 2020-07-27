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
	width: 100%;
	margin: auto;
	color: white;
	font-weight: bold;
	padding-bottom: 100px;
	text-align: center;

	.hidden-data {
		display: none;
	}

	p {
		margin: 2rem;
	}

	button {
		display: block;
		margin: auto;
		margin-top: 4.5rem;
		border-radius: 2rem;
		padding: 0.5rem 3rem;
		font: inherit;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		cursor: pointer;
		outline: none;

		&:hover {
			opacity: 0.4;
		}
	}
`;

export const AboutTitle = styled.div`
	padding-top: 3rem;
	padding-bottom: 0;
`;

export const ShowImg = styled.img`
	border-radius: 50%;
	float: top;
	max-width: 13rem;
	width: 27%;
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
	margin: 3rem;
`;
