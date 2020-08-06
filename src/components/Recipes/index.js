import React from 'react';

import { useSelector } from 'react-redux';

import { RecipeContainer } from './style';

import Header from './Header';
import Results from './Results';
import LandingPage from './LandingPage';
import RecipeView from './RecipeView/';

export default function Recipes() {
	document.title = 'Rick Gove | Recipe Helper';

	const results = useSelector((state) => state.recipeResults);
	const recipe = useSelector((state) => state.recipeDetails);

	if (recipe.length !== 0) {
		return (
			<RecipeContainer>
				<div className="body-div">
					<div className="container">
						<Header />
						<RecipeView />
					</div>
				</div>
			</RecipeContainer>
		);
	} else if (results.length > 0) {
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
	} else {
		return (
			<RecipeContainer>
				<div className="body-div">
					<div className="container">
						<Header />
						<LandingPage />
					</div>
				</div>
			</RecipeContainer>
		);
	}
}
