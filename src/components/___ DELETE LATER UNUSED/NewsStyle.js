import styled from 'styled-components';
import { data } from './Data';

export const NewsCon = styled.div`
	max-width: 100%;
	overflow: hidden;
	box-sizing: border-bottom;
	padding: 15px;
	color: ${data.styles.textLight};
	background: ${data.styles.darkBg};
	border-bottom: ${data.styles.borderDef};
`;

export const NewsH1 = styled.h1`
	float: left;
`;

export const NewsForm = styled.form`
	float: right;
	max-width: 100%;
	overflow: hidden;
	box-sizing: border-bottom;
	margin-top: 30px;
`;

export const NewsInpEmail = styled.input`
	padding: 4px;
	height: 25px;
	width: 250px;
`;
