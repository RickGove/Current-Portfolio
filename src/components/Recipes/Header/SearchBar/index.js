import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

// import axios from 'axios';

import offlineResults from './offlineResults.json';

import { setRecipeResults, setInputFocus } from '../../../../actions';

export default function SearchBar() {
	const [value, setValue] = useState('');
	// const key = `ca73346a72cb4ae09a9119aafe5026ee`;
	const dispatch = useDispatch();

	function fakeSearch() {
		dispatch(setRecipeResults(offlineResults));
		const formEl = document.getElementById('search-form');
		formEl.blur();
	}

	// async function getResults() {
	// 	try {
	// 		const res = await axios(
	// 			`https://api.spoonacular.com/recipes/search?query=${value}&number=500&apiKey=${key}`

	// 		);
	// 		const result = res.data.results;
	// 		dispatch(setRecipeResults(result));
	// 		console.log(result);
	// 	} catch (error) {
	// 		alert(error);
	// }
	// const formEl = document.getElementById('search-form');
	// formEl.blur();
	// }

	function setFocus() {
		dispatch(setInputFocus(true));
	}

	function setBlur() {
		dispatch(setInputFocus(false));
	}

	return (
		<div className="search-container">
			<form
				onFocus={setFocus}
				onBlur={setBlur}
				// onSubmit={getResults}
				onSubmit={fakeSearch}
				className="search">
				<span role="img" aria-label="search">
					🔎
				</span>
				<input
					id="search-form"
					autoFocus={true}
					placeholder={'1,000,000+ Recipes'}
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					type="text"
					className="search__field"
				/>
				<button className="btn search__btn">Search</button>
			</form>
		</div>
	);
}
