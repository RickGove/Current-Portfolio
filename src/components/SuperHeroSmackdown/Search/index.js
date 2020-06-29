import React, { useState, useRef, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// import { newSearchLocation } from '../../../actions';

import { SearchDiv, Button, LetsGo } from './style/';

import HeroInfo from '../HeroInfo/';
import Loading from '../Loading';
import BattleScreen from '../BattleScreen';

import rickImg from '../../../img/RBG.jpg';

function Search() {
	// // state
	const [valueA, setValueA] = useState('Search For Hero A');
	const [valueB, setValueB] = useState('Search For Hero B');
	const [valueToSearch, setValueToSearch] = useState('');
	const [searchedValue, setSearchedValue] = useState('');
	const [searchDone, setSearchDone] = useState(false);
	const [canSearch, setCanSearch] = useState(true);
	const [fighterA, setFighterA] = useState('none');
	const [fighterB, setFighterB] = useState('none');
	const [ready, setReady] = useState(false);
	const [searchResults, setSearchResults] = useState(); //name, image, id, powerstats
	const [searchResultsB, setSearchResultsB] = useState(); //name, image, id, powerstats
	const [totalButtons, setTotalButtons] = useState([]);
	const [totalButtonsB, setTotalButtonsB] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const [suggestionsB, setSuggestionsB] = useState([]);
	const [highlighted, setHighlighted] = useState();
	const [highlightedB, setHighlightedB] = useState();

	// refs
	const inputA = useRef(null);
	const inputB = useRef(null);
	const resultsDivA = useRef(null);
	const resultsDivB = useRef(null);
	const battleArea = useRef(null);
	const searchArea = useRef(null);
	const readyBtn = useRef(null);

	const resultsDiv = useRef(null);

	// const reduxState = useSelector((state) => state.searchedLocation);

	// const dispatch = useDispatch();

	useEffect(() => {});

	const venomPic = `https://www.superherodb.com/pictures2/portraits/10/100/1042.jpg`;

	////////////////////////////////////////
	// arrwo keys
	///

	function handleEnter() {
		inputA.current.blur();
		if (highlighted !== undefined) {
			clearAllHighlights();
			// search highlghted button
			console.log(`Set ${searchResults[highlighted]} as chosen fighter
			`);
			setFighterA(searchResults[highlighted]);
			if (inputB.current !== null) {
				inputB.current.focus();
			}
			if (fighterB !== 'none') {
				setReady(true);
				window.setTimeout(() => {
					readyBtn.current.focus();
				}, 200);
			} else {
				if (inputB.current !== null) {
					inputB.current.focus();
				}
			}
		}
	}

	function handleEnterB() {
		inputB.current.blur();
		if (highlightedB !== undefined) {
			clearAllHighlightsB();

			// search highlghted button
			setFighterB(searchResultsB[highlightedB]);

			if (fighterA !== 'none') {
				setReady(true);
				window.setTimeout(() => {
					readyBtn.current.focus();
				}, 200);
			} else {
				if (inputA.current !== null) {
					inputA.current.focus();
				}
			}
		}
	}

	function handleEsc() {
		inputA.current.blur();
	}

	function handleEscB() {
		inputB.current.blur();
	}

	function handleArrowDown() {
		let array, el, high;

		// build list of buttons
		array = makeButtonsArray();

		// clear old hihglights
		clearOldHighlights(array);

		// move up
		if (highlighted === undefined) {
			el = array[0];
			high = 0;
		} else if (highlighted < array.length - 1) {
			el = array[highlighted + 1];
			high = highlighted + 1;
		}
		setHighlighted(high);
		if (el !== undefined) {
			let newStyle = `transform: scale(2);
			transition: 300ms;`;
			el.style = newStyle;
		}
	}

	function handleArrowDownB() {
		let array, el, high;

		// build list of buttons
		array = makeButtonsArrayB();

		// clear old hihglights
		clearOldHighlightsB(array);

		// move up
		if (highlightedB === undefined) {
			el = array[0];
			high = 0;
		} else if (highlightedB < array.length - 1) {
			el = array[highlightedB + 1];
			high = highlightedB + 1;
		}
		setHighlightedB(high);
		if (el !== undefined) {
			let newStyle = `transform: scale(2);
			transition: 300ms;`;
			el.style = newStyle;
		}
	}

	function handleArrowUp() {
		let array, el, high;

		// build list of buttons
		array = makeButtonsArray();

		// clear old hihglights
		clearOldHighlights(array);

		// move up
		if (highlighted === undefined) {
			el = array[array.length - 1];
			high = array.length - 1;
		} else if (highlighted < array.length && highlighted > 0) {
			el = array[highlighted - 1];
			high = highlighted - 1;
		}
		setHighlighted(high);
		if (el !== undefined) {
			let newStyle = `transform: scale(2);
			transition: 300ms;`;
			el.style = newStyle;
		}
	}

	function handleArrowUpB() {
		let array, el, high;

		// build list of buttons
		array = makeButtonsArrayB();

		// clear old hihglights
		clearOldHighlightsB(array);

		// move up
		if (highlightedB === undefined) {
			el = array[array.length - 1];
			high = array.length - 1;
		} else if (highlightedB < array.length && highlightedB > 0) {
			el = array[highlightedB - 1];
			high = highlightedB - 1;
		}
		setHighlightedB(high);
		if (el !== undefined) {
			let newStyle = `transform: scale(2);
			transition: 300ms;`;
			el.style = newStyle;
		}
	}

	function makeButtonsArray() {
		let el,
			newArray = [];

		//////////////////////////////////////
		/// add searches
		el = document.getElementById('but-0');
		if (el !== null) {
			// run through the list of suggestions and add each to the array
			for (let i = 0; i < searchResults.length; i++) {
				el = document.getElementById(`but-${i}`);
				if (el !== null) {
					newArray.push(el);
				}
			}
		}
		setTotalButtons(newArray);
		return newArray;
	}

	function makeButtonsArrayB() {
		let el,
			newArray = [];

		//////////////////////////////////////
		/// add searches
		el = document.getElementById('but-B-0');
		if (el !== null) {
			// run through the list of suggestions and add each to the array
			for (let i = 0; i < searchResultsB.length; i++) {
				el = document.getElementById(`but-B-${i}`);
				if (el !== null) {
					newArray.push(el);
				}
			}
		}
		setTotalButtonsB(newArray);
		return newArray;
	}

	function clearOldHighlights(a) {
		a.map((i) => {
			// toUnhighlight = document.getElementById(i);
			if (i !== null) {
				i.style = '';
			}
		});
	}

	function clearOldHighlightsB(a) {
		a.map((i) => {
			// toUnhighlight = document.getElementById(i);
			if (i !== null) {
				i.style = '';
			}
		});
	}

	function clearAllHighlights() {
		let array;

		// build list of buttons
		array = makeButtonsArray();

		// clear old hihglights
		clearOldHighlights(array);
	}

	function clearAllHighlightsB() {
		let array;

		// build list of buttons
		array = makeButtonsArrayB();

		// clear old hihglights
		clearOldHighlights(array);
	}

	////

	function showResultsB() {
		if (resultsDivB.current != undefined) {
			resultsDivB.current.style = 'display: block;';
			resultsDivB.current.style = 'height: 0px;';
			resultsDivB.current.style = 'box-shadow: 0 0 0 2pt yellow';
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
			resultsDivA.current.style = 'display: block;';
			// resultsDivA.current.style = 'height: auto;';
			resultsDivA.current.style = 'box-shadow: 0 0 0 2pt yellow';
		}
	}

	function hideResults() {
		window.setTimeout(() => {
			if (resultsDivA.current !== null) {
				resultsDivA.current.style = 'box-shadow: none';
				resultsDivA.current.style = 'display: none;';
			}
		}, 400);
	}

	function hideResultsB() {
		window.setTimeout(() => {
			if (resultsDivB.current !== null) {
				resultsDivB.current.style = 'box-shadow: none';
				resultsDivB.current.style = 'display: none;';
			}
		}, 400);
	}

	function addRick(x) {
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

	function hideSpinner() {
		let el = document.getElementById('loadA');
		el.style = 'display: none;';
		el = document.getElementById('loadB');
		el.style = 'display: none;';
	}

	function searchHeros(s, aOrB) {
		if (s !== '') {
			if (aOrB === 'A') {
				setSearchResults('searching');
			} else {
				setSearchResultsB('searching');
			}
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
					hideSpinner();
					if (response.data.response != 'error') {
						setCanSearch(true);
						response.data.results.map((a, b) => {
							let arr = [a.name, a.image.url, a.id, a.powerstats];
							results.push(arr);
						});
						setSearchDone(true);
						if (aOrB === 'A') {
							setSearchResults(results);
						} else {
							setSearchResultsB(results);
						}
						window.setTimeout(() => {
							setCanSearch(true);
						}, 500);
					} else {
						if (results[0][0] === 'Rick Gove') {
							if (aOrB === 'A') {
								setSearchResults(results);
							} else {
								setSearchResultsB(results);
							}

							window.setTimeout(() => {
								setCanSearch(true);
							}, 500);
						} else {
							let arr = ['nothing', 0, 0, 0];
							if (aOrB === 'A') {
								setSearchResults(results);
							} else {
								setSearchResultsB(results);
							}
							setCanSearch(true);
						}
					}
				})
				.catch((err) => {
					hideSpinner();

					setCanSearch(true);
					if (aOrB === 'A') {
						setSearchResults('');
					} else {
						setSearchResultsB('');
					}
					let arr = ['nothing', 0, 0, 0];
				});
		}
	}

	function handleChangeA(e) {
		e.preventDefault();
		const key = e.key;
		switch (key) {
			case 'Enter':
				handleEnter();
				break;
			case 'ArrowDown':
				handleArrowDown();
				break;
			case 'ArrowUp':
				handleArrowUp();
				break;
			case 'Escape':
				handleEsc();
				break;
			default:
				if (inputA.current.value !== '') {
					if (canSearch) {
						let x = inputA.current.value;
						window.setTimeout(() => {
							if (x === inputA.current.value) {
								let el = document.getElementById('loadA');
								el.style = 'display: block;';
								searchHeros(x, 'A');
							}
						}, 200);
					}
				}
		}
	}

	function handleChangeB(e) {
		e.preventDefault();
		const key = e.key;
		switch (key) {
			case 'Enter':
				handleEnterB();
				break;
			case 'ArrowDown':
				handleArrowDownB();
				break;
			case 'ArrowUp':
				handleArrowUpB();
				break;
			case 'Escape':
				handleEscB();
				break;
			default:
				if (inputB.current.value !== '') {
					if (canSearch) {
						let x = inputB.current.value;
						window.setTimeout(() => {
							if (x === inputB.current.value) {
								let el = document.getElementById('loadB');
								el.style = 'display: block;';
								searchHeros(x, 'B');
							}
						}, 400);
					}
				}
		}
	}

	function renderSearchA() {
		if (fighterA === 'none') {
			return (
				<div>
					<input
						autoFocus
						autoComplete="off"
						id="searchA"
						className="inputBar"
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
	}

	function handleClick(e) {
		setFighterA(searchResults[e.target.attributes.result.value]);

		if (fighterB !== 'none') {
			setReady(true);
			window.setTimeout(() => {
				readyBtn.current.focus();
			}, 200);
		} else {
			if (inputB.current !== null) {
				inputB.current.focus();
			}
		}
	}

	function handleClickB(e) {
		setFighterB(searchResultsB[e.target.attributes.result.value]);

		if (fighterA !== 'none') {
			setReady(true);
			window.setTimeout(() => {
				readyBtn.current.focus();
			}, 200);
		} else {
			if (inputA.current !== null) {
				inputA.current.focus();
			}
		}
	}

	function beginBattle() {
		console.log('battle begun');
		console.log(fighterA);
		console.log(fighterB);
	}

	function resultsMap() {
		if (searchResults != undefined) {
			let newArray = [];
			let el = document.getElementById('searchA');
			// el.focus();
			if (searchResults === '') {
				return (
					<li key="no-results">
						<Button>No Results</Button>
					</li>
				);
			} else if (searchResults === 'searching') {
				return (
					<li key="no-results">
						<Button>Searching</Button>
					</li>
				);
			} else {
				return searchResults.map((a, b) => {
					if (a[0] === 'Rick Gove') {
						let idName = `but-${b}`;
						return (
							<li key={a[2]}>
								<Button
									id={idName}
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
							let idName = `but-${b}`;
							return (
								<li key={a[2]}>
									<Button
										id={idName}
										length={a[0].length}
										result={b}
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

	function resultsMapB() {
		if (searchResultsB != undefined) {
			let newArray = [];
			let el = document.getElementById('searchB');
			if (searchResultsB === '') {
				return (
					<li key="no-results">
						<Button>No Results</Button>
					</li>
				);
			} else if (searchResultsB === 'searching') {
				return (
					<li key="no-results">
						<Button>Searching</Button>
					</li>
				);
			} else {
				return searchResultsB.map((a, b) => {
					if (a[0] === 'Rick Gove') {
						let idName = `but-B-${b}`;
						return (
							<li key={a[2]}>
								<Button
									id={idName}
									length={a[0].length}
									float="right"
									info={a}
									result={b}
									onClick={handleClickB}>
									<img src={rickImg} className="hero-img" />
									{a[0]}
								</Button>
							</li>
						);
					} else {
						if (b <= 5) {
							let idName = `but-B-${b}`;

							return (
								<li key={a[2]}>
									<Button
										id={idName}
										length={a[0].length}
										float="right"
										result={b}
										onClick={handleClickB}>
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
		return <ul id="myUL">{resultsMap()}</ul>;
	}

	function resultsB() {
		return <ul id="myUL">{resultsMapB()}</ul>;
	}

	function renderSearchB() {
		if (fighterB === 'none') {
			return (
				<div>
					<input
						id="searchB"
						autoComplete="off"
						className="inputBar"
						type="text"
						ref={inputB}
						onKeyUp={handleChangeB}
						onFocus={showResultsB}
						onBlur={hideResultsB}
						placeholder={setPlaceHolder(2)}
					/>
					<div id="results-div" ref={resultsDivB} className="results">
						{resultsB()}
					</div>
				</div>
			);
		}
	}

	function showFighterA() {
		if (fighterA !== 'none') {
			return (
				<React.Fragment>
					<h1>{fighterA[0]}</h1>
					<img className="fighter-b-img" src={fighterA[1]} />}
				</React.Fragment>
			);
		} else {
		}
	}

	function showFighterB() {
		if (fighterB !== 'none') {
			return (
				<React.Fragment>
					<h1>{fighterB[0]}</h1>
					<img className="fighter-b-img" src={fighterB[1]} />}
				</React.Fragment>
			);
		} else {
		}
	}

	function reset() {
		setFighterA('none');
		setFighterB('none');
		setSearchResults('');
		setSearchResultsB('');
		setReady(false);
		readyBtn.current.classList.remove = 'begin-button';
		readyBtn.current.classList.add = 'hidden';

		if (inputA.current !== null) {
			inputA.current.focus();
		}
	}

	return (
		<React.Fragment>
			<SearchDiv>
				<div className="search-a">
					{renderSearchA()}
					{showFighterA()}
					<div id="loadA" className="hidden">
						<Loading />
					</div>
				</div>
				<div id="vs">
					<button
						ref={readyBtn}
						className={ready ? 'begin-button' : 'hidden'}
						onClick={beginBattle}>
						Begin Battle
					</button>
					<button className="reset-button" onClick={reset}>
						X Reset Fighters
					</button>
				</div>
				<div className="search-b">
					{renderSearchB()}
					{showFighterB()}

					<div id="loadB" className="hidden">
						<Loading />
					</div>
				</div>
			</SearchDiv>
			<div>
				<BattleScreen />
			</div>
		</React.Fragment>
	);
}

export default Search;
