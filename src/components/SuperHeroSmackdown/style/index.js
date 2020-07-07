import styled from 'styled-components';

import wallpaper from '../img/wp.jpg';

let wallPaperSettings = `
background-image: url(${wallpaper});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-attachment: fixed;`;

export const SuperHeroMainDiv = styled.div`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
		font-family: 'Bangers', cursive;
	}
	
	overflow: hidden;
	width: 100vw;
	height: 100vh;

	.grid-div {
		display: flex;
		flex-direction: column;
		background: white;
		${wallPaperSettings}
		height: 100vh;
		width: 100%;

		
	.gap-top {
	}

	.title {
		width: 100%;
	}

	#myInput {
		width: 100%;
		font-size: 16px;
		padding: 12px 20px 12px 40px;
		border: 1px solid #ddd;
	}

	#myUL {
		list-style-type: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	#myUL li a {
		border: 1px solid #ddd;
		margin-top: -1px; /* Prevent double borders */
		background-color: #f6f6f6;
		padding: 12px;
		text-decoration: none;
		font-size: 18px;
		color: black;
		display: block;
	}

	#myUL li a:hover:not(.header) {
		background-color: #eee;
	}
	.search {
		height: 100%;
		width: 100%;
	}

	.heroA {
		height: 100%;
		width: 100%;
	}

	.heroB {
		height: 100%;
		width: 100%;
	}

	.gap-bottom {
	}
`;
