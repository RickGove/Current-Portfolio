import React, { useState } from 'react';

// import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import x from '../RecipeView/offlineRecipe.json';
// import x from '../RecipeView/offlineRecipeA.json'
// import x from '../RecipeView/offlineRecipeA.json'

import { setRecipeDetails } from '../../../actions';

import LandingPage from './LandingPage';

export default function Results() {
	const results = useSelector((state) => state.recipeResults);
	const dispatch = useDispatch();

	const [firstResult, setFirstResult] = useState(0);
	const [firstPage, setFirstPage] = useState(true);
	const [lastPage, setLastPage] = useState(false);

	// async function getDetails(url) {
	// 	const key = `ca73346a72cb4ae09a9119aafe5026ee`;
	// 	const site = `https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${key}`;
	// 	try {
	// 		const res = await axios(site);
	// 		const details = res.data;
	// 		console.log(details);
	// 		dispatch(setRecipeDetails(details));
	// 	} catch (error) {
	// 		alert(error);
	// 	}
	// }

	function logFakeData() {
		dispatch(setRecipeDetails(x));
	}

	function limitRecipeTitle(title, limit = 20) {
		const newTitle = [];
		if (title.length > limit) {
			title.split(' ').reduce((acc, cur) => {
				if (acc + cur.length <= limit) {
					newTitle.push(cur);
				}
				return acc + cur.length;
			}, 0);

			// return the result
			return `${newTitle.join(' ')}...`;
		}
		return title;
	}

	function renderResults() {
		let i = 0;
		let resultsToShow = [];

		while (i < 10 && i + firstResult < results.length) {
			resultsToShow.push(results[firstResult + i]);
			i++;
		}
		return resultsToShow.map((item, i) => {
			let img = `https://spoonacular.com/recipeImages/${item.id}-90x90.jpg`;
			const newTitle = limitRecipeTitle(item.title);
			return (
				<li key={i}>
					<button
						recurl={item.sourceUrl}
						// onClick={() => getDetails(item.sourceUrl)}
						onClick={logFakeData}
						className="results__link">
						<div className="results__list-img-div">
							<img src={img} alt={newTitle} />
						</div>
						<div className="results__data">
							<h4 className="results__name">{newTitle}</h4>
							<div className="results__detail">
								<p className="results__author">
									<span role="img" aria-label="time">
										🕒
									</span>
									{'  '}
									{item.readyInMinutes}
									{'  '}m
								</p>
								<p className="results__author">Serves: {item.servings}</p>
							</div>
						</div>
					</button>
				</li>
			);
		});
	}

	function nextPage() {
		let nextFirst = firstResult + 10;
		if (nextFirst > results.length - 11) setLastPage(true);
		setFirstPage(false);
		setFirstResult(nextFirst);
	}

	function prevPage() {
		setLastPage(false);
		let nextFirst = firstResult - 10;
		console.log('nextFirst:', nextFirst);
		console.log('results.length:', results.length);
		if (nextFirst <= 0) setFirstPage(true);
		setFirstResult(nextFirst);
	}

	function renderPageBtns() {
		if (results.length > 0) {
			return (
				<div className="pagination-div">
					<button
						onClick={prevPage}
						className={
							firstPage ? 'page-btn hidden-page-button' : 'page-btn prev'
						}>
						<span role="img" aria-label="prev">
							◀️
						</span>
					</button>{' '}
					<button
						onClick={nextPage}
						className={
							lastPage ? 'page-btn hidden-page-button' : 'page-btn next'
						}>
						<span role="img" aria-label="prev">
							▶️
						</span>
					</button>
				</div>
			);
		} else {
			return <div></div>;
		}
	}
	if (results.length > 0) {
		return (
			<div className="results">
				<ul className="results__list">{renderResults()}</ul>
				{renderPageBtns()}
			</div>
		);
	} else return <LandingPage />;
}
