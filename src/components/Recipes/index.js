import React from 'react';

import { RecipeContainer } from './style';

import Header from './Header';
import Results from './Results';

export default function Recipes() {
	document.title = 'Rick Gove | Recipe Helper';
	return (
		<RecipeContainer>
			<div className="body-div">
				<div className="container">
					<Header />
					<Results />
				</div>
			</div>
		</RecipeContainer>
	);
}
