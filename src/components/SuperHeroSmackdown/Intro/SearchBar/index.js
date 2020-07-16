import React, { useRef, useState } from 'react';

import { Button, SearchDiv } from './style/';

import { superHeroData, nameArray } from '../../data/data.js';

function SearchBar() {
	//refs
	const input = useRef(),
		resultsDiv = useRef();
	// state
	const [canSearch, setCanSearch] = useState(true),
		[searchResults, setSearchResults] = useState(), //name, image, id, powerstats
		[searchDone, setSearchDone] = useState(false),
		[fighter, setFighter] = useState('none'),
		[highlighted, setHighlighted] = useState(),
		[fullData, setFullData] = useState(''),
		[totalButtons, setTotalButtons] = useState([]);

	function resultsMap() {
		if (searchResults !== undefined) {
			let newArray = [];
			let el = input.current;
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
									<img result={b} src={a[1]} className="hero-img" />
									{a[0]}
								</Button>
							</li>
						);
					}
				});
			}
		}
	}

	function handleClick(e) {
		if (e.target.attributes.result.value !== undefined) {
			setFighter(searchResults[e.target.attributes.result.value]);

			let fullArr = searchResults[e.target.attributes.result.value];
			setFullData(fullArr[4]);
		}
	}

	function binarySearch(arr, q, le, ri) {
		console.log('bin search run');
		console.log('arr:', arr);
		console.log('q:', q);
		console.log('le:', le);
		console.log('ri:', ri);
		let l = le || 0,
			r = ri || arr.length - 1,
			m = Math.floor((r + l) / 2),
			subLen = q.length;

		if (arr[m].substring(0, subLen) === q) {
			return m;
		}

		if (arr[l].substring(0, subLen) === q) {
			return l;
		}

		if (arr[r].substring(0, subLen) === q) {
			return r;
		}

		if (q > arr[m].substring(0, subLen) && m + 1 < r) {
			return binarySearch(arr, q, m, ri);
		}

		if (q < arr[m].substring(0, subLen) && m - 1 > l) {
			return binarySearch(arr, q, le, m);
		}

		return -1;
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
				response.map((a, b) => {
					let arr = [a.name, a.images.sm, a.id, a.powerstats, response[b]];
					results.push(arr);
				});
			}
			setSearchDone(true);
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
			superHeroData[i + 12],
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
		setTotalButtons(newArray);
		return newArray;
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
			setFighter(searchResults[highlighted]);
		}
	}

	function clearOldHighlights(a) {
		a.map((i) => {
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
			let newStyle = `transform: scale(2);
        transition: 300ms;`;
			el.style = newStyle;
		}
	}

	function showResults() {
		if (resultsDiv.current !== undefined) {
			if (resultsDiv.current) resultsDiv.current.style = 'display: block;';
			if (resultsDiv.current) resultsDiv.current.style = 'height: 0px;';
			if (resultsDiv.current)
				resultsDiv.current.style = 'box-shadow: 0 0 0 2pt yellow';
			window.setTimeout(() => {
				// resultsDiv.current.classList.remove('results');
				if (resultsDiv.current)
					resultsDiv.current.classList.add('results-shown');
				if (resultsDiv.current) resultsDiv.current.classList.add('results');
			}, 200);
		}
	}

	function hideResults() {
		window.setTimeout(() => {
			if (resultsDiv.current !== null) {
				resultsDiv.current.style = 'box-shadow: none';
				resultsDiv.current.style = 'display: none;';
			}
		}, 400);
	}

	function setPlaceHolder(n) {
		return `Hero or Villain`;
	}

	return (
		<SearchDiv>
			<input
				autoFocus
				autoComplete="off"
				id="searchA"
				className="input"
				type="text"
				ref={input}
				onKeyUp={handleChange}
				onFocus={showResults}
				onBlur={hideResults}
				placeholder={setPlaceHolder(1)}
			/>
			<div id="results-div" ref={resultsDiv} className="results results-shown">
				<ul>{resultsMap()}</ul>
			</div>
		</SearchDiv>
	);
}

export default SearchBar;
