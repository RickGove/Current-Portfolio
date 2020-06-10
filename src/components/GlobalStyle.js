import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { data } from './data/Data';

export const GlobalStyle = createGlobalStyle`
body {
    
    // font-family: Arial, Helvetica, sans-serif;
    // font-size:15px;
    // line-height:1.5; // Space between lines 
    // Can be shortened to:
    opacity: 0.95;
    font: 15px/1.5 Arial, Helvetica, sans-serif;
    padding:0;
    margin:0;
    background-color: ${data.styles.lightBg};
}
`;

export const HighlightSpan = styled.span`
	color: ${data.styles.accent};
	font-weight: bold;
`;

export const GlobalUL = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const Container = styled.div`
	width: 70%; // don't take up whole screen
	margin: auto; // don't align to left
	overflow: hidden; // no scrollbars i f something falls out of a div
`;

////// End of global  /////

export const UL = styled.ul``;

export const LI = styled.li``;

export const LogoImg = styled.img``;

export const Button1 = styled.button`
	height: 38px;
	background: ${data.styles.accent};
	border: 0;
	padding-left: 20px;
	padding-right: 20px;
	color: ${data.styles.textLight};
`;
