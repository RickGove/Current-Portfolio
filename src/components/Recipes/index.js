import React from 'react';

// import { useSelector } from 'react-redux';

import { RecipeContainer } from './style';

import Header from './Header';
import Results from './Results';
// import RecipeView from './RecipeView/';

export default function Recipes() {
	document.title = 'Rick Gove | Recipe Helper';

	// const focus = useSelector((state) => state.inputFocus);

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

	// if (focus) {
	// 	return (
	// 		<RecipeContainer>
	// 			<div className="body-div">
	// 				<div className="container">
	// 					<Header />
	// 					<Results />
	// 				</div>
	// 			</div>
	// 		</RecipeContainer>
	// 	);
	// } else {
	// 	return (
	// 		<RecipeContainer>
	// 			<div className="body-div">
	// 				<div className="container">
	// 					<Header />
	// 					<RecipeView />
	// 				</div>
	// 			</div>
	// 		</RecipeContainer>
	// 	);
	// }
}
