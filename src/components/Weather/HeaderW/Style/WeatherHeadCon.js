import styled from 'styled-components';

// let border = `none`;
let border = `solid`;

let blue = `#1E7CFF`;

const media1100 = `@media (max-width: 1100px)`;
const media850 = `@media (max-width: 850px)`;

export const WeatherHeadCon = styled.div`
	
	* {
		box-sizing: border-box;
		color: ${blue};
	}

	
	position: sticky;
	top: 0;
	width: 100vw;
	height: 4.3rem;
	display: grid;
	grid-template-columns: auto 30% 3% 35% auto 15% auto;
	grid-template-areas: '. logo . search . switch .';
	grid-column-gap: 0.2rem;
	justify-items: center;
	align-items: center;
	background: black;

	
	.hide__modal {
		position: fixed;
		opacity: 0;
		transform: scale(0);
		width: 100%;
		height: 100%;
		transition: 0.5s;
		/* border: 2px ${border} blue; */

	}

	.show__modal {
		position: fixed;
		background: black;
		opacity: 0.95;
		z-index: 10;
		width: 100%;
		height: 100%;
		/* border: 2px ${border} red; */
		transform: scale(1);
		transition: transform 0.5s, opacity 1s;
	}

	

	#C{
		@media (max-width: 1100px){
		}
	}

	.logo {
		grid-area: logo;
		height: auto;
		width: 85%;
		z-index: 50;
	}

	.gps {
		grid-area: gps;
		width: 100%;
	}

	.temp {
		grid-area: temp;
		font-size: 2.5rem;

		${media850} {
			font-size: 1rem;
		}

	

	}

	.flag {
		grid-area: flag;
		width: 100%;
	}

	.weather-image {
		grid-area: weather-image;
	}

	

	

	.search-container {
		width: 100%;
		margin:0;
		padding: 0;
		grid-area: search;
		align-items: start;
		position: relative;
		z-index: 50;
	}

	.search {
		background: white;
		border: none;
		width: 100%;
		height: 40%;
		padding: 0.5rem;
		font: inherit;
		font-size: 17px;
		color: black;
		border-radius: 10px;
		z-index:50;
		font-weight: bold;
	}

	.search:focus {
		
		outline: none;
		border-radius: 10px 10px 0 0;
		box-shadow: 0 0 0 3pt red;
		caret-color: ${blue};

	}

	

	.search:focus + div {
		transform: scale(1);
		transition: 350ms;
	}

	.search__results {
		border-top: none;
		z-index:50;
		position: absolute;
		height: auto;
		width: auto;
		background: white;
		color: black;
		padding: 1px;
		margin-top: 1px;
		transform: scale(0);
		transition: 350ms;
		border-radius: 0 0 10px 10px;
		${media850}{
			width: auto;
		}

	}

	.search__results ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.search__results button {
		/* border: 0.5px solid ${blue}; */
		border: none;
		border-radius: 10px;
		text-align: left;
		background: white;
		width: 100%;
		height: auto;
		z-index: 50;
		color: black;
		/* text-align: left; */
		/* font: inherit; */
		font-size: 1rem;
		cursor: pointer;
		padding: 8px;
	}

	.search__results button:hover  {
		background: grey;
		opacity: 0.8;
	}

	.currently__selected {
		color: red;
		background: grey;
		opacity: 0.8;
	}

	

	.highlight{
		background-color: black;
		opacity: 0.5;
	}

	.search__results img {
		margin-left: 1rem;
		height: 1rem;
		text-align: left;
		
		${media850} {
			height:0.5rem
		}

		
	}

	

	.switch {
		grid-area: switch;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.switch span {
		/* opacity: 0.8; */
	}

	.system-choice {
		grid-area: switch;
		font-weight: bold;
		font-size: 1.7rem;
	}

	
`;
