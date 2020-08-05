import React from 'react';

import { useSelector } from 'react-redux';

export default function RecipeView() {
	const details = useSelector((state) => state.recipeDetails);

	function renderIngredients() {
		return details.extendedIngredients.map((item, i) => {
			return (
				<li key={i} className="recipe__item">
					<svg className="recipe__icon">
						<use href="img/icons.svg#icon-check"></use>
					</svg>
					<div className="recipe__count">{item.amount}</div>
					<div className="recipe__ingredient">
						<span className="recipe__unit">
							{item.unit}
							{'   '}
						</span>
						{item.name}
					</div>
				</li>
			);
		});
	}

	function renderStepIngredients(ings) {
		console.log(ings);
		console.log('ings above, item below *****');
		if (ings.length > 0) {
			return ings.map((item, i) => {
				console.log(item);
				return <li>{item.name}</li>;
			});
		} else return;
	}

	function renderDirections() {
		return details.analyzedInstructions[0].steps.map((item, i) => {
			console.log(item);
			return (
				<li key={i}>
					<h3>Step {i + 1}</h3>
					<p>{item.step}</p>
					<ul>{renderStepIngredients(item.ingredients)}</ul>
				</li>
			);
		});
	}

	function renderDiet() {
		console.log();
	}

	if (details.length === 0) {
		return <div>No recipe</div>;
	} else {
		return (
			<div className="recipe">
				{/* <img src="img/test-1.jpg" alt="Tomato" className="recipe__img" /> */}
				<h1 className="recipe__title">
					<span>{details.title}</span>
				</h1>
				<div className="recipe__details">
					<div className="recipe__info">
						<span role="img" aria-label="time">
							🕒
						</span>
						<span className="recipe__info-data recipe__info-data--minutes">
							{details.readyInMinutes}
						</span>
						<span className="recipe__info-text"> minutes</span>
					</div>
					<div className="recipe__info">
						<svg className="recipe__info-icon">
							<use href="img/icons.svg#icon-man"></use>
						</svg>
						<span className="recipe__info-data recipe__info-data--people">
							{details.servings}
						</span>
						<span className="recipe__info-text"> servings</span>
					</div>
					<div className="recipe__love">
						<span role="img" aria-label="likes">
							👍
						</span>
						{details.aggregateLikes}
					</div>
				</div>

				<div className="recipe__ingredients">
					<ul className="recipe__ingredient-list">{renderIngredients()}</ul>

					<button className="btn-small recipe__btn">
						<svg className="search__icon">
							<use href="img/icons.svg#icon-shopping-cart"></use>
						</svg>
						<span>Add all to shopping list</span>
					</button>
				</div>

				<div className="recipe__directions">
					<h2 className="heading-2">Directions</h2>
					<ul>{renderDirections()}</ul>
				</div>

				<div className="recipe__directions">
					<h2 className="heading-2">Dietary information</h2>
					<ul>{renderDiet()}</ul>
				</div>
			</div>
		);
	}
}
