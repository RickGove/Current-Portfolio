import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SuperHeroMainDiv } from '../style/';

function Reset() {
	// history
	const history = useHistory();

	useEffect(() => {
		window.setTimeout(() => {
			history.push('superherosmackdown');
		}, 900);
	});

	return (
		<SuperHeroMainDiv>
			<div className="grid-div"></div>
		</SuperHeroMainDiv>
	);
}

export default Reset;
