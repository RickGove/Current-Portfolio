import styled from 'styled-components';

import wallpaperA from '../../img/wp.jpg';

let wallPaperSettings = `
background-image: url(${wallpaperA});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-attachment: fixed;`;

export const LandingDiv = styled.div`
	${wallPaperSettings}
	height: calc(100vh - 4rem);
	grid-area: recipe;

	* {
		margin: 0;
		box-sizing: border-box;
		padding: 0;
		border: 0;
		text-align: center;
		color: white;
	}

	.wrap {
		background: rgba(0, 0, 0, 0.7);
	}

	.titles {
	}

	.quotes {
		flex-direction: row;
	}

	.quotes__quote {
		border: 1px solid grey;
		width: 30%;
		margin: auto;
		background: rgba(0, 0, 0, 0.4);
		height: 75%;
		justify-content: space-between;
		padding: 1.3rem;
	}

	div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	h1 {
		font-family: 'Playfair Display', serif;
		font-size: 4rem;
		color: white;
	}

	h2 {
		font-size: 2rem;
		font-family: 'Montserrat', sans-serif;
		color: white;
		width: 80%;
	}

	h3 {
		font-style: italic;
		font-family: 'Playfair Display', serif;
		color: white;
		font-size: 1.3rem;
		line-height: 1.6rem;
	}

	h4 {
		font-size: 1rem;
		font-family: 'Playfair Display', serif;
	}
`;
