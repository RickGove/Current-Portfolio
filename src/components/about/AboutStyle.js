import styled from 'styled-components';
import { data } from '../data/Data';

import wallpaperA from '../../img/WallPapers/wallpaperA.jpg';

let wallPaperSettings = `
background-image: url(${wallpaperA});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-attachment: fixed;`;

export const AboutWPDiv = styled.div`
	${wallPaperSettings}
`;

export const ShowCaseCon = styled.div`
	min-height: 80vh;
	width: 100%;
	margin: auto;
	color: white;
	font-weight: bold;
	padding-bottom: 3.5rem;
	text-align: center;

	.anB {
		overflow: hidden;
		margin-top: 3rem;
	}

	.more-info {
		width: 80%;
		margin: 0 auto;
		overflow: hidden;
		transition: all 1s;
	}

	.hidden-data {
		overflow: hidden;
		transition: all 1s;
		height: 0;
	}

	.btn-see-more__hidden {
		display: none;
	}

	.find-more {
		box-shadow: 0rem 4rem 1rem gray;
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
	overflow: hidden;
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
