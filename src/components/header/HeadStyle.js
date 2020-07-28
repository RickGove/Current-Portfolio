import styled from 'styled-components';
import { data } from '../data/Data';

let HeadSizeFull = `@media (min-width: 1250px) {
	height: 70px;
}`;

let HeadSizeTablet = `@media (min-width: 768px) {
	height: 70px;
}`;

const mobile = `@media (max-width: 388px)`;

let HeadSizeMobile = `height: 70px`;

export const HeadCon = styled.div`
	* {
		box-sizing: border-box;
	}

	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	position: -webkit-sticky;
	position: sticky;
	text-align: left;
	height: 70px;
	top: 0;
	right: 0;
	left: 0;
	background: black;

	.first-right {
		margin-left: auto;
	}

	.last-right {
		padding-right: 1rem !important;
	}

	.logo {
		padding-left: 1rem;
		padding-right: 1rem;
		height: 50px;
		vertical-align: middle;

		${mobile} {
			height: 30px;
		}
	}

	.project-icon-link {
		padding: 0.3rem;
		vertical-align: middle;
	}

	.project__icon {
		vertical-align: middle;
		transition: 500ms;
		height: 2.8rem;
		cursor: pointer;

		:hover {
			opacity: 0.6;
			transform: scale(1.6) translateY(0.5em);
			transition: 500ms;
		}

		${mobile} {
			height: 1.9rem;
		}
	}

	.head-link {
		/* border: 2px solid maroon; */
		font-size: 1rem;
		padding-left: 1.2rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: white;
		cursor: pointer;
		vertical-align: middle;

		&:hover {
			opacity: 0.4;
		}

		@media (max-width: 760px) {
			display: none;
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
