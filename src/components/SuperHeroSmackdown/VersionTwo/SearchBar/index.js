import React, { useRef, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setFighterA, setFighterB } from '../../../../actions';

import { Button, SearchDiv } from './style';

import { superHeroData, nameArray } from '../../data/data.js';

import Modal from '../Modal';

function SearchBar() {
	// redux
	const dispatch = useDispatch(),
		fighterA = useSelector((state) => state.fighterA),
		fighterB = useSelector((state) => state.fighterB),
		//refs
		input = useRef(),
		modal = useRef(),
		resultsDiv = useRef(),
		// state
		[value, setValue] = useState(''),
		[canSearch, setCanSearch] = useState(true),
		[searchResults, setSearchResults] = useState(null),
		[highlighted, setHighlighted] = useState();
	// useEffect

	useEffect(() => {
		// return function hideModal() {
		// 	if (modal.current) modal.current.style.display = 'none';
		// };
	});

	function resultsMap() {
		if (searchResults !== undefined) {
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
			} else if (searchResults === null) {
				return (
					<li key="new-search">
						<Button
							onClick={function () {
								if (input.current) input.current.focus();
							}}
							hover="false">
							Search For A Hero or Villain
						</Button>
					</li>
				);
			} else {
				return searchResults.map((a, b) => {
					if (b < searchResults.length) {
						let idName = `but-${b}`;
						return (
							<li key={a[2]}>
								<Button
									id={idName}
									length={a[0].length}
									result={b}
									float="right"
									onClick={handleClick}>
									{a[0]}
									<img alt={a[0]} result={b} src={a[1]} className="hero-img" />
								</Button>
							</li>
						);
					} else return <p></p>;
				});
			}
		}
	}

	function handleClick(e) {
		if (e.target.attributes.result.value !== undefined) {
			logFighterToState(searchResults[e.target.attributes.result.value]);
		}
	}

	function searchHeros(s) {
		let results = [];
		if (s !== '') {
			setSearchResults('searching');
			let response = searchData(s);
			setCanSearch(true);
			if (response === -1) {
				results = '';
			} else {
				response.forEach((a, b) => {
					if (a) {
						let arr = [a.name, a.images.sm, a.id, a.powerstats, response[b]];
						results.push(arr);
					}
				});
			}
			setSearchResults(results);
			window.setTimeout(() => {
				setCanSearch(true);
			}, 500);
		}
	}

	function searchData(q) {
		let result = linearSearch(nameArray, q);
		if (result !== -1) {
			return pullObjResults(result);
		} else return -1;
	}

	function linearSearch(arr, q) {
		let newQ = q.toLowerCase();
		let subLen = q.length;
		let i = 0,
			val;
		for (val of arr) {
			let valShort = val.substring(0, subLen);
			if (valShort === newQ) {
				return i;
			}
			i++;
		}
		return -1;
	}

	function pullObjResults(i) {
		let data = [
			superHeroData[i],
			superHeroData[i + 1],
			superHeroData[i + 2],
			superHeroData[i + 3],
			superHeroData[i + 4],
			superHeroData[i + 5],
			superHeroData[i + 6],
			superHeroData[i + 7],
			superHeroData[i + 8],
			superHeroData[i + 9],
			superHeroData[i + 10],
			superHeroData[i + 11],
		];
		return data;
	}

	function makeButtonsArray() {
		let el,
			newArray = [];
		el = document.getElementById('but-0');
		if (el !== null) {
			for (let i = 0; i < searchResults.length; i++) {
				el = document.getElementById(`but-${i}`);
				if (el !== null) {
					newArray.push(el);
				}
			}
		}
		return newArray;
	}

	function updateState(e) {
		setValue(e.target.value);
	}

	function handleChange(e) {
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
				if (input.current.value !== '') {
					if (canSearch) {
						let x = input.current.value;
						window.setTimeout(() => {
							if (x === input.current.value) {
								searchHeros(x);
							}
						}, 200);
					}
				}
		}
	}

	function handleEnter() {
		input.current.blur();
		if (highlighted !== undefined) {
			clearAllHighlights();
			logFighterToState(searchResults[highlighted]);
		}
	}

	function logFighterToState(choice) {
		if (fighterA && fighterB) alert('both fighters set to state...');
		if (!fighterA) dispatch(setFighterA(choice));
		else dispatch(setFighterB(choice));
		reset();
	}

	function clearOldHighlights(a) {
		a.forEach((i) => {
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

	function handleEsc() {
		input.current.blur();
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
			let newStyle = `transform: scale(1.2);
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
			let newStyle = `transform: scale(1.2);
        transition: 300ms;`;
			el.style = newStyle;
		}
	}

	function showResults() {
		if (modal.current) modal.current.style.display = 'unset';

		if (resultsDiv.current !== undefined) {
			if (resultsDiv.current) resultsDiv.current.style = 'display: block;';
			if (resultsDiv.current) resultsDiv.current.style = 'height: 0px;';
			window.setTimeout(() => {
				// resultsDiv.current.classList.remove('results');
				if (resultsDiv.current)
					resultsDiv.current.classList.add('results-shown');
				if (resultsDiv.current) resultsDiv.current.classList.add('results');
			}, 200);
		}
	}

	function hideResults() {
		if (modal.current) modal.current.style.display = 'none';
	}

	function delayFocus() {
		console.log('ran');
		if (!fighterA || !fighterB) {
			window.setTimeout(() => {
				if (input.current) input.current.focus();
			}, 2500);
		}
	}

	function reset() {
		setValue('');
		setSearchResults(null);
		setHighlighted(null);
		input.current.focus();
	}

	delayFocus();
	return (
		<SearchDiv>
			<div className="modal" ref={modal}>
				<Modal />
			</div>

			<div>
				<form>
					<div className="input-container">
						<input
							value={value}
							autoFocus
							autoComplete="off"
							id="searchA"
							type="search"
							ref={input}
							onChange={updateState}
							onKeyUp={handleChange}
							onFocus={showResults}
							onBlur={hideResults}
							placeholder=" . . . "
							className="input-on-super"
						/>
						<button className="clear-search__btn" type="button" onClick={reset}>
							X
						</button>
					</div>
				</form>
			</div>
			<div id="results-div" ref={resultsDiv} className="results results-shown">
				<ul className="results-ul">{resultsMap()}</ul>
			</div>
		</SearchDiv>
	);
}

export default SearchBar;
