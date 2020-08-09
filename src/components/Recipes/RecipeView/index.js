import React, { useEffect } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { useSelector } from 'react-redux';

import Ingredients from '../Ingredients';

export default function RecipeView() {
	const details = useSelector((state) => state.recipeDetails);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.an', { opacity: 0, x: -1000, stagger: 0.6, duration: 1.5 });
		gsap.from('.image-to-load', { opacity: 0, duration: 4, delay: 1 });
		gsap.from('.recipe__more-info', {
			opacity: 0,
			duration: 5,
			scrollTrigger: '.recipe__more-info',
		});
	});

	function renderStepIngredients(ings) {
		if (ings.length > 0) {
			return ings.map((item, i) => {
				const ingImg = `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`;

				return (
					<li key={i}>
						<img className="recipe__icon" src={ingImg} alt={item} />
						{item.name}
					</li>
				);
			});
		} else return;
	}

	function renderDirections() {
		return details.analyzedInstructions[0].steps.map((item, i) => {
			return (
				<li className="direction__li" key={i}>
					<h3>Step {i + 1}</h3>
					<p>{item.step}</p>
					<p className="step-ingredients">Step Ingredients</p>
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
					<span className="add-info__span">{dietsFull[i]}</span>: {result}
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
					<div className="recipe__love recipe__love-title an">
						<h1 className="recipe__title an">
							<span>{details.title}</span>
						</h1>
					</div>
					<div className="recipe__details">
						<div className="recipe__love an">
							<span role="img" aria-label="time">
								🕒
							</span>
							<span className="recipe__info-text recipe__info-data recipe__info-data--minutes">
								{details.readyInMinutes}
							</span>
							<span className="recipe__info-text"> minutes</span>
						</div>

						<div className="recipe__love an">
							<span className="recipe__info-text recipe__info-data recipe__info-data--people">
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
				</div>

				<div className="recipe__ingredients ">
					<Ingredients />
				</div>

				<div className="recipe__directions ">
					<h2 className="heading-2">Directions</h2>
					<ul>{renderDirections()}</ul>
				</div>

				<div className="recipe__more-info ">
					<h2 className="heading-2">Additional information</h2>
					<ul className="add-info">{renderDiet()}</ul>
				</div>
			</div>
		);
	}
}
