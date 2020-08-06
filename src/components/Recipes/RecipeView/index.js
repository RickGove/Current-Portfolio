import React, { useEffect } from 'react';

import { gsap } from 'gsap';

import { useSelector } from 'react-redux';

export default function RecipeView() {
	const details = useSelector((state) => state.recipeDetails);

	useEffect(() => {
		gsap.from('.an', { opacity: 0, x: -1000, stagger: 0.6, duration: 1.5 });
		gsap.from('.image-to-load', { opacity: 0, duration: 4, delay: 1 });
	});

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
		if (ings.length > 0) {
			return ings.map((item, i) => {
				return <li key={i}>-{item.name}</li>;
			});
		} else return;
	}

	function renderDirections() {
		return details.analyzedInstructions[0].steps.map((item, i) => {
			return (
				<li className="direction__li" key={i}>
					<h3>Step {i + 1}</h3>
					<p>{item.step}</p>
					<p>Step Ingredients</p>
					<ul>{renderStepIngredients(item.ingredients)}</ul>
				</li>
			);
		});
	}

	function renderDiet() {
		const diets = [
			'veryPopular',
			'cheap',
			'vegetarian',
			'vegan',
			'glutenFree',
			'dairyFree',
			'veryHealthy',
			'healthScore',
			'weightWatcherSmartPoints',
		];
		const dietsFull = [
			'Very Popular',
			'Cheap',
			'Vegetarian',
			'Vegan',
			'Gluten Free',
			'Dairy Free',
			'Very Healthy',
			'Health Score',
			'Weight Watcher Smart Points',
		];
		return diets.map((item, i) => {
			const name = diets[i];

			let result;
			if (details[name] === true) result = 'Yes';
			else if (details[name] === false) result = 'No';
			else result = details[name];
			return (
				<li key={i}>
					{dietsFull[i]}: {result}
				</li>
			);
		});
	}

	if (details.length === 0) {
		return <div>No recipe</div>;
	} else {
		return (
			<div className="recipe">
				<div
					className="recipe__title-wrap image-to-load"
					style={{ backgroundImage: `url('${details.image}')` }}>
					<h1 className="recipe__title an">
						<span>{details.title}</span>
					</h1>
				</div>
				<div className="recipe__details">
					<div className="recipe__info an">
						<span role="img" aria-label="time">
							🕒
						</span>
						<span className="recipe__info-data recipe__info-data--minutes">
							{details.readyInMinutes}
						</span>
						<span className="recipe__info-text"> minutes</span>
					</div>
					<div className="recipe__info an">
						<svg className="recipe__info-icon">
							<use href="img/icons.svg#icon-man"></use>
						</svg>
						<span className="recipe__info-data recipe__info-data--people">
							{details.servings}
						</span>
						<span className="recipe__info-text"> servings</span>
					</div>
					<div className="recipe__love an">
						<span role="img" aria-label="likes">
							👍
						</span>
						{details.aggregateLikes}
					</div>
				</div>

				<div className="recipe__ingredients an">
					<h2 className="heading-2">Ingredients</h2>

					<ul className="recipe__ingredient-list">{renderIngredients()}</ul>

					<button className="btn-small recipe__btn">
						<svg className="search__icon">
							<use href="img/icons.svg#icon-shopping-cart"></use>
						</svg>
						<span>Add all to shopping list</span>
					</button>
				</div>

				<div className="recipe__directions an">
					<h2 className="heading-2">Directions</h2>
					<ul>{renderDirections()}</ul>
				</div>

				<div className="recipe__more-info an">
					<h2 className="heading-2">Additional information</h2>
					<ul>{renderDiet()}</ul>
				</div>
			</div>
		);
	}
}
