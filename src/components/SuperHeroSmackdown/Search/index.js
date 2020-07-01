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
	const [intelWin, setIntelWin] = useState('A');
	const [combatWin, setCombatWin] = useState('A');
	const [duraWin, setDuraWin] = useState('A');
	const [strengthWin, setStrengthWin] = useState('A');
	const [powerWin, setPowerWin] = useState('A');
	const [speedWin, setSpeedWin] = useState('A');
	const [fighterAUsableStats, setFighterAUsableStats] = useState('none');
	const [fighterBUsableStats, setFighterBUsableStats] = useState('none');
	const [aWins, setAWins] = useState(0);
	const [bWins, setBWins] = useState(0);
	const [aFullInfo, setAFullInfo] = useState('');
	const [bFullInfo, setBFullInfo] = useState('');
	const [champ, setChamp] = useState(null);

	// refs
	const inputA = useRef(null);
	const inputB = useRef(null);
	const resultsDivA = useRef(null);
	const resultsDivB = useRef(null);
	const battleArea = useRef(null);
	const searchArea = useRef(null);
	const readyBtn = useRef(null);
	const resetBtn = useRef(null);
	const cardA = useRef(null);
	const cardB = useRef(null);
	const imgA = useRef(null);
	const imgB = useRef(null);
	const statsA = useRef(null);
	const statsB = useRef(null);
	const intelA = useRef(null);
	const intelB = useRef(null);
	const combatA = useRef(null);
	const combatB = useRef(null);
	const duraA = useRef(null);
	const duraB = useRef(null);
	const strengthA = useRef(null);
	const strengthB = useRef(null);
	const powerA = useRef(null);
	const powerB = useRef(null);
	const speedA = useRef(null);
	const speedB = useRef(null);
	const resultsDiv = useRef(null);

	// const reduxState = useSelector((state) => state.searchedLocation);

	// const dispatch = useDispatch();

	useEffect(() => {
		let aTemp = {
			data: {
				response: 'success',
				id: '353',
				name: 'James T. Kirk',
				powerstats: {
					intelligence: '69',
					strength: '11',
					speed: '17',
					durability: '30',
					power: '30',
					combat: '75',
				},
				biography: {
					'full-name': 'James T. Kirk',
					'alter-egos': 'No alter egos found.',
					aliases: ['Jim', 'Captain Kirk'],
					'place-of-birth': 'Riverside, Iowa, Earth',
					'first-appearance': 'Star Trek S01E01: The Man Trap',
					publisher: 'Star Trek',
					alignment: 'good',
				},
				appearance: {
					gender: 'Male',
					race: 'Human',
					height: ["5'10", '178 cm'],
					weight: ['170 lb', '77 kg'],
					'eye-color': 'Hazel',
					'hair-color': 'Brown',
				},
				work: {
					occupation: 'Captain',
					base: '-',
				},
				connections: {
					'group-affiliation': 'Federation, Starfleet',
					relatives:
						'Winona Kirk (mother), George Kirk (father), George Samuel Kirk (brother), Michele Suzanne Kirk (sister)',
				},
				image: {
					url:
						'https://www.superherodb.com/pictures2/portraits/10/100/10565.jpg',
				},
			},
			status: 200,
			statusText: 'OK',
			headers: {
				'access-control-allow-credentials': 'true',
				'access-control-allow-headers':
					'Origin, X-Requested-With, Content-Type, Accept',
				'access-control-allow-methods': 'GET',
				'access-control-allow-origin': '*',
				'access-control-max-age': '86400',
				'cf-cache-status': 'DYNAMIC',
				'cf-ray': '5abe817c1d1dea8a-IAD',
				'cf-request-id': '03aaef418d0000ea8a0f366200000001',
				connection: 'keep-alive',
				'content-encoding': 'br',
				'content-type': 'application/json',
				date: 'Wed, 01 Jul 2020 07:45:08 GMT',
				'expect-ct':
					'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
				server: 'cloudflare',
				'transfer-encoding': 'chunked',
				'x-final-url':
					'https://www.superheroapi.com/api.php/684260262142283/353',
				'x-powered-by': 'PHP/7.2.29',
				'x-turbo-charged-by': 'LiteSpeed',
			},
			config: {
				url:
					'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/684260262142283/353',
				method: 'get',
				headers: {
					Accept: 'application/json, text/plain, */*',
				},
				transformRequest: [null],
				transformResponse: [null],
				timeout: 0,
				xsrfCookieName: 'XSRF-TOKEN',
				xsrfHeaderName: 'X-XSRF-TOKEN',
				maxContentLength: -1,
			},
			request: {},
		};

		let bTemp = {
			data: {
				response: 'success',
				id: '127',
				name: 'Boba Fett',
				powerstats: {
					intelligence: '63',
					strength: '10',
					speed: '38',
					durability: '36',
					power: '68',
					combat: '70',
				},
				biography: {
					'full-name': '',
					'alter-egos': 'No alter egos found.',
					aliases: [
						'Teff',
						'Sava Brek Madak',
						'Jaster Mereel',
						'Mandalore',
						"Mand'alor",
					],
					'place-of-birth': 'Kamino',
					'first-appearance': '-',
					publisher: 'George Lucas',
					alignment: 'bad',
				},
				appearance: {
					gender: 'Male',
					race: 'Human / Clone',
					height: ["6'0", '183 cm'],
					weight: ['- lb', '0 kg'],
					'eye-color': 'Brown',
					'hair-color': 'Black',
				},
				work: {
					occupation: 'Bounty Hunter',
					base: '-',
				},
				connections: {
					'group-affiliation': '-',
					relatives: '-',
				},
				image: {
					url:
						'https://www.superherodb.com/pictures2/portraits/10/100/10467.jpg',
				},
			},
			status: 200,
			statusText: 'OK',
			headers: {
				'access-control-allow-credentials': 'true',
				'access-control-allow-headers':
					'Origin, X-Requested-With, Content-Type, Accept',
				'access-control-allow-methods': 'GET',
				'access-control-allow-origin': '*',
				'access-control-max-age': '86400',
				'cf-cache-status': 'DYNAMIC',
				'cf-ray': '5abe81779da20df3-IAD',
				'cf-request-id': '03aaef3ebd00000df3b0221200000001',
				connection: 'keep-alive',
				'content-encoding': 'br',
				'content-type': 'application/json',
				date: 'Wed, 01 Jul 2020 07:45:07 GMT',
				'expect-ct':
					'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
				server: 'cloudflare',
				'transfer-encoding': 'chunked',
				'x-final-url':
					'https://www.superheroapi.com/api.php/684260262142283/127',
				'x-powered-by': 'PHP/7.2.29',
				'x-turbo-charged-by': 'LiteSpeed',
			},
			config: {
				url:
					'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/684260262142283/127',
				method: 'get',
				headers: {
					Accept: 'application/json, text/plain, */*',
				},
				transformRequest: [null],
				transformResponse: [null],
				timeout: 0,
				xsrfCookieName: 'XSRF-TOKEN',
				xsrfHeaderName: 'X-XSRF-TOKEN',
				maxContentLength: -1,
			},
			request: {},
		};

		writeMatchReport(aTemp, bTemp);
	});

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

	function writeMatchReport(a, b) {
		console.log(a);
		console.log(b);
		let winner;
		if (champ !== 'tie') {
			if (champ === 'A') {
				let winner = a;
			} else {
				winner = b;
			}
			console.log(winner);
			let closeness,
				height,
				Lheight,
				eyeColor,
				LeyeColor,
				hairColor,
				LhairColor,
				placeOfBirth,
				LplaceOfBirth,
				publisher,
				Lpublisher,
				genderPronoun,
				winningCats;

			//closeness
			//winningcats
			let cats = [
				intelWin,
				combatWin,
				duraWin,
				strengthWin,
				powerWin,
				speedWin,
			];
			cats.map((item, index) => {
				if (item === 'A') {
					aWinCats.push(item);
					aCount++;
				} else {
					bCount++;
				}
			});

			//height

			//eyecolor

			// hair color

			// placeOfBirth

			//publisher

			//genderPronoun

			// In a ${closeness} battle, the ${height} tall ${eyeColor}-eyed ${hairColor} haired ${race} from ${placeOfBirth} in the ${publisher} universe known as ${winnerName} was able to use ${genderPronoun} ${winningCats} to defeat the ${Lheight} tall ${LeyeColor}-eyed ${LhairColor} haired ${Lrace} from ${LplaceOfBirth} in the ${Lpublisher} universe known as ${loserName}
		} else {
			// write for a tie here
		}
	}

	function getFullInfo(id, idB) {
		const key = `684260262142283`;
		const cors = `https://cors-anywhere.herokuapp.com/`;
		const site = `${cors}https://superheroapi.com/api/${key}/${id}`;
		const siteB = `${cors}https://superheroapi.com/api/${key}/${idB}`;

		axios
			.get(site)
			.then((responseA) => {
				axios
					.get(siteB)
					.then((responseB) => {
						writeMatchReport(responseA, responseB);
					})
					.catch((err) => {});
			})
			.catch((err) => {});
	}

	function beginBattle() {
		console.log('battle begun');
		let aFull = getFullInfo(fighterA[2], fighterB[2]);

		console.log(fighterA);
		console.log(fighterB);
		decideWinner();

		//hide buttons
		readyBtn.current.classList.add('hidden');
		resetBtn.current.classList.add('hidden');

		// stretch boxes
		cardA.current.classList.add('battlingA');
		cardB.current.classList.add('battlingB');

		// fade image
		window.setTimeout(() => {
			imgA.current.classList.add('fade');
			imgB.current.classList.add('fade');
		}, 1100);

		// show stats 1 by 1
		window.setTimeout(() => {
			statsB.current.style = 'display: block';
			statsA.current.style = 'display: block';
		}, 2200);

		window.setTimeout(() => {
			intelB.current.style = 'opacity: 1;';
			intelA.current.style = 'opacity: 1;';
		}, 3200);

		window.setTimeout(() => {
			strengthB.current.style = 'opacity: 1;';
			strengthA.current.style = 'opacity: 1;';
		}, 4200);

		window.setTimeout(() => {
			speedB.current.style = 'opacity: 1;';
			speedA.current.style = 'opacity: 1;';
		}, 5200);

		window.setTimeout(() => {
			duraB.current.style = 'opacity: 1;';
			duraA.current.style = 'opacity: 1;';
		}, 6200);

		window.setTimeout(() => {
			powerB.current.style = 'opacity: 1;';
			powerA.current.style = 'opacity: 1;';
		}, 7200);

		window.setTimeout(() => {
			combatB.current.style = 'opacity: 1;';
			combatA.current.style = 'opacity: 1;';
		}, 8200);
		//determine winner
		window.setTimeout(() => {
			if (champ !== null) {
				alert(`winner is ${champ}`);
			}
		}, 9200);
		//animate winner
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

	function convertStrToIntAndRemoveNulls(obj) {
		let stats = [
			'intelligence',
			'strength',
			'speed',
			'durability',
			'power',
			'combat',
		];
		let newObj = new Object();
		let arr = [];
		for (const [key, value] of Object.entries(obj)) {
			if (value === 'null') {
				let random = Math.floor(Math.random() * 101);
				arr.push(random);
			} else {
				let newValue = parseInt(value);
				arr.push(newValue);
			}
		}

		newObj.intelligence = arr[0];
		newObj.strength = arr[1];
		newObj.speed = arr[2];
		newObj.durability = arr[3];
		newObj.power = arr[4];
		newObj.combat = arr[5];

		return newObj;
	}

	function decideWinner() {
		let fighterAStats = convertStrToIntAndRemoveNulls(fighterA[3]);
		let fighterBStats = convertStrToIntAndRemoveNulls(fighterB[3]);
		setFighterAUsableStats(fighterAStats);
		setFighterBUsableStats(fighterBStats);
		// removeNullsAnd100s(fighterAStats, fighterBStats);
		let aCount = 0,
			bCount = 0;
		//intel
		if (fighterAStats.intelligence > fighterBStats.intelligence) {
			setIntelWin('A');
			aCount++;
		} else if (fighterAStats.intelligence === fighterBStats.intelligence) {
			setIntelWin('tie');
		} else {
			setIntelWin('B');
			bCount++;
		}

		//strength
		if (fighterAStats.strength > fighterBStats.strength) {
			setStrengthWin('A');
			aCount++;
		} else if (fighterAStats.strength === fighterBStats.strength) {
			setStrengthWin('tie');
		} else {
			setStrengthWin('B');
			bCount++;
		}

		//speed
		if (fighterAStats.speed > fighterBStats.speed) {
			setSpeedWin('A');
			aCount++;
		} else if (fighterAStats.speed === fighterBStats.speed) {
			setSpeedWin('tie');
		} else {
			setSpeedWin('B');
			bCount++;
		}

		//combat
		if (fighterAStats.combat > fighterBStats.combat) {
			setCombatWin('A');
			aCount++;
		} else if (fighterAStats.speed === fighterBStats.speed) {
			setCombatWin('tie');
		} else {
			setCombatWin('B');
			bCount++;
		}

		//durability
		if (fighterAStats.durability > fighterBStats.durability) {
			setDuraWin('A');
			aCount++;
		} else if (fighterAStats.durability === fighterBStats.durability) {
			setDuraWin('tie');
		} else {
			setDuraWin('B');
			bCount++;
		}

		//power
		if (fighterAStats.power > fighterBStats.power) {
			setPowerWin('A');
			aCount++;
		} else if (fighterAStats.power === fighterBStats.power) {
			setPowerWin('tie');
		} else {
			setPowerWin('B');
			bCount++;
		}

		console.log(aCount, bCount);

		decideChamp(aCount, bCount);
	}

	function decideChamp(aCount, bCount) {
		if (aCount > bCount) {
			setChamp(fighterA[0]);
		} else if (bCount > aCount) {
			setChamp(fighterB[0]);
		} else {
			setChamp('Batt is a draw');
		}
	}

	function renderStatsA() {
		if (
			champ !== null &&
			fighterAUsableStats !== 'none' &&
			fighterBUsableStats !== 'none'
		) {
			return (
				<React.Fragment>
					<p
						className={
							intelWin === 'A' || intelWin === 'tie' ? 'winner' : 'loser'
						}
						ref={intelA}>
						Intelligence: {fighterAUsableStats.intelligence}
					</p>
					<p
						className={
							strengthWin === 'A' || strengthWin === 'tie' ? 'winner' : 'loser'
						}
						ref={strengthA}>
						Strength: {fighterAUsableStats.strength}
					</p>
					<p
						className={
							speedWin === 'A' || speedWin === 'tie' ? 'winner' : 'loser'
						}
						ref={speedA}>
						Speed: {fighterAUsableStats.speed}
					</p>
					<p
						className={
							duraWin === 'A' || duraWin === 'tie' ? 'winner' : 'loser'
						}
						ref={duraA}>
						Durability: {fighterAUsableStats.durability}
					</p>
					<p
						className={
							powerWin === 'A' || powerWin === 'tie' ? 'winner' : 'loser'
						}
						ref={powerA}>
						Power: {fighterAUsableStats.power}
					</p>
					<p
						className={
							combatWin === 'A' || combatWin === 'tie' ? 'winner' : 'loser'
						}
						ref={combatA}>
						Combat: {fighterAUsableStats.combat}
					</p>
					<p>{champ}</p>
				</React.Fragment>
			);
		}
	}

	function renderStatsB() {
		if (fighterAUsableStats !== 'none' && fighterBUsableStats !== 'none') {
			return (
				<React.Fragment>
					<p
						className={
							intelWin === 'B' || intelWin === 'tie' ? 'winner' : 'loser'
						}
						ref={intelB}>
						Intelligence: {fighterBUsableStats.intelligence}
					</p>
					<p
						className={
							strengthWin === 'B' || strengthWin === 'tie' ? 'winner' : 'loser'
						}
						ref={strengthB}>
						Strength: {fighterBUsableStats.strength}
					</p>
					<p
						className={
							speedWin === 'B' || speedWin === 'tie' ? 'winner' : 'loser'
						}
						ref={speedB}>
						Speed: {fighterBUsableStats.speed}
					</p>
					<p
						className={
							duraWin === 'B' || duraWin === 'tie' ? 'winner' : 'loser'
						}
						ref={duraB}>
						Durability: {fighterBUsableStats.durability}
					</p>
					<p
						className={
							powerWin === 'B' || powerWin === 'tie' ? 'winner' : 'loser'
						}
						ref={powerB}>
						Power: {fighterBUsableStats.power}
					</p>
					<p
						className={
							combatWin === 'B' || combatWin === 'tie' ? 'winner' : 'loser'
						}
						ref={combatB}>
						Combat: {fighterBUsableStats.combat}
					</p>
					<p></p>
				</React.Fragment>
			);
		}
	}

	function showStatsA() {
		return (
			<div ref={statsA} className="stats-hidden">
				<p>Power Stats</p>
				{renderStatsA()}
			</div>
		);
	}
	function showStatsB() {
		return (
			<div ref={statsB} className="stats-hidden">
				<p>Power Stats</p>
				{renderStatsB()}
			</div>
		);
	}
	function showFighterA() {
		if (fighterA !== 'none') {
			return (
				<React.Fragment>
					<h1>{fighterA[0]}</h1>
					<img ref={imgA} className="fighter-b-img" src={fighterA[1]} />
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
					<img ref={imgB} className="fighter-b-img" src={fighterB[1]} />
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
				<div className="search-a" ref={cardA}>
					{renderSearchA()}
					{showFighterA()}
					{showStatsA()}
					<div id="loadA" className="hidden">
						<Loading />
					</div>
				</div>
				<div id="vs">
					<button
						ref={readyBtn}
						className={ready ? 'begin-button' : 'hidden'}
						onClick={beginBattle}>
						Click to Begin Battle
					</button>
					<button ref={resetBtn} className="reset-button" onClick={reset}>
						Reset Fighters
					</button>
				</div>
				<div className="search-b" ref={cardB}>
					{renderSearchB()}
					{showFighterB()}
					{showStatsB()}

					<div id="loadB" className="hidden">
						<Loading />
					</div>
				</div>
			</SearchDiv>
		</React.Fragment>
	);
}

export default Search;
