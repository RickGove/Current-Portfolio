import React, { useState } from 'react';

import { useSelector } from 'react-redux';

export default function Ingredients() {
	const details = useSelector((state) => state.recipeDetails);
	const [metric, setMetric] = useState(true);

	function countDecimals(i) {
		if (Math.floor(i.valueOf()) === i.valueOf()) return 0;
		return i.toString().split('.')[1].length || 0;
	}

	function convertAll() {
		setMetric(!metric);
	}

	function shortenNumbers(i) {
		let newValue = parseFloat(i);
		if (countDecimals(i) === 0) return i;
		if (newValue > 100) newValue = Math.round(newValue);
		else newValue = newValue.toFixed(1);
		return newValue;
	}

	function renderIngredients() {
		if (!metric) {
			return details.extendedIngredients.map((item, i) => {
				const ingImg = `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`;
				return (
					<li key={i} className="recipe__item">
						<img className="recipe__icon" src={ingImg} alt={item} />
						<div className="recipe__count">
							{shortenNumbers(item.measures.us.amount)}
						</div>
						<div className="recipe__ingredient">
							<span className="recipe__unit">
								{item.measures.us.unitLong}
								{'   '}
							</span>
							{item.name}
						</div>
					</li>
				);
			});
		} else {
			let unitLong, amount;
			return details.extendedIngredients.map((item, i) => {
				unitLong = item.measures.metric.unitLong;
				amount = shortenNumbers(item.measures.metric.amount);
				const ingImg = `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`;

				if (item.consistency === 'solid') {
					if (
						item.measures.metric.unitLong === 'liters' ||
						item.measures.metric.unitLong === 'milliliters' ||
						item.measures.metric.unitLong === 'liter' ||
						item.measures.metric.unitLong === 'milliliter'
					) {
						amount = parseFloat(item.measures.us.amount) * 150;
						unitLong = 'grams';
					}
				}
				return (
					<li key={i} className="recipe__item">
						<img className="recipe__icon" src={ingImg} alt={item} />
						<div className="recipe__count">{amount}</div>
						<div className="recipe__ingredient">
							<span className="recipe__unit">
								{unitLong}
								{'   '}
							</span>
							{item.name}
						</div>
					</li>
				);
			});
		}
	}

	return (
		<React.Fragment>
			<div className="ingredients-title">
				<h2 className="heading-2">Ingredients</h2>
				<button className="btn-small recipe__btn" onClick={convertAll}>
					{metric ? 'Metric' : 'Imperial'}
				</button>
			</div>

			<ul className="recipe__ingredient-list">{renderIngredients()}</ul>

			<button className="btn-small recipe__btn">
				<svg className="search__icon">
					<use href="img/icons.svg#icon-shopping-cart"></use>
				</svg>
				<span>Add all to shopping list</span>
			</button>
		</React.Fragment>
	);
}
