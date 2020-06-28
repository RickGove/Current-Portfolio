import styled from 'styled-components';

import vs from '../../img/vs.png';

const widthV = 11;
const widthVMobile = 7;
const width = `${widthV}rem`;
const widthMobile = `${widthVMobile}rem`;

const widthUlV = widthV - 2;
const widthUl = `${widthUlV}rem`;
const widthUlVMobile = widthVMobile - 2;
const widthUlMobile = `${widthUlVMobile}rem`;

const heroHeight = `3rem`;
const heroHeightMobile = `1.7rem`;

const imageTrans = `800ms`;

const border = `solid`;
// const border=`none`;

const mobile = '@media (max-width: 850px)';

export const SearchDiv = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Gentium+Book+Basic&display=swap');

	display: grid;
	grid-template-columns: 37% auto 37%;
	grid-template-areas: 'search-a vs search-b';
	height: 100%;
	grid-gap: 1rem;
	text-align: center;
	font-family: 'Gentium Book Basic', serif;
	

	#title {
		
		font-size: 2rem;
	${mobile}{
		font-size: 1.4rem;

	}


	}
	
	#vs {
		grid-area: vs;
		background: url(${vs});
		background-size: cover;
		background-repeat: no-repeat;
		overflow: visible;
		background-position: center; 
	}
		
		
	
	.search-a {
		grid-area: search-a;
		width: 100%;
		background-color: blue;
		border-radius: 1.5rem;	
		box-shadow: 10px 10px 5px #aaaaaa
	}

	.search-b {
		border-radius: 2rem;	
		grid-area: search-b;
		border-radius: 1.5rem;
		background-color: red;
		box-shadow: 10px 10px 5px #aaaaaa
	}

	#searchA {
		/* input */
		width: ${width};
		padding: 0.5rem;
		margin-top:0.5rem;
		border-radius: 8px 8px 8px 8px;

		&:focus {
			border-radius: 8px 8px 0 0;
			box-shadow: 0 0 0 5pt yellow;
			outline: red;
		}

		${mobile}{
		width: ${widthMobile};

		}
	}

	#results-div {
		
		box-shadow: 0 0 0 2pt rgba(255, 108, 35, 0.7);
	}

	.results {
		/* div */
		border-radius: 0 0 8px 8px;
		height: 0px;
		display: none;
		width: 0px;
		background-color: grey;

	}

	.results-shown {
		height: auto;
		margin: auto;
		width: ${width};
		display: block;
		/* display: block; */
		${mobile}{
		width: ${widthMobile};

		}
	}

	#myUL {
		/* ul */
		/* margin: 2px; */
		/* width: ${widthUl}; */
		width: 100%;
		background-color: grey;

		${mobile}{
		width: 100%;

		}

	}

	

	

	.heroB {
		border: 3px solid orange;
	}

	#heroA {
		border: 2px solid red;
	}
`;

export const Button = styled.button`
	vertical-align: middle;
	width: 100%;
	font: inherit;
	text-align: left;
	padding: 1rem;
	cursor: pointer;
	transform: scale(1);
	transition: 300ms;
	line-height: 50px;
	padding: 0.1rem;
	font-size: ${(props) => (props.length > 8 ? '1rem' : '1.5rem')};
	text-align: center;
	z-index: 10;

	${mobile} {
	font-size: ${(props) => (props.length > 8 ? '0.5rem' : '0.8rem')};
	line-height: 30px;
	}
	@media (hover: hover) {
		&:hover {
		transform: scale(2);
		transition: 300ms;
	}
	/* &:hover .hero-img {
		position: fixed;
		transition: ${imageTrans};
		transform: ${(props) =>
			props.float === 'right'
				? 'scale(2) translateX(6rem)'
				: 'scale(2) translateX(-3rem)'};
	} */
	}
	
	}


	.hero-img {
		/* z-index: 10000; */
		height: ${heroHeight};
		width: ${heroHeight};
		border-radius: 2rem;
		float: ${(props) => props.float};
		vertical-align: middle;
		transition: ${imageTrans};
		transform: scale(1) translateX(0);

		${mobile}{
		height: ${heroHeightMobile};
		width: ${heroHeightMobile};
		

		}
	}
`;

Button.defaultProps = { float: 'right' };
