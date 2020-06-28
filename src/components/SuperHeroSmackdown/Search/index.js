import React, { useState, useRef, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// import { newSearchLocation } from '../../../actions';

import { SearchDiv, Button } from './style/';

import HeroInfo from '../HeroInfo/';
import Loading from '../Loading';

import rickImg from '../../../img/RBG.jpg';

function Search() {
	// // state
	const [valueA, setValueA] = useState('Search For Hero A');
	const [valueB, setValueB] = useState('Search For Hero B');
	const [valueToSearch, setValueToSearch] = useState('');
	const [searchedValue, setSearchedValue] = useState('');
	const [searchDone, setSearchDone] = useState(false);
	const [canSearch, setCanSearch] = useState(true);
	const [heroA, setHeroA] = useState([]);
	const [heroB, setHeroB] = useState([]);
	const [searchResults, setSearchResults] = useState(); //name, image, id, powerstats

	// refs
	const inputA = useRef(null);
	const inputB = useRef(null);
	const resultsDivA = useRef(null);
	const resultsDivB = useRef(null);

	const resultsDiv = useRef(null);

	// const reduxState = useSelector((state) => state.searchedLocation);

	// const dispatch = useDispatch();

	useEffect(() => {});

	const venomPic = `https://www.superherodb.com/pictures2/portraits/10/100/1042.jpg`;

	function showResultsB() {
		if (resultsDivB.current != undefined) {
			resultsDivB.current.style = 'display: block;';
			resultsDivB.current.style = 'height: 0px;';
			resultsDivB.current.style =
				'box-shadow: 0 0 0 2pt rgba(255, 108, 35, 0.7)';
			window.setTimeout(() => {
				// resultsDiv.current.classList.remove('results');
				resultsDivB.current.classList.add('results-shown');
			}, 200);
		}
	}

	function setPlaceHolder(n) {
		return `Search Fighter ${n}`;
	}

	function showResultsA() {
		if (resultsDivA.current != undefined) {
			// resultsDivA.current.style = 'display: block;';
			// resultsDivA.current.style = 'height: auto;';
			resultsDivA.current.style =
				'box-shadow: 0 0 0 2pt rgba(255, 108, 35, 0.7)';

			// window.setTimeout(() => {
			// resultsDiv.current.classList.remove('results');
			// resultsDivA.current.classList.add('results-shown');
			// }, 200);
		}
	}

	function hideResults() {
		resultsDivA.current.style = 'box-shadow: none';
		resultsDivB.current.style = 'box-shadow: none';

		// resultsDivA.current.style = 'display: none;';
		// resultsDivA.current.classList.add('results');
		// resultsDivA.current.classList.remove('results-shown');
		// resultsDivB.current.style = 'display: none;';
		// resultsDivB.current.classList.add('results');
		// resultsDivB.current.classList.remove('results-shown');
	}

	function addRick(x) {
		// let x = s.toLowerCase();
		console.log(x);
		if (
			x === 'r' ||
			x === 'ri' ||
			x === 'ric' ||
			x === 'rick' ||
			x === 'rick ' ||
			x === 'rick g' ||
			x === 'rick go' ||
			x === 'rick gov' ||
			x === 'rick gove'
		) {
			return true;
		} else {
			return false;
		}
	}

	function searchHeros(s) {
		const key = `684260262142283`;
		const cors = `https://cors-anywhere.herokuapp.com/`;
		const site = `${cors}https://superheroapi.com/api/${key}/search/${s}`;
		// const site = `https://superheroapi.com/api/${key}/search/${s}`;

		const results = [];
		let name = s.toLowerCase();
		let rick = addRick(name);
		if (rick) {
			let arr = ['Rick Gove', 'x', '6666666', 'GOD'];
			results.push(arr);
		}
		axios
			.get(site)
			.then((response) => {
				if (response.data.response != 'error') {
					setCanSearch(false);
					response.data.results.map((a, b) => {
						let arr = [a.name, a.image.url, a.id, a.powerstats];
						results.push(arr);
					});
					setSearchDone(true);
					setSearchResults(results);

					window.setTimeout(() => {
						setCanSearch(true);
					}, 500);
				} else {
					if (results[0][0] === 'Rick Gove') {
						setSearchResults(results);

						window.setTimeout(() => {
							setCanSearch(true);
						}, 500);
					} else {
						console.log('axios was called, but with no results');
						let arr = ['nothing', 0, 0, 0];
						setSearchResults('');
						setCanSearch(true);
					}
				}
			})
			.catch((err) => {
				alert(`There appears to be an error on the super hero API: ${err}`);
			});
	}

	function axiosCall(y) {
		setCanSearch(false);
		if (y === '') {
			console.log('no value');
			setSearchResults('');
			setCanSearch(true);
		} else {
			searchHeros(y);
		}
	}

	function search(x) {
		axiosCall(x);
	}

	function handleChangeA() {
		if (canSearch) {
			let x = inputA.current.value;
			window.setTimeout(() => {
				if (x === inputA.current.value) {
					search(x);
				}
			}, 400);
		}
	}

	function handleChangeB() {
		// if (canSearch) {
		// 	let x = inputA.current.value;
		// 	window.setTimeout(() => {
		// 		if (x === inputA.current.value) {
		// 			search(x);
		// 		}
		// 	}, 800);
		// }
	}

	function renderSearchA() {
		return (
			<div>
				<input
					autoFocus
					id="searchA"
					type="text"
					ref={inputA}
					onKeyUp={handleChangeA}
					onFocus={showResultsA}
					onBlur={hideResults}
					placeholder={setPlaceHolder(1)}
				/>
				<div id="results-div" ref={resultsDivA} className="results-shown">
					<ul>{resultsA()}</ul>
				</div>
			</div>
		);
	}

	function handleClick(e) {
		console.log('han click fired');
		console.log(e.target.textContent);
	}

	function resultsMap(x) {
		if (x === 'A' && searchResults != undefined) {
			if (searchResults === '') {
				return (
					<li key="no-results">
						<Button>No Results</Button>
					</li>
				);
			} else {
				return searchResults.map((a, b) => {
					if (a[0] === 'Rick Gove') {
						return (
							<li key={a[2]}>
								<Button
									length={a[0].length}
									float="right"
									onClick={handleClick}>
									<img src={rickImg} className="hero-img" />
									{a[0]}
								</Button>
							</li>
						);
					} else {
						if (b <= 5) {
							return (
								<li key={a[2]}>
									<Button
										length={a[0].length}
										float="right"
										onClick={handleClick}>
										<img src={a[1]} className="hero-img" />
										{a[0]}
									</Button>
								</li>
							);
						}
					}
				});
			}
		}
	}

	function resultsA() {
		return <ul id="myUL">{resultsMap('A')}</ul>;
	}

	function resultsB() {
		return <ul id="myUL">{resultsMap('B')}</ul>;
	}

	function renderSearchB() {
		return (
			<div>
				<input
					id="searchA"
					type="text"
					ref={inputB}
					onKeyUp={handleChangeB}
					onFocus={showResultsB}
					onBlur={hideResults}
					placeholder={setPlaceHolder(2)}
				/>
				<div id="results-div" ref={resultsDivB} className="results">
					{resultsB()}
				</div>
			</div>
		);
	}

	return (
		<SearchDiv>
			<div className="search-a">
				{renderSearchA()}
				<Loading />
			</div>
			<div id="vs"></div>
			<div className="search-b">
				{renderSearchB()}
				<Loading />
			</div>
		</SearchDiv>
	);
}

export default Search;
