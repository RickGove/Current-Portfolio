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
	overflow: hidden;
	width: 100vw;
	height: 100vh;

	* {
		@import url('../../../../font');
		font-family: 'Bangers', cursive;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.hide-search {
		opacity: 0;
		transform: scale(0);
		transition: 1s;
	}

	.show-search {
		opacity: 1;
		transform: scale(1);
		transition: 1s;
	}

	.grid-div {
		display: flex;
		flex-direction: column;
		background: white;
		${wallPaperSettings};
		height: 100vh;
		width: 100%;
	}

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
		margin-top: -1px;
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
