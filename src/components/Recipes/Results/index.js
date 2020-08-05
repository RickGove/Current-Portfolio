import React from 'react';

import { useSelector } from 'react-redux';

export default function Results() {
	const results = useSelector((state) => state.recipeResults);

	function renderResults() {
		if (results.length > 0) {
			let i = 0;
			let resultsToShow = [];

			while (i < 9) {
				resultsToShow.push(results[i]);
				i++;
			}
			return resultsToShow.map((item, i) => {
				let img = `https://spoonacular.com/recipeImages/${item.id}-90x90.jpg`;
				return (
					<li key={i}>
						<button className="results__link results__link--active">
							<div className="results__list-img-div">
								<img src={img} alt={item.title} />
							</div>
							<div className="results__data">
								<h4 className="results__name">{item.title}</h4>
								<div className="results__detail">
									<p className="results__author">
										<span role="img" aria-label="time">
											🕒 {item.readyInMinutes}m
										</span>
									</p>
									<p className="results__author">Serves: {item.servings}</p>
								</div>
							</div>
						</button>
					</li>
				);
			});
		} else return <div>No results yet...</div>;
	}

	return (
		<div className="results">
			<ul className="results__list">{renderResults()}</ul>
		</div>
	);
}
