import React from 'react';

import { FourOhFourDiv } from './style/';

function noSite() {
	return (
		<FourOhFourDiv>
			<h1>Error 404: Site Not Found</h1>
			<ul>
				<li>
					<a href="/">GO HOME</a>
				</li>
				<li>
					<a href="/#/weather">GO TO WEATHER</a>
				</li>
				<li>
					<a href="/#/superherosmackdown">GO TO SUPER HERO SMACKDOWN</a>
				</li>
			</ul>
		</FourOhFourDiv>
	);
}

export default noSite;
