import styled from 'styled-components';
import { data } from '../data/Data';

export const ContactCon = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${data.styles.darkBg};
	border-bottom: ${data.styles.borderDef};
	border-top: ${data.styles.borderDef};
`;

export const ContactDiv = styled.div`
	grid-column-start: 2;
	padding: 75px;
	text-align: center;

	.anImg {
		display: inline-block;
	}

	.endTriggerContact {
		position: relative;
		top: 8rem;
	}
`;

export const ContactA = styled.a`
	color: black;
	font-size: 40px;
	text-decoration: none;
	&:hover {
		opacity: 0.5;
	}
`;

export const EmailImg = styled.img`
	height: auto;
	width: 50%;
	padding-right: 10px;
	padding-top: 45px;
	font-weight: bold;
	@media (min-width: 650px) {
		padding-right: 25px;
		padding-top: 90px;
		height: 60px;
		width: 60px;
	}
`;
