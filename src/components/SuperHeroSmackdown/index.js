import React, { useEffect } from 'react';

import { SuperHeroMainDiv as Wrapper } from './style/';

import Title from './Title/';
import Search from './Search/';

function SuperHeroSmackdown() {
	useEffect(() => {
		//change title based on site
		document.title = 'Rick Gove | Super Hero Smackdown';
	});

	return (
		<React.Fragment>
			<Wrapper>
				<div className="grid-div">
					<div className="title">
						<Title />
					</div>
					<div className="search">
						<Search />
					</div>
				</div>
			</Wrapper>
		</React.Fragment>
	);
}

export default SuperHeroSmackdown;
