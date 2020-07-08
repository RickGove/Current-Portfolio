import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { SearchDiv, Button, MatchReport } from './style/';

import HeroInfo from '../HeroInfo/';
import Loading from '../Loading';

import rickImg from '../../../img/superIcon.png';

function Search() {
	// history
	const history = useHistory();
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
	const [fighterAUsableStats, setFighterAUsableStats] = useState('');
	const [fighterBUsableStats, setFighterBUsableStats] = useState('');
	const [intelWin, setIntelWin] = useState('');
	const [combatWin, setCombatWin] = useState('');
	const [duraWin, setDuraWin] = useState('');
	const [strengthWin, setStrengthWin] = useState('');
	const [powerWin, setPowerWin] = useState('');
	const [speedWin, setSpeedWin] = useState('');
	const [aWins, setAWins] = useState(0);
	const [bWins, setBWins] = useState(0);
	const [aFullInfo, setAFullInfo] = useState('');
	const [bFullInfo, setBFullInfo] = useState('');
	const [champ, setChamp] = useState(null);

	//global variables
	let champVar = '',
		intelWinVar = '',
		combatWinVar = '',
		duraWinVar = '',
		strengthWinVar = '',
		powerWinVar = '',
		speedWinVar = '',
		fighterAUsableStatsVar = '',
		fighterBUsableStatsVar = '',
		fullDataA = '',
		fullDataB = '',
		bCount = 0,
		aCount = 0,
		matchReport = 'init',
		////*********************** */
		fakeSearch = {
			data: {
				response: 'success',
				'results-for': 'bat',
				results: [
					{
						id: '63',
						name: 'Batgirl',
						powerstats: {
							intelligence: '88',
							strength: '11',
							speed: '33',
							durability: '40',
							power: '34',
							combat: '90',
						},
						biography: {
							'full-name': 'Barbara Gordon',
							'alter-egos': 'Oracle',
							aliases: ['Oracle', 'Bluebelle'],
							'place-of-birth': '-',
							'first-appearance': 'Detective Comics #359',
							publisher: 'Oracle',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'Human',
							height: ["5'7", '170 cm'],
							weight: ['126 lb', '57 kg'],
							'eye-color': 'Green',
							'hair-color': 'Red',
						},
						work: {
							occupation: '-',
							base: 'Gotham City, formerly Metropolis, Platinum Flats',
						},
						connections: {
							'group-affiliation': '-',
							relatives:
								'James Gordon (father) \ufffd Barbara Eileen (mother) \ufffd James Gordon, Jr. (brother)',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg',
						},
					},
					{
						id: '64',
						name: 'Batgirl',
						powerstats: {
							intelligence: 'null',
							strength: '27',
							speed: 'null',
							durability: 'null',
							power: 'null',
							combat: 'null',
						},
						biography: {
							'full-name': 'Mary Elizabeth Kane',
							'alter-egos': 'Hawkfire',
							aliases: ['Bette Kane', 'Bat-Girl'],
							'place-of-birth': '-',
							'first-appearance': 'Batman #139',
							publisher: 'Hawkfire',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'null',
							height: ['-', '0 cm'],
							weight: ['- lb', '0 kg'],
							'eye-color': '-',
							'hair-color': '-',
						},
						work: { occupation: 'Crime-fighter', base: 'Gotham City' },
						connections: {
							'group-affiliation':
								'Former associated partner of Batman and Robin of Earth-One; Partner of Katherine Kane',
							relatives: 'Katherine Kane (Batwoman I,  Aunt)',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/638.jpg',
						},
					},
					{
						id: '65',
						name: 'Batgirl III',
						powerstats: {
							intelligence: 'null',
							strength: '43',
							speed: 'null',
							durability: 'null',
							power: 'null',
							combat: 'null',
						},
						biography: {
							'full-name': 'Helena Rosa Bertinelli',
							'alter-egos': 'Huntress',
							aliases: ['-'],
							'place-of-birth': '-',
							'first-appearance': '-',
							publisher: 'Huntress',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'null',
							height: ['-', '0 cm'],
							weight: ['- lb', '0 kg'],
							'eye-color': '-',
							'hair-color': '-',
						},
						work: { occupation: '-', base: '-' },
						connections: { 'group-affiliation': '-', relatives: '-' },
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/1112.jpg',
						},
					},
					{
						id: '66',
						name: 'Batgirl IV',
						powerstats: {
							intelligence: '69',
							strength: '12',
							speed: '27',
							durability: '56',
							power: '46',
							combat: '100',
						},
						biography: {
							'full-name': 'Cassandra Cain',
							'alter-egos': 'No alter egos found.',
							aliases: ['Kasumi', 'various mundane persona,'],
							'place-of-birth': 'League of Assassins (exact base is unknown)',
							'first-appearance': 'Batman: Legends of the Dark Knight #120',
							publisher: 'DC Comics',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'Human',
							height: ["5'5", '165 cm'],
							weight: ['115 lb', '52 kg'],
							'eye-color': 'Green',
							'hair-color': 'Black',
						},
						work: {
							occupation: '-',
							base: 'Gotham City; Bl\ufffddhaven; Tibet; New York City',
						},
						connections: {
							'group-affiliation':
								'Titans East, League of Assassins, Batman Family, Justice League Elite, Young Justice',
							relatives:
								"David Cain (father), Lady Shiva (mother), Carolyn (aunt, deceased), Annalea (sibling, deceased), 'The Mad Dog' (sibling)",
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/1113.jpg',
						},
					},
					{
						id: '67',
						name: 'Batgirl V',
						powerstats: {
							intelligence: 'null',
							strength: 'null',
							speed: 'null',
							durability: 'null',
							power: 'null',
							combat: 'null',
						},
						biography: {
							'full-name': 'Charlotte Gage-Radcliffe',
							'alter-egos': 'Misfit',
							aliases: ['-'],
							'place-of-birth': '-',
							'first-appearance': '-',
							publisher: 'Misfit',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'null',
							height: ['-', '0 cm'],
							weight: ['- lb', '0 kg'],
							'eye-color': '-',
							'hair-color': '-',
						},
						work: { occupation: '-', base: '-' },
						connections: { 'group-affiliation': '-', relatives: '-' },
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/1115.jpg',
						},
					},
					{
						id: '68',
						name: 'Batgirl VI',
						powerstats: {
							intelligence: '75',
							strength: '10',
							speed: '23',
							durability: '28',
							power: '22',
							combat: '80',
						},
						biography: {
							'full-name': 'Stephanie Brown',
							'alter-egos': 'Spoiler',
							aliases: ['Steph', 'Robin', 'Marion Todd', 'Spoiler'],
							'place-of-birth': '-',
							'first-appearance':
								'Detective Comics #647. As Batgirl in Batgirl (Volume 3) #1. (2009)',
							publisher: 'Spoiler',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'null',
							height: ["5'6", '168 cm'],
							weight: ['135 lb', '61 kg'],
							'eye-color': 'Blue',
							'hair-color': 'Blond',
						},
						work: {
							occupation: 'College student at Gotham University',
							base: 'Gotham Heights, Gotham City',
						},
						connections: {
							'group-affiliation':
								'The Batman Family, formerly the Birds of Prey, Tim Drake (on-and-off boyfriend)',
							relatives:
								'Arthur Brown (The Cluemaster, father), Crystal Brown (mother), unnamed daughter (given up for adoption)',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/1398.jpg',
						},
					},
					{
						id: '69',
						name: 'Batman',
						powerstats: {
							intelligence: '81',
							strength: '40',
							speed: '29',
							durability: '55',
							power: '63',
							combat: '90',
						},
						biography: {
							'full-name': 'Terry McGinnis',
							'alter-egos': 'No alter egos found.',
							aliases: [
								'Batman II',
								'The Tomorrow Knight',
								'The second Dark Knight',
								'The Dark Knight of Tomorrow',
								'Batman Beyond',
							],
							'place-of-birth': 'Gotham City, 25th Century',
							'first-appearance': 'Batman Beyond #1',
							publisher: 'DC Comics',
							alignment: 'good',
						},
						appearance: {
							gender: 'Male',
							race: 'Human',
							height: ["5'10", '178 cm'],
							weight: ['170 lb', '77 kg'],
							'eye-color': 'Blue',
							'hair-color': 'Black',
						},
						work: { occupation: '-', base: '21st Century Gotham City' },
						connections: {
							'group-affiliation': 'Batman Family, Justice League Unlimited',
							relatives:
								'Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
						},
					},
					{
						id: '70',
						name: 'Batman',
						powerstats: {
							intelligence: '100',
							strength: '26',
							speed: '27',
							durability: '50',
							power: '47',
							combat: '100',
						},
						biography: {
							'full-name': 'Bruce Wayne',
							'alter-egos': 'No alter egos found.',
							aliases: ['Insider', 'Matches Malone'],
							'place-of-birth': 'Crest Hill, Bristol Township; Gotham County',
							'first-appearance': 'Detective Comics #27',
							publisher: 'DC Comics',
							alignment: 'good',
						},
						appearance: {
							gender: 'Male',
							race: 'Human',
							height: ["6'2", '188 cm'],
							weight: ['210 lb', '95 kg'],
							'eye-color': 'blue',
							'hair-color': 'black',
						},
						work: {
							occupation: 'Businessman',
							base:
								'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
						},
						connections: {
							'group-affiliation':
								'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps',
							relatives:
								'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
						},
					},
					{
						id: '71',
						name: 'Batman II',
						powerstats: {
							intelligence: '88',
							strength: '11',
							speed: '33',
							durability: '28',
							power: '36',
							combat: '100',
						},
						biography: {
							'full-name': 'Dick Grayson',
							'alter-egos': 'Nightwing, Robin',
							aliases: ['Dick Grayson'],
							'place-of-birth': '-',
							'first-appearance': '-',
							publisher: 'Nightwing',
							alignment: 'good',
						},
						appearance: {
							gender: 'Male',
							race: 'Human',
							height: ["5'10", '178 cm'],
							weight: ['175 lb', '79 kg'],
							'eye-color': 'Blue',
							'hair-color': 'Black',
						},
						work: {
							occupation: '-',
							base: 'Gotham City; formerly Bludhaven, New York City',
						},
						connections: {
							'group-affiliation': 'Justice League Of America, Batman Family',
							relatives:
								'John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg',
						},
					},
					{
						id: '72',
						name: 'Battlestar',
						powerstats: {
							intelligence: '50',
							strength: '53',
							speed: '35',
							durability: '74',
							power: '48',
							combat: '74',
						},
						biography: {
							'full-name': 'Lemar Hoskins',
							'alter-egos': 'No alter egos found.',
							aliases: ['Bucky'],
							'place-of-birth': 'Chicago, Illinois',
							'first-appearance': 'Captain America #323 (1986); (as Bucky)',
							publisher: 'Marvel Comics',
							alignment: 'good',
						},
						appearance: {
							gender: 'Male',
							race: 'null',
							height: ["6'6", '198 cm'],
							weight: ['295 lb', '133 kg'],
							'eye-color': 'Brown',
							'hair-color': 'Black',
						},
						work: {
							occupation: 'Former wrestler, federal operative',
							base: '-',
						},
						connections: {
							'group-affiliation':
								'Formerly Wild Pack, Bold Urban Commandos (Buckies), former partner of U.S.Agent, operative of the Commission on Superhuman Activities',
							relatives: '-',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/231.jpg',
						},
					},
					{
						id: '73',
						name: 'Batwoman V',
						powerstats: {
							intelligence: '81',
							strength: '8',
							speed: '29',
							durability: '25',
							power: '27',
							combat: '80',
						},
						biography: {
							'full-name': 'Katherine Rebecca Kane',
							'alter-egos': 'No alter egos found.',
							aliases: ['-'],
							'place-of-birth': '-',
							'first-appearance': '52 #7 (June, 2006)',
							publisher: 'DC Comics',
							alignment: 'good',
						},
						appearance: {
							gender: 'Female',
							race: 'Human',
							height: ["5'10", '178 cm'],
							weight: ['- lb', '0 kg'],
							'eye-color': 'Green',
							'hair-color': 'Red',
						},
						work: { occupation: '-', base: 'Gotham City' },
						connections: {
							'group-affiliation':
								'Batman Family (unofficially), D.E.O, Unknowns',
							relatives:
								'Jacob Kane (father), Gabi Kane (mother; deceased), Beth Kane (twin sister), Mary Elizabeth "Bette" Kane (cousin), Catherine Hamilton-Kane (stepmother), Philip Kane (uncle), Kane Family',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/10234.jpg',
						},
					},
					{
						id: '427',
						name: 'Man-Bat',
						powerstats: {
							intelligence: '38',
							strength: '18',
							speed: '50',
							durability: '70',
							power: '33',
							combat: '30',
						},
						biography: {
							'full-name': 'Robert Kirkland Langstrom',
							'alter-egos': 'No alter egos found.',
							aliases: ['Kirk Langstrom'],
							'place-of-birth': 'Chicago, Illinois',
							'first-appearance': 'Detective Comics #400 (June, 1970)',
							publisher: 'DC Comics',
							alignment: 'neutral',
						},
						appearance: {
							gender: 'Male',
							race: 'Human',
							height: ['-', '0 cm'],
							weight: ['- lb', '0 kg'],
							'eye-color': 'Brown',
							'hair-color': 'Brown',
						},
						work: { occupation: 'Zoologist', base: 'Gotham City' },
						connections: {
							'group-affiliation': 'Formerly Spirit Squad, The Network',
							relatives:
								'Francine Langstrom (wife), Rebecca Elizabeth Langtrom (daughter); Aaron Langstrom (son); Britt Langstrom (sister); Ted Friedel (brother-in-law)',
						},
						image: {
							url:
								'https://www.superherodb.com/pictures2/portraits/10/100/731.jpg',
						},
					},
				],
			},
		},
		fakeData2 = {
			data: {
				response: 'success',
				id: '63',
				name: 'Batgirl',
				powerstats: {
					intelligence: '88',
					strength: '11',
					speed: '33',
					durability: '40',
					power: '34',
					combat: '90',
				},
				biography: {
					'full-name': 'Barbara Gordon',
					'alter-egos': 'Oracle',
					aliases: ['Oracle', 'Bluebelle'],
					'place-of-birth': '-',
					'first-appearance': 'Detective Comics #359',
					publisher: 'Oracle',
					alignment: 'good',
				},
				appearance: {
					gender: 'Female',
					race: 'Human',
					height: ["5'7", '170 cm'],
					weight: ['126 lb', '57 kg'],
					'eye-color': 'Green',
					'hair-color': 'Red',
				},
				work: {
					occupation: '-',
					base: 'Gotham City, formerly Metropolis, Platinum Flats',
				},
				connections: {
					'group-affiliation': '-',
					relatives:
						'James Gordon (father) \ufffd Barbara Eileen (mother) \ufffd James Gordon, Jr. (brother)',
				},
				image: {
					url:
						'https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg',
				},
			},
		},
		fakeData3 = {
			data: {
				response: 'success',
				id: '222',
				name: 'Doctor Doom',
				powerstats: {
					intelligence: '100',
					strength: '32',
					speed: '20',
					durability: '100',
					power: '100',
					combat: '84',
				},
				biography: {
					'full-name': 'Victor von Doom',
					'alter-egos': 'No alter egos found.',
					aliases: ['The Master', 'Invincible Man'],
					'place-of-birth': 'Haasenstadt, Latveria',
					'first-appearance': 'Fantastic Four #5 (July 1962)',
					publisher: 'Marvel Comics',
					alignment: 'bad',
				},
				appearance: {
					gender: 'Male',
					race: 'Human',
					height: ["6'7", '201 cm'],
					weight: ['415 lb', '187 kg'],
					'eye-color': 'Brown',
					'hair-color': 'Brown',
				},
				work: {
					occupation: 'Monarch',
					base: 'Castle Doom, Doomstadt, Latveria',
				},
				connections: {
					'group-affiliation':
						'Future Foundation; Formerly Cabal, Knights of the Atomic Table, Acts of Vengeance Prime Movers, partner of Namor, employer of the Terrible Trio, Fantastic Four (leader)',
					relatives:
						'Werner von Doom (father, deceased), Cynthia von Doom (mother, deceased); Kang the Conqueror, his counterparts, and offspring (alleged descendants), Kristoff Vernard (Doctor Doom II, adopted son), Dr Bob Doom (distant cousin), Boris (unofficially adoptive father/guardian), Valeria von Doom (daughter from alternate universe; became baby of Susan Richards and is now called Valeria Richards)',
				},
				image: {
					url: 'https://www.superherodb.com/pictures2/portraits/10/100/189.jpg',
				},
			},
		};
	// refs
	const vsRef = useRef(null);
	const reportWrap = useRef(null);
	const newMatch = useRef(null);
	const winnerImg = useRef(null);
	const matchReportRef = useRef(null);
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
	const intelIconB = useRef(null);
	const strengthIconB = useRef(null);
	const speedIconB = useRef(null);
	const duraIconB = useRef(null);
	const powerIconB = useRef(null);
	const combatIconB = useRef(null);
	const intelIconA = useRef(null);
	const strengthIconA = useRef(null);
	const speedIconA = useRef(null);
	const duraIconA = useRef(null);
	const powerIconA = useRef(null);
	const combatIconA = useRef(null);
	const report = useRef(null);
	// const reduxState = useSelector((state) => state.searchedLocation);

	// const dispatch = useDispatch();

	// sounds
	// let woosh = new Audio('../sound/woosh.mp3');
	// woosh.type = 'audio/mp3';

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
		return `Hero or Villain`;
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
		return false;

		// remove return false to add Rick back ... might be lots of work...
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
			console.log(site);
			if (rick) {
				let arr = ['Rick Gove', 'x', '6666666', 'GOD'];
				results.push(arr);
			}
			// axios
			// 	.get(site)
			// 	.then((response) => {
			///********************************** */
			let response = fakeSearch;
			////******************************** */
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
			// })
			// .catch((err) => {
			// 	hideSpinner();
			// 	alert('Error while searching: ' + err);
			// 	setCanSearch(true);
			// 	if (aOrB === 'A') {
			// 		setSearchResults('');
			// 	} else {
			// 		setSearchResultsB('');
			// 	}
			// 	let arr = ['nothing', 0, 0, 0];
			// });
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
		if (e.target.attributes.result.value !== undefined) {
			setFighterA(searchResults[e.target.attributes.result.value]);
		} else {
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

	function handleClickB(e) {
		if (e.target.attributes.result.value !== undefined) {
			setFighterB(searchResultsB[e.target.attributes.result.value]);
		} else {
		}

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

	function writeMatchReport() {
		const a = fullDataA.data;
		const b = fullDataB.data;

		let winner,
			loser,
			winnerCount,
			loserCount,
			closeness,
			Wheight,
			Lheight,
			eyeColor,
			LeyeColor,
			race,
			Lrace,
			hairColor,
			LhairColor,
			placeOfBirth,
			LplaceOfBirth,
			publisher,
			Lpublisher,
			genderPronoun,
			LgenderPronoun,
			champName,
			loserName;

		if (champVar === 'A') {
			champName = fighterA[0];
			loserName = fighterB[0];
		} else {
			champName = fighterB[0];
			loserName = fighterA[0];
		}

		if (champVar !== 'tie') {
			if (champVar === 'A') {
				winner = a;
				loser = b;
				winnerCount = aCount;
				loserCount = bCount;
			} else {
				winner = b;
				loser = a;
				winnerCount = bCount;
				loserCount = aCount;
			}

			//closeness
			switch (winnerCount - loserCount) {
				case 6:
					closeness = 'absolute destruction of a';
					break;
				case 5:
					closeness = 'completely lopsided';
					break;
				case 4:
					closeness = 'far from close';
					break;
				case 3:
					closeness = 'hard-fought';
					break;
				case 2:
					closeness = 'intriguing';
					break;
				default:
					closeness = 'epic battle';
					break;
			}

			//winningcats
			// categories won by each combatant
			// asked question on stackOverflow
			let arr = [
				intelWinVar,
				combatWinVar,
				duraWinVar,
				strengthWinVar,
				powerWinVar,
				speedWinVar,
			];

			let names = [
				' intelligence',
				' combat',
				' durability',
				' strength',
				' power',
				' speed',
			];

			let aWins = [],
				bWins = [],
				champWins = [],
				loserWins = [];

			arr.map((item, index) => {
				if (item === 'A') {
					aWins.push(names[index]);
				} else if (item === 'B') {
					bWins.push(names[index]);
				}
			});

			if (champ !== 'A') {
				champWins = bWins;
				loserWins = aWins;
			} else {
				champWins = aWins;
				loserWins = bWins;
			}

			// height

			Wheight = `${winner.appearance.height[1]} tall`;
			Lheight = `${loser.appearance.height[1]} tall`;

			if (Wheight === '0 cm tall') {
				Wheight = '';
			}
			if (Lheight === '0 cm tall') {
				Lheight = '';
			}

			//eyecolor
			eyeColor = `${winner.appearance['eye-color']}-eyed`;
			LeyeColor = `${loser.appearance['eye-color']}-eyed`;
			if (eyeColor === '--eyed') {
				eyeColor = '';
			}
			if (LeyeColor === '--eyed') {
				LeyeColor = '';
			}

			// hair color
			hairColor = winner.appearance['hair-color'];
			LhairColor = loser.appearance['hair-color'];

			if (hairColor === '-') {
				hairColor = '';
			} else if ((hairColor = 'no hair')) {
				hairColor = '';
			} else {
				hairColor = `${hairColor}-haired`;
			}

			if (LhairColor === '-') {
				LhairColor = '';
			} else if ((LhairColor = 'no hair')) {
				LhairColor = '';
			} else {
				LhairColor = `${LhairColor}-haired`;
			}

			// placeOfBirth
			placeOfBirth = winner.biography['place-of-birth'];
			LplaceOfBirth = loser.biography['place-of-birth'];

			if (placeOfBirth === '-') {
				placeOfBirth = 'parts unknown';
			}
			if (LplaceOfBirth === '-') {
				LplaceOfBirth = 'parts unknown';
			}

			//race
			race = winner.appearance['race'];
			Lrace = loser.appearance['race'];
			if (race === 'null') {
				race = '';
			}
			if (Lrace === 'null') {
				Lrace = '';
			}

			//publisher
			publisher = winner.biography['publisher'];
			Lpublisher = loser.biography['publisher'];
			if (race === 'null') {
				race = '';
			}
			if (Lrace === 'null') {
				Lrace = '';
			}
			//genderPronoun
			if (winner.appearance['gender'] === 'Male') {
				genderPronoun = 'his';
			}
			if (winner.appearance['gender'] === 'Female') {
				genderPronoun = 'her';
			} else {
				genderPronoun = 'their';
			}
			if (loser.appearance['gender'] === 'Male') {
				LgenderPronoun = 'his';
			}
			if (loser.appearance['gender'] === 'Female') {
				LgenderPronoun = 'her';
			} else {
				LgenderPronoun = 'their';
			}

			matchReport = `In a ${closeness} battle, the ${Wheight} ${eyeColor} ${hairColor} ${race} from ${placeOfBirth} in the ${publisher} universe known as ${champName} was able to use their${champWins} to defeat the ${Lheight} ${LeyeColor} ${LhairColor} ${Lrace} from ${LplaceOfBirth} in the ${Lpublisher} universe known as ${loserName}`;
		} else {
			matchReport = `In a battle that drew to a stalemate, a tie was had between ${champName} and ${loserName}.`;
		}
		matchReportRef.current.style.fontsize = '1.3rem;';
		matchReportRef.current.innerText = matchReport;
		if (champVar === 'A') {
			winnerImg.current.src = fighterA[1];
		} else if (champVar === 'B') {
			winnerImg.current.src = fighterB[1];
		}
	}

	function getFullInfo(id, idB) {
		const key = `684260262142283`;
		const cors = `https://cors-anywhere.herokuapp.com/`;
		const site = `${cors}https://superheroapi.com/api/${key}/${id}`;
		const siteB = `${cors}https://superheroapi.com/api/${key}/${idB}`;
		console.log(site);
		// axios
		// 	.get(site)
		// 	.then((responseA) => {
		// *******************************
		fullDataA = fakeData2;
		// fullDataA = responseA;
		// **************************************
		// 		axios
		// 			.get(siteB)
		// 			.then((responseB) => {
		// *******************************************
		fullDataB = fakeData3;

		// fullDataB = responseB;
		//********************************* */
		writeMatchReport();
		// 			})
		// 			.catch((err) => {
		// 				alert('Error while searching: ' + err);
		// 			});
		// 	})
		// 	.catch((err) => {
		// 		alert('Error while searching: ' + err);
		// 	});
	}

	function beginBattle() {
		decideWinner();

		//hide buttons
		readyBtn.current.classList.add('hidden');
		resetBtn.current.classList.add('hidden');

		// stretch boxes
		cardA.current.classList.add('battlingA');
		cardB.current.classList.add('battlingB');

		// set time between skills
		// const interval = 1700;
		// const interval = 900;
		const interval = 800;

		// fade image
		window.setTimeout(() => {
			imgA.current.classList.add('fade');
		}, interval);

		window.setTimeout(() => {
			imgB.current.classList.add('fade');
		}, interval);

		// make stats box display block
		window.setTimeout(() => {
			statsA.current.style = 'display: block';
		}, interval * 2);

		window.setTimeout(() => {
			statsB.current.style = 'display: block';
		}, interval * 2);

		// begin displaying the stats

		// intel
		window.setTimeout(() => {
			intelA.current.style = 'opacity: 1;';
			intelA.current.style.transform = 'scale(1)';
		}, interval * 3);

		window.setTimeout(() => {
			intelB.current.style = 'opacity: 1;';
			intelB.current.style.transform = 'scale(1)';
		}, interval * 5.2);

		// strength
		window.setTimeout(() => {
			// set previous winner
			if (intelWinVar === 'A') {
				// woosh.play();
				intelA.current.style.color = 'white';
				intelB.current.style.color = 'grey';
				intelIconA.current.classList.add('shown-icon');
				intelIconA.current.classList.remove('hidden-icon');
			} else if (intelWinVar === 'B') {
				intelA.current.style.color = 'grey';
				intelB.current.style.color = 'white';
				intelIconB.current.classList.remove('hidden-icon');
				intelIconB.current.classList.add('shown-icon');
			}
			strengthA.current.style = 'opacity: 1;';
			strengthA.current.style.transform = 'scale(1)';
		}, interval * 7.6);

		window.setTimeout(() => {
			strengthB.current.style = 'opacity: 1;';
			strengthB.current.style.transform = 'scale(1)';
		}, interval * 9);

		// speed

		window.setTimeout(() => {
			// set previous winner
			if (strengthWinVar === 'A') {
				strengthB.current.style.color = 'grey';
				strengthA.current.style.color = 'white';
				strengthIconA.current.classList.add('shown-icon');
				strengthIconA.current.classList.remove('hidden-icon');
			} else if (strengthWinVar === 'B') {
				strengthA.current.style.color = 'grey';
				strengthB.current.style.color = 'white';
				strengthIconB.current.classList.add('shown-icon');
				strengthIconB.current.classList.remove('hidden-icon');
			}
			speedA.current.style = 'opacity: 1;';
			speedA.current.style.transform = 'scale(1)';
		}, interval * 11);

		window.setTimeout(() => {
			speedB.current.style = 'opacity: 1;';
			speedB.current.style.transform = 'scale(1)';
		}, interval * 13);

		// dura
		window.setTimeout(() => {
			// set previous winner
			if (speedWinVar === 'A') {
				speedA.current.style.color = 'white';
				speedB.current.style.color = 'grey';
				speedIconA.current.classList.add('shown-icon');
				speedIconA.current.classList.remove('hidden-icon');
			} else if (speedWinVar === 'B') {
				speedA.current.style.color = 'grey';
				speedB.current.style.color = 'white';
				speedIconB.current.classList.add('shown-icon');
				speedIconB.current.classList.remove('hidden-icon');
			}
			duraA.current.style = 'opacity: 1;';
			duraA.current.style.transform = 'scale(1)';
		}, interval * 15);

		window.setTimeout(() => {
			duraB.current.style = 'opacity: 1;';
			duraB.current.style.transform = 'scale(1)';
		}, interval * 17);

		// power
		window.setTimeout(() => {
			// set previous winner
			if (duraWinVar === 'A') {
				duraA.current.style.color = 'white';
				duraB.current.style.color = 'grey';
				duraIconA.current.classList.add('shown-icon');
				duraIconA.current.classList.remove('hidden-icon');
			} else if (duraWinVar === 'B') {
				duraA.current.style.color = 'grey';
				duraB.current.style.color = 'white';
				duraIconB.current.classList.add('shown-icon');
				duraIconB.current.classList.remove('hidden-icon');
			}
			powerA.current.style = 'opacity: 1;';
			powerA.current.style.transform = 'scale(1)';
		}, interval * 19);

		window.setTimeout(() => {
			powerB.current.style = 'opacity: 1;';
			powerB.current.style.transform = 'scale(1)';
		}, interval * 21);

		// combat
		window.setTimeout(() => {
			// set previous winner
			if (powerWinVar === 'A') {
				powerA.current.style.color = 'white';
				powerB.current.style.color = 'grey';
				powerIconA.current.classList.add('shown-icon');
				powerIconA.current.classList.remove('hidden-icon');
			} else if (powerWinVar === 'B') {
				powerA.current.style.color = 'grey';
				powerB.current.style.color = 'white';
				powerIconB.current.classList.add('shown-icon');
				powerIconB.current.classList.remove('hidden-icon');
			}
			combatA.current.style = 'opacity: 1;';
			combatA.current.style.transform = 'scale(1)';
		}, interval * 23);

		window.setTimeout(() => {
			combatB.current.style = 'opacity: 1;';
			combatB.current.style.transform = 'scale(1)';
		}, interval * 25);

		window.setTimeout(() => {
			// set previous winner
			if (combatWinVar === 'A') {
				combatA.current.style.color = 'white';
				combatB.current.style.color = 'grey';
				combatIconA.current.classList.add('shown-icon');
				combatIconA.current.classList.remove('hidden-icon');
			} else if (combatWinVar === 'B') {
				combatA.current.style.color = 'grey';
				combatB.current.style.color = 'white';
				combatIconB.current.classList.add('shown-icon');
				combatIconB.current.classList.remove('hidden-icon');
			}
		}, interval * 27);

		// show report and hide cards
		window.setTimeout(() => {
			vsRef.current.style.display = 'none';
			cardA.current.style.display = 'none';
			cardB.current.style.display = 'none';
			reportWrap.current.style.display = 'flex';
			report.current.style.display = 'flex';
			window.setTimeout(() => {
				report.current.classList.remove('match-report-hidden');
				report.current.classList.add('match-report-main');
				newMatch.current.classList.remove('hidden');
				newMatch.current.classList.add('reset-from-report-btn');
			}, 200);
		}, interval * 31);
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
										<img result={b} src={a[1]} className="hero-img" />
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
										<img src={a[1]} result={b} className="hero-img" />
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
		fighterAUsableStatsVar = fighterAStats;
		fighterBUsableStatsVar = fighterBStats;
		setFighterAUsableStats(fighterAStats);
		setFighterBUsableStats(fighterBStats);
		// removeNullsAnd100s(fighterAStats, fighterBStats);

		//intel
		if (fighterAStats.intelligence > fighterBStats.intelligence) {
			intelWinVar = 'A';
			setIntelWin('A');
			aCount++;
		} else if (fighterAStats.intelligence === fighterBStats.intelligence) {
			intelWinVar = 'tie';
			setIntelWin('tie');
		} else {
			intelWinVar = 'B';
			setIntelWin('B');
			bCount++;
		}

		//strength
		if (fighterAStats.strength > fighterBStats.strength) {
			strengthWinVar = 'A';
			setStrengthWin('A');
			aCount++;
		} else if (fighterAStats.strength === fighterBStats.strength) {
			strengthWinVar = 'tie';
			setStrengthWin('tie');
		} else {
			strengthWinVar = 'B';
			setStrengthWin('B');
			bCount++;
		}

		//speed
		if (fighterAStats.speed > fighterBStats.speed) {
			speedWinVar = 'A';
			setSpeedWin('A');
			aCount++;
		} else if (fighterAStats.speed === fighterBStats.speed) {
			speedWinVar = 'tie';
			setSpeedWin('tie');
		} else {
			speedWinVar = 'B';
			setSpeedWin('B');
			bCount++;
		}

		//combat
		if (fighterAStats.combat > fighterBStats.combat) {
			combatWinVar = 'A';
			setCombatWin('A');
			aCount++;
		} else if (fighterAStats.speed === fighterBStats.speed) {
			combatWinVar = 'tie';
			setCombatWin('tie');
		} else {
			combatWinVar = 'B';
			setCombatWin('B');
			bCount++;
		}

		//durability
		if (fighterAStats.durability > fighterBStats.durability) {
			duraWinVar = 'A';
			setDuraWin('A');
			aCount++;
		} else if (fighterAStats.durability === fighterBStats.durability) {
			duraWinVar = 'tie';
			setDuraWin('tie');
		} else {
			duraWinVar = 'B';
			setDuraWin('B');
			bCount++;
		}

		//power
		if (fighterAStats.power > fighterBStats.power) {
			powerWinVar = 'A';
			setPowerWin('A');
			aCount++;
		} else if (fighterAStats.power === fighterBStats.power) {
			powerWinVar = 'tie';
			setPowerWin('tie');
		} else {
			powerWinVar = 'B';
			setPowerWin('B');
			bCount++;
		}

		decideChamp();
		getFullInfo(fighterA[2], fighterB[2]);
	}

	function decideChamp() {
		if (aCount > bCount) {
			setChamp(fighterA[0]);
			champVar = 'A';
		} else if (bCount > aCount) {
			setChamp(fighterB[0]);
			champVar = 'B';
		} else {
			setChamp('Battle is a draw');
			champVar = 'tie';
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
						className="ind-stat"
						className={
							intelWinVar === 'A' || intelWin === 'tie' ? 'winner' : 'loser'
						}
						ref={intelA}>
						Intelligence: {fighterAUsableStats.intelligence}
					</p>
					<p
						className="ind-stat"
						className={
							strengthWinVar === 'A' || strengthWin === 'tie'
								? 'winner'
								: 'loser'
						}
						ref={strengthA}>
						Strength: {fighterAUsableStats.strength}
					</p>
					<p
						className="ind-stat"
						className={
							speedWinVar === 'A' || speedWin === 'tie' ? 'winner' : 'loser'
						}
						ref={speedA}>
						Speed: {fighterAUsableStats.speed}
					</p>
					<p
						className="ind-stat"
						className={
							duraWinVar === 'A' || duraWin === 'tie' ? 'winner' : 'loser'
						}
						ref={duraA}>
						Durability: {fighterAUsableStats.durability}
					</p>
					<p
						className="ind-stat"
						className={
							powerWinVar === 'A' || powerWin === 'tie' ? 'winner' : 'loser'
						}
						ref={powerA}>
						Power: {fighterAUsableStats.power}
					</p>
					<p
						className="ind-stat"
						className={
							combatWinVar === 'A' || combatWin === 'tie' ? 'winner' : 'loser'
						}
						ref={combatA}>
						Combat: {fighterAUsableStats.combat}
					</p>
				</React.Fragment>
			);
		}
	}

	function renderStatsB() {
		if (fighterAUsableStats !== 'none' && fighterBUsableStats !== 'none') {
			return (
				<React.Fragment>
					<p
						className="ind-stat"
						className={
							intelWin === 'B' || intelWin === 'tie' ? 'winner' : 'loser'
						}
						ref={intelB}>
						Intelligence: {fighterBUsableStats.intelligence}
					</p>
					<p
						className="ind-stat"
						className={
							strengthWin === 'B' || strengthWin === 'tie' ? 'winner' : 'loser'
						}
						ref={strengthB}>
						Strength: {fighterBUsableStats.strength}
					</p>
					<p
						className="ind-stat"
						className={
							speedWin === 'B' || speedWin === 'tie' ? 'winner' : 'loser'
						}
						ref={speedB}>
						Speed: {fighterBUsableStats.speed}
					</p>
					<p
						className="ind-stat"
						className={
							duraWin === 'B' || duraWin === 'tie' ? 'winner' : 'loser'
						}
						ref={duraB}>
						Durability: {fighterBUsableStats.durability}
					</p>
					<p
						className="ind-stat"
						className={
							powerWin === 'B' || powerWin === 'tie' ? 'winner' : 'loser'
						}
						ref={powerB}>
						Power : {fighterBUsableStats.power}
					</p>
					<p
						className="ind-stat"
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

	function makeGridA() {
		return (
			<div className="grid-icons">
				<p ref={intelIconA} className="hidden-icon">
					🧠
				</p>
				<p ref={strengthIconA} className="hidden-icon">
					💪
				</p>
				<p ref={speedIconA} className="hidden-icon">
					💨
				</p>
				<p ref={duraIconA} className="hidden-icon">
					🔋
				</p>
				<p ref={powerIconA} className="hidden-icon">
					🦍
				</p>
				<p ref={combatIconA} className="hidden-icon">
					⚔️
				</p>
			</div>
		);
	}

	function makeGridB() {
		return (
			<div className="grid-icons">
				<p ref={intelIconB} className="hidden-icon">
					🧠
				</p>
				<p ref={strengthIconB} className="hidden-icon">
					💪
				</p>
				<p ref={speedIconB} className="hidden-icon">
					💨
				</p>
				<p ref={duraIconB} className="hidden-icon">
					🔋
				</p>
				<p ref={powerIconB} className="hidden-icon">
					🦍
				</p>
				<p ref={combatIconB} className="hidden-icon">
					⚔️
				</p>
			</div>
		);
	}

	function showStatsA() {
		return (
			<div ref={statsA} className="stats-hidden">
				{makeGridA()}
				{renderStatsA()}
			</div>
		);
	}
	function showStatsB() {
		return (
			<div ref={statsB} className="stats-hidden">
				{makeGridB()}
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
	function resetFromReport() {
		history.push('Reset');
	}
	function resetFrodmReport() {
		// window.location.reload(false);
		if (inputA.current !== null) inputA.current.value = '';
		if (inputB.current !== null) inputB.current.value = '';
		//end of input clearing
		setSearchDone(false);
		setCanSearch(true);
		setFighterA('none');
		setFighterB('none');
		setReady(false);
		setSearchResults(); //name, image, id, powerstats
		setSearchResultsB(); //name, image, id, powerstats
		setTotalButtons([]);
		setTotalButtonsB([]);
		setSuggestions([]);
		setSuggestionsB([]);
		setHighlighted();
		setHighlightedB();
		setFighterAUsableStats('');
		setFighterBUsableStats('');
		setIntelWin('');
		setCombatWin('');
		setDuraWin('');
		setStrengthWin('');
		setPowerWin('');
		setSpeedWin('');
		setAWins(0);
		setBWins(0);
		setAFullInfo('');
		setBFullInfo('');
		setChamp(null);
		// end of state
		champVar = '';
		intelWinVar = '';
		combatWinVar = '';
		duraWinVar = '';
		strengthWinVar = '';
		powerWinVar = '';
		speedWinVar = '';
		fighterAUsableStatsVar = '';
		fighterBUsableStatsVar = '';
		fullDataA = '';
		fullDataB = '';
		bCount = 0;
		aCount = 0;
		matchReport = 'init';
		// end of global vars

		vsRef.current.style.display = 'flex';
		// end ofvs

		readyBtn.current.classList.add('hidden');
		resetBtn.current.classList.remove('hidden');
		// end of button setting

		cardA.current.classList.remove('battlingA');
		cardB.current.classList.remove('battlingB');
		cardA.current.classList.add('search-a');
		cardB.current.classList.add('search-b');
		cardA.current.style.background = 'blue';
		cardA.current.style.display = 'block';
		cardB.current.style.display = 'block';
		// end of cards

		if (imgA.current !== null) imgA.current.classList.remove('fade');
		if (imgB.current !== null) imgB.current.classList.remove('fade');
		if (imgA.current !== null) imgA.current.classList.add('fighter-b-img');
		if (imgB.current !== null) imgB.current.classList.add('fighter-b-img');
		// end of image fade

		if (statsA.current !== null) statsA.current.classList.add('stats-hidden');
		if (statsB.current !== null) statsB.current.classList.add('stats-hidden');
		// end of the stats boxes

		//A icons
		if (intelIconA.current !== null) {
			intelIconA.current.classList.add('hidden-icon');
			strengthIconA.current.classList.add('hidden-icon');
			speedIconA.current.classList.add('hidden-icon');
			duraIconA.current.classList.add('hidden-icon');
			powerIconA.current.classList.add('hidden-icon');
			combatIconA.current.classList.add('hidden-icon');
			// B icons
			intelIconB.current.classList.add('hidden-icon');
			strengthIconB.current.classList.add('hidden-icon');
			speedIconB.current.classList.add('hidden-icon');
			duraIconB.current.classList.add('hidden-icon');
			powerIconB.current.classList.add('hidden-icon');
			combatIconB.current.classList.add('hidden-icon');
		}
		// end of icons

		// grids of icons
		statsA.current.classList.add('stats-hidden');
		statsB.current.classList.add('stats-hidden');
		statsA.current.style = 'display: none';
		statsB.current.style = 'display: none';

		// A stats
		if (intelA.current !== null) {
			intelA.current.style.display = 'none';
			strengthA.current.style.display = 'none';
			speedA.current.style.display = 'none';
			duraA.current.style.display = 'none';
			powerA.current.style.display = 'none';
			combatA.current.style.display = 'none';
			// B stats
			intelB.current.style.display = 'none';
			strengthB.current.style.display = 'none';
			speedB.current.style.display = 'none';
			duraB.current.style.display = 'none';
			powerB.current.style.display = 'none';
			combatB.current.style.display = 'none';
		}
		// end of stats

		if (report.current !== null) {
			report.current.classList.remove('match-report-main');
			report.current.classList.add('match-report-hidden');
			report.current.style.display = 'none';
			reportWrap.current.style.display = 'none';
		}
		//end of report
	}

	function reset() {
		// window.location.reload(false);
		if (inputA.current !== null) inputA.current.value = '';
		if (inputB.current !== null) inputB.current.value = '';
		//end of input clearing
		setSearchDone(false);
		setCanSearch(true);
		setFighterA('none');
		setFighterB('none');
		setReady(false);
		setSearchResults(); //name, image, id, powerstats
		setSearchResultsB(); //name, image, id, powerstats
		setTotalButtons([]);
		setTotalButtonsB([]);
		setSuggestions([]);
		setSuggestionsB([]);
		setHighlighted();
		setHighlightedB();
		setFighterAUsableStats('');
		setFighterBUsableStats('');
		setIntelWin('');
		setCombatWin('');
		setDuraWin('');
		setStrengthWin('');
		setPowerWin('');
		setSpeedWin('');
		setAWins(0);
		setBWins(0);
		setAFullInfo('');
		setBFullInfo('');
		setChamp(null);
		// end of state
		champVar = '';
		intelWinVar = '';
		combatWinVar = '';
		duraWinVar = '';
		strengthWinVar = '';
		powerWinVar = '';
		speedWinVar = '';
		fighterAUsableStatsVar = '';
		fighterBUsableStatsVar = '';
		fullDataA = '';
		fullDataB = '';
		bCount = 0;
		aCount = 0;
		matchReport = 'init';

		// end of global vars

		readyBtn.current.classList.add('hidden');
		resetBtn.current.classList.remove('hidden');
		// of button setting
	}

	function renderWinnerImg() {
		return <img ref={winnerImg} className="hero-img" src={rickImg} />;
	}

	function renderChamp() {
		if (champ !== 'Battle is a draw') {
			return `Champion: ${champ}`;
		} else {
			return `BATTLE IS A DRAW!`;
		}
	}

	return (
		<React.Fragment>
			<MatchReport ref={reportWrap}>
				<div className="match-report-hidden" ref={report}>
					<h1>{renderChamp()}</h1>
					{renderWinnerImg()}
					<p className="match-report" ref={matchReportRef}>
						hello world
					</p>

					<button ref={newMatch} className="hidden" onClick={resetFromReport}>
						New Battle
					</button>
				</div>
			</MatchReport>
			<SearchDiv>
				<div className="search-a" ref={cardA}>
					{renderSearchA()}
					{showFighterA()}
					{showStatsA()}
					<div id="loadA" className="hidden">
						<Loading />
					</div>
				</div>
				<div ref={vsRef} id="vs">
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
