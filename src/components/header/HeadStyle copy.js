import styled from 'styled-components';
import { data } from '../data/Data';

const media = `@media (min-width: 950px)`;

const mobile = `@media (max-width: 388px)`;

let HeadSizeFull = `@media (min-width: 1250px) {
	height: 70px;
}`;

let HeadSizeTablet = `@media (min-width: 768px) {
	height: 70px;
}`;

let HeadSizeMobile = `height: 70px`;

export const HeadCon = styled.div`
	* {
		box-sizing: border-box;
	}

	display: grid;
	grid-template-columns: 40% auto;
	grid-template-areas: ' nav projects ';
	width: 100%;
	position: -webkit-sticky;
	position: sticky;
	text-align: left;
	height: 70px;
	top: 0;
	right: 0;
	left: 0;
	/* border: 2px solid orange; */
	background: black;

	${media} {
		grid-template-columns: auto 70% 20% auto;
		grid-template-areas: '. nav projects .';
	}

	li {
		display: inline-block;
		/* border: 3px solid purple; */
	}

	.right-nav {
	}

	ul {
		/* border: 3px solid green; */
		position: relative;
		top: 15%;
		padding: 0;
		margin: 0;
	}

	.logo {
		padding-left: 25px;
		/* padding-right: 40px; */
		/* border: 2px solid blue; */
		height: 50px;
		vertical-align: middle;

		${mobile} {
			height: 38px;
		}
	}

	.projects-nav {
		grid-area: projects;
		text-align: right;
	}

	.project {
		display: block;
		@media (min-width: 700px) {
			display: block;
		}
	}

	.project-icon-link {
		position: relative;
		top: -0.2rem;
		padding-right: 1.2rem;
	}

	.project__icon {
		transition: 500ms;
		height: 55px;
		vertical-align: middle;
		cursor: pointer;

		:hover {
			opacity: 0.6;
			transform: scale(1.6) translateY(0.5em);
			transition: 500ms;
		}

		${mobile} {
			height: 2.5rem;
		}
	}

	.HeadNav {
		/* border: 2px solid pink; */
		grid-area: nav;
		margin: auto;
		color: white;
		list-style: none;
		height: 100%;
		width: 100%;
	}

	.HeadLink {
		/* border: 2px solid maroon; */
		padding-left: 10px;
		padding-right: 10px;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: white;
		cursor: pointer;
		display: none;
		&:hover {
			opacity: 0.3;
		}

		${media} {
			display: inline-block;
		}
	}
`;

export const Hamburger = styled.div`
	button {
		background: none !important;
		border: none;
		padding: 0 !important;
		text-decoration: underline;
		cursor: pointer;
	}

	.dropimg {
		height: 1rem;
		cursor: pointer;
		/* border: 3px solid pink; */
		${media} {
			display: none;
		}
		${mobile}{
			height: 38px;
		}
	}
	/* // div holding image */
	.dropdown { 
		position: absolute; 
		left: 240px;
		top: 22px;
		display: inline-block;
		/* border: 2px solid blue; */
	
		@media (min-width: 950px){
			display:none;
		}
	
		${mobile}{
			left: 8.2rem
		}
	}

	.dropdown-content {
		display: none;
		/* border: 2px solid green; */
		position: absolute;
		left: 0;
		width: 200px;
		background-color: #f9f9f9;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		@media (min-width: 700px) {
			display: none;
			box-shadow: none;
		}

		
	}

	.dropdown-content a {
		color: ${data.styles.accent};
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		opacity: 0.8;
		font-weight: bold;
		cursor: pointer;
		
			&:hover {
				opacity: 0.2;
			}
		}
	}

	p{
		display: inline;
		color: red;
		border: 2px solid maroon;
	}

	.dropdown-content .active {
		color: grey;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: underline;
        font-weight: bold;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
		opacity: 0.5;
	}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {
		display: block;

	}

	/* Change the background color of the dropdown image when the dropdown content is shown */
	.dropdown:hover .dropimg {
		opacity: 0.2;
	}
}
`;

export const HeadLinkSide = styled.a`
	margin: 15px;
	color: ${data.styles.accent};
	text-decoration: none;
	font-size: 25px;
	&:hover {
		opacity: 0.6;
	}
`;

export const HeadFloatCon = styled.div`
	width: 100%;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	${HeadSizeTablet};
	${HeadSizeMobile};
	${HeadSizeFull};

	button {
		background: none !important;
		border: none;
		padding: 0 !important;
		text-decoration: underline;
		cursor: pointer;
	}

	p {
		color: black;
		font-size: 30px;
		position: absolute;
		top: 100px;
		left: -10px;
		writing-mode: vertical-rl;
		opacity: 0.4;
		@media (min-width: 1000px) {
			display: none;
		}
	}
`;

HeadCon.defaultProps = {
	colorBG: `${data.styles.darkBg}`,
	colorTX: `${data.styles.hover}`,
	overF: 'visible',
};

export const HeadLi = styled.li`
	display: inline;
	padding: 0 10px 0 10px;
	padding-bottom: 15px;
	/* border: 2px solid white; */

	button {
		background: none !important;
		border: none;
		padding: 0 !important;
		text-decoration: underline;
		cursor: pointer;
	}

	.HeadLink {
		color: ${data.styles.textLight};
		/* border: 2px solid yellow; */
		cursor: pointer;
		text-decoration: none;
		text-transform: uppercase;
		font-size: 9px;
		@media (min-width: 960px) {
			font-size: 16px;
		}
		&:hover {
			color: ${data.styles.hover};
			opacity: 0.2;
		}
		&:active {
			color: pink;
		}
	}
`;

export const CurLink = styled.span`
	color: grey;
	border-bottom: 2px solid grey;
	padding-bottom: 1px;
	font-size: 15px;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		opacity: 0.2;
	}
	@media (min-width: 900px) {
		font-size: 20px;
	}
`;

export const FloatLi = styled.li``;

export const SideCurLink = styled.span`
	color: grey;
	margin: 15px;
	text-decoration: underline;
	padding-bottom: 1px;
	font-size: 12px;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		opacity: 0.2;
	}
	@media (min-width: 900px) {
		font-size: 25px;
	}
`;

export const Name = styled.h3`
	display: none;
`;

export const HeadImg = styled.img`
	cursor: pointer;
	height: 50px;
	opacity: 0.6;
	position: absolute;
	left: 25px;
	top: 30px;
	display: ${(props) => props.show};
	&:hover {
		opacity: 0.2;
	}
`;

export const HeadMenu = styled.ul`
	text-align: right;
	list-style: none;
	color: ${data.styles.accent};
	padding: 30px 15px 0 0;
	margin: auto;
	box-sizing: border-box;
	font-weight: bold;
`;

export const MainCon = styled.div`
	width: 100%;
	box-sizing: border-box;
`;
export const HeadMenuDiv = styled.div`
	text-align: left;
	padding-left: 0;
	right: 1%;
	width: 250px;
	box-sizing: border-box;
`;

export const HeadMenuLi = styled.li`
	float: left;
	font-size: 15px;
	width: 250px;
	box-sizing: border-box;
	cursor: pointer;
	&:hover {
		opacity: 0.3;
	}
	@media (min-width: 900px) {
		font-size: 22px;
	}
`;

export const ButtonLink = styled.button`
	display: block;
	background: none !important;
	border: none;
	padding: 0 !important;
	text-decoration: underline;
	cursor: pointer;
`;
