import React, { useEffect, useState } from 'react';

import { SuperHeroMainDiv as Wrapper } from './style/';

import Title from './Title/';
import Search from './Search/';

function SuperHeroSmackdown() {
	//state
	const [showSearch, setShowSearch] = useState(false);

	useEffect(() => {
		//change title based on site
		document.title = 'Rick Gove | Super Hero Smackdown';
		window.setTimeout(() => {
			setShowSearch(true);
		}, 3000);
	});

	return (
		<React.Fragment>
			<Wrapper>
				<div className="grid-div">
					<div className="title">
						<Title />
					</div>
					<div className={showSearch ? 'show-search search' : 'hide-search'}>
						<Search />
					</div>
				</div>
			</Wrapper>
		</React.Fragment>
	);
}

export default SuperHeroSmackdown;
