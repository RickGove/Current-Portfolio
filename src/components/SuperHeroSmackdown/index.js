import React, { useState } from 'react';

import { SuperHeroMainDiv as Wrapper } from './style/';

import Title from './Title/';
import Search from './Search/';

function SuperHeroSmackdown() {
	const [state, setState] = useState('change later if needed');

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
