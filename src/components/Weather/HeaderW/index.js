import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import { WeatherHeadCon } from './Style/WeatherHeadCon';
import SearchBar from './SearchBar/';

import logo from '../img/Logo.png';
import { GlobalStyle } from '../../GlobalStyle';

import iso3 from '../../../json/iso3.json';
import names from '../../../json/twoToName.json';

////////////////////////
// redux imports
import {
	changeSystem,
	inputLocation,
	newSearchLocation,
	searchedWeatherData,
	locationError,
	logFullSearchName,
	enterTimeAtSearch,
	enterDateAtSearch,
	imageSearchHasBeenDoneFN,
	hideAllComps,
	setInitialLocationData,
	setImagesFound,
} from '../../../actions';

function HeaderW() {
	// state

	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState('');
	const [suggsFlags, setSuggsFlag] = useState('');
	const [currentlyHighlighted, setCurrentlyHighlighted] = useState('');
	const [suggsStates, setSuggsStates] = useState();
	// redux
	const dispatch = useDispatch();
	const system = useSelector((state) => state.system);
	const location = useSelector((state) => state.location);
	const searchLocationState = useSelector((state) => state.searchedLocation);
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const timeAtSearch = useSelector((state) => state.timeAtSearch);
	const dateAtSearch = useSelector((state) => state.dateAtSearch);

	const hideOrShow = useSelector((state) => state.hideOrShow);
	const dataFromInitialLocationSearch = useSelector(
		(state) => state.dataFromInitialLocationSearch
	);

	function organizeImages(res) {
		dispatch(setImagesFound(res));
		dispatch(imageSearchHasBeenDoneFN(true));
	}

	function searchImagesByCountry(country) {
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: { query: country, orientation: 'landscape' },
				headers: {
					Authorization:
						'Client-ID SSXPrsRuHu6aoF0rSMsUJ7HHWCpV6UkYMaXtjRiv5xQ',
				},
			})
			.then((res) => {
				if (res.data.total === 0) {
				} else {
					organizeImages(res);
				}
			})
			.catch((err) => {
				alert(err + ' build images for redux');
			});
	}

	function searchImagesByCity(city, country) {
		dispatch(setImagesFound(''));
		dispatch(imageSearchHasBeenDoneFN(false));
		console.log('unsplash city search');
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: { query: city, orientation: 'landscape' },
				headers: {
					Authorization:
						'Client-ID SSXPrsRuHu6aoF0rSMsUJ7HHWCpV6UkYMaXtjRiv5xQ',
				},
			})
			.then((res) => {
				if (res.data.total === 0) {
					searchImagesByCountry(country);
				} else {
					organizeImages(res);
				}
			})
			.catch((err) => {
				alert(err + ' build images for redux');
			});
	}

	function locationAvailable() {
		// check if geolocation avaialable
		if ('geolocation' in navigator) {
			return true;
		} else {
			return false;
		}
	}
	////////////////////////////////////////////////
	//// header code

	function getLocation() {
		// build location from gps
		console.log('getLocation fired');
		getCoords();
	}

	function buildLocationForState(fullWeatherInfo) {
		// set the current location

		let icon = fullWeatherInfo.data.weather[0].icon;
		let cityName = fullWeatherInfo.data.name;
		let tempHere = fullWeatherInfo.data.main.temp;
		let flagCode = fullWeatherInfo.data.sys.country;
		let lat = fullWeatherInfo.data.coord.lat;
		let lon = fullWeatherInfo.data.coord.lon;
		let newLocation = [cityName, tempHere, flagCode, icon, lat, lon];
		let countryName = convert2toFull(flagCode.toUpperCase());
		dispatch(inputLocation(newLocation));
		searchImagesByCity(cityName, countryName);
	}

	function convert2toFull(count) {
		let x = Object.entries(names);
		for (let i = 0; i < x.length; i++) {
			if (count === x[i][0]) {
				return x[i][1];
			}
		}
	}

	function splitDateAndTime(json) {
		let timeStr, dateStr, time, timeWithoutSecs;

		const splitTime = json.data.datetime.split('T');

		// time

		time = splitTime[1].split('.');
		timeWithoutSecs = time[0].split(':');
		time = `${timeWithoutSecs[0]}:${timeWithoutSecs[1]}`;
		timeStr = time.toString();

		//date
		dateStr = splitTime[0].toString();

		// return in an array
		return [timeStr, dateStr];
	}

	function getTimeAndDate(json) {
		let time, date;

		//split date
		let timeAndDateArr = splitDateAndTime(json);

		//get time
		time = timeAndDateArr[0];

		//get date
		date = timeAndDateArr[1];

		// store to redux
		dispatch(enterTimeAtSearch(time));
		dispatch(enterDateAtSearch(date));
		dispatch(hideAllComps(false));
	}

	function getTimeAtSearch() {
		// determine the time at the location
		if (searchWeatherData.data !== undefined) {
			let weatherData = searchWeatherData.data;
			let timeAtSearch;
			const timeZone = weatherData.timezone;
			const site = `https://worldtimeapi.org/api/timezone/${timeZone}`;
			axios
				.get(site)
				.then((response) => {
					getTimeAndDate(response);
				})
				.catch((err) => {
					alert(`There appears to be an error on the time zone site: ${err}`);
				});
		} else {
			alert(
				'There seems to be an error finding the local time in fn getTimeAtSearch in the header'
			);
		}
	}

	function findWeatherInfo(latLon) {
		// initial weather info, just for location
		if (location[0] === '');
		{
			console.log('axios ran for location');
			let key = `f63ee05c044c91f80348c4e021c7d476`;
			let site = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=${key}`;
			axios
				.get(site)
				.then((response) => {
					buildLocationForState(response);
					dispatch(setInitialLocationData(response));
				})
				.catch((err) => {
					alert(`There appears to be an error on the weather site: ${err}`);
				});
		}
	}

	function locateSuccess(pos) {
		let latLon = extractCoords(pos);
		findWeatherInfo(latLon);
	}

	function extractCoords(pos) {
		const lat = pos.coords.latitude;
		const lon = pos.coords.longitude;
		return [lat, lon];
	}

	function locateFail(err) {}

	function getCoords() {
		navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
	}

	function loadFlag() {
		if (location[2] !== '') {
			let countryCode = location[2].toLowerCase();
			const flagImage = require(`../img/flags/${countryCode}.png`);
			return flagImage;
		} else {
			return '';
		}
	}

	function buttonClick(e) {
		// console.log(e.target);
		// hack work around because the clicking is fucked up
		if (e.target.id === 'root') {
			searchSubmit();
		}
	}

	useEffect(() => {
		// click listener
		// document.addEventListener('click', buttonClick);

		// dealing with the saved system selection cookie
		var systemCookie = localStorage.getItem('system');
		if (systemCookie === null) {
			localStorage.setItem('system', 'C');
		}
		if (system !== systemCookie) {
			dispatch(changeSystem());
		}

		//get curent city and write it to the reux state
		if (location[0] === '') {
			getLocation();
		}

		// display location and weather info
		setSearchValue();
	});

	function setSearchValue() {
		let el = document.getElementById('search');
		el.value = value;
	}

	function setStateValue() {
		let el = document.getElementById('search');
		value = el.value;
	}

	function loadIcon() {
		if (location[3] !== '') {
			return `https://openweathermap.org/img/wn/${location[3]}.png`;
		}
	}

	function displaySwitch() {
		if (system === 'C') {
			return (
				<>
					<span id="C" className="system-choice">
						C
					</span>
					{'     '}
					<span id="F">F</span>
				</>
			);
		} else {
			return (
				<>
					<span id="C">C</span> {'     '}
					<span id="F" className="system-choice">
						F
					</span>
				</>
			);
		}
	}

	function chooseSuggestion0() {
		handleSuggestionHover(0);
	}

	function chooseSuggestion1() {
		handleSuggestionHover(1);
	}
	function chooseSuggestion2() {
		handleSuggestionHover(2);
	}
	function chooseSuggestion3() {
		handleSuggestionHover(3);
	}
	function chooseSuggestion4() {
		handleSuggestionHover(4);
	}

	function handleSuggestionHover(n) {
		let x = document.getElementById('search');
		x.value = suggestions[n];
	}

	function showSearchResults() {
		if (suggestions.length === 0) {
			return <button>Enter your search...</button>;
		} else {
			return suggestions.map((item, i) => {
				let flagImage = '';
				if (suggsFlags.length > 0) {
					let x = suggsFlags[i];
					if (x !== undefined) {
						flagImage = require(`../img/flags/${x}.png`);
					} else {
						flagImage = '';
					}
				} else {
					flagImage = '';
				}
				switch (i) {
					case 0:
						return (
							<button id="suggestion-0" key="0" onMouseOver={chooseSuggestion0}>
								{item}
								<img src={flagImage} />
							</button>
						);
						break;
					case 1:
						return (
							<button
								id="suggestion-1"
								key={item}
								onMouseOver={chooseSuggestion1}>
								{item} <img src={flagImage} />
							</button>
						);
						break;
					case 2:
						return (
							<button
								id="suggestion-2"
								key={item}
								onMouseOver={chooseSuggestion2}>
								{item}
								<img src={flagImage} />
							</button>
						);
						break;
					case 3:
						return (
							<button
								id="suggestion-3"
								key={item}
								onMouseOver={chooseSuggestion3}>
								{item}
								<img src={flagImage} />
							</button>
						);
						break;
					case 4:
						return (
							<button
								id="suggestion-4"
								key={item}
								onMouseOver={chooseSuggestion4}>
								{item}
								<img src={flagImage} />
							</button>
						);
						break;
					default:
						break;
				}
			});
		}
	}

	function switchSystem() {
		dispatch(changeSystem());
		system === 'C'
			? localStorage.setItem('system', 'F')
			: localStorage.setItem('system', 'C');
	}

	function calcHeaderTemp() {
		if (location[1] !== '') {
			let temp = location[1];
			let x = calcTemp(temp);

			return `${x}°`;
		} else {
			return '';
		}
	}

	function calcTemp(temp) {
		let newTemp;
		if (system === 'F') {
			let x = Math.round(parseFloat(temp - 273.15) * 9) / 5 + 32;

			return Math.round(x);
		} else {
			let x = Math.round(parseFloat(temp) - 273.15);
			return Math.round(x);
		}
	}

	function findCityName() {
		let city;
		let x = document.getElementById('search');
		if (x.value !== '') {
			let tempCity = x.value;
			let cityArr = tempCity.split(', ');
			if (cityArr.length === 1) {
				city = cityArr;
			} else {
				city = cityArr[cityArr.length - 2];
			}
			return city;
		}
	}

	function searchSubmit() {
		// get city name
		let city = findCityName();

		// set redux state to hide all other components
		dispatch(hideAllComps(true));

		// search location
		searchLocation(city);
	}

	function searchLocation(c) {
		let key = `f63ee05c044c91f80348c4e021c7d476`;
		let coord = ['lat', 'lon'];
		let site = `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				coord = [response.data.coord.lat, response.data.coord.lon];

				//log the search results
				dispatch(newSearchLocation(response));

				// clear the input
				let el = document.getElementById('search');

				// name to be displayed on the next
				// FIX FIX FIX
				dispatch(logFullSearchName(el.value));
				el.value = '';

				//log the weather info
				getFullWeatherInfo(coord[0], coord[1]);

				// log no error found
				dispatch(locationError('none'));
				dispatch(imageSearchHasBeenDoneFN(false));
			})
			.catch((err) => {
				// pass error and city to redux for use in the future
				if (c !== undefined) {
					dispatch(locationError(c));
				}
			});
	}

	function getFullWeatherInfo(lat, lon) {
		dispatch(searchedWeatherData(''));
		const key = `f63ee05c044c91f80348c4e021c7d476`;
		const site = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				// log response to redux store
				dispatch(searchedWeatherData(response));

				//get time at the search location
				getTimeAtSearch();
			})
			.catch((err) => {
				// log error and city name to redux store
				alert(
					`Error occured. Please contact rickbgove@gmail.com; code: 999999999`
				);
			});
	}
	function convert3to2(count) {
		let x = Object.entries(iso3);
		for (let i = 0; i < x.length; i++) {
			if (count === x[i][1]) {
				return x[i][0];
			}
		}
	}

	function lookUpSuggestions(search) {
		let key = `YVh-b0HlW3jpI3qPgzG4VZWtBDwhe4a42U4wlaNYB7w`;
		let site = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json
		?language=en&resultType=city&query=${search}&apiKey=${key}`;
		if (search !== '') {
			axios
				.get(site)
				.then((response) => {
					let suggs = [];
					let suggsFl = [];
					let suggsSt = [];
					for (let x = 0; x < response.data.suggestions.length; x++) {
						// get to just the city name
						let city = response.data.suggestions[x].label;
						let arr = city.split(', ');
						if (response.data.suggestions[x].countryCode === 'USA') {
							suggsSt.push(arr[arr.length - 2]);
						} else {
							suggsSt.push('');
						}
						let finalCity = arr[arr.length - 1];
						let finalState = arr[arr.length - 2];
						city = `${finalCity}, ${finalState}`;
						suggs.push(city);
						// convert the three digit code to 2 digit country
						let country2 = convert3to2(
							response.data.suggestions[x].countryCode
						);
						country2 = country2.toLowerCase();
						suggsFl.push(country2);
					}
					suggestions = [];
					suggestions = suggs;
					suggsFlags = suggsFl;
					suggsStates = suggsSt;
					showSearchResults();
				})
				.catch((err) => {
					alert(`There appears to be an error on the suggestion site: ${err}`);
				});
		}
	}

	function handleInputChange(e) {
		handleKeysOnInput(e);
		// set state
		//  setStateValue();
	}

	function showModal() {
		let modal = document.getElementById('modal-for-search-focus');
		modal.classList.remove('hide__modal');
		modal.classList.add('show__modal');

		// element.classList.toggle("mystyle");
	}

	function hideModal() {
		const modal = document.getElementById('modal-for-search-focus');
		modal.classList.add('hide__modal');
		modal.classList.remove('show__modal');

		const search = document.getElementById('search');
		search.blur();
	}

	function handleKeysOnInput(event) {
		if (event.key === 'Enter') {
			// event.preventDefault();
			searchSubmit();
			hideModal();
		} else if (event.which === 38) {
			event.preventDefault();
			upArrow();
		} else if (event.which === 40) {
			event.preventDefault();
			downArrow();
		} else {
			let el = document.getElementById('search');
			value = el.value;
			if (el.value === '') {
				suggestions = [];
			} // search for suggestions
			lookUpSuggestions(el.value);
		}
	}

	function upArrow() {
		let el = document.getElementById('search');
		switch (el.value) {
			case suggestions[1]:
				if (suggestions[0] !== undefined) {
					el.value = suggestions[0];
					const active = document.getElementById('suggestion-0');
				}
				break;
			case suggestions[2]:
				if (suggestions[1] !== undefined) {
					el.value = suggestions[1];
				}
				break;
			case suggestions[3]:
				if (suggestions[2] !== undefined) {
					el.value = suggestions[2];
				}
				break;
			default:
				el.value = suggestions[0];
				break;
		}
	}

	function downArrow() {
		let el = document.getElementById('search');
		switch (el.value) {
			case suggestions[0]:
				if (suggestions[1] !== undefined) {
					el.value = suggestions[1];
				}
				break;
			case suggestions[1]:
				if (suggestions[2] !== undefined) {
					el.value = suggestions[2];
				}
				break;
			case suggestions[2]:
				if (suggestions[3] !== undefined) {
					el.value = suggestions[3];
				}
				break;
			case suggestions[3]:
				if (suggestions[4] !== undefined) {
					el.value = suggestions[4];
				}
				break;
			default:
				el.value = suggestions[0];
				break;
		}
	}

	function chooseChooseSuggestion(n) {
		/// write a switch to trigger the chooseSuggestion of newSearchLocation
		switch (n) {
			case 0:
				chooseSuggestion0();
				break;
			case 1:
				chooseSuggestion1();
				break;
			case 2:
				chooseSuggestion2();
				break;

			case 3:
				chooseSuggestion3();
				break;

			case 4:
				chooseSuggestion4();
				break;
		}
		/// make sure that the choose suggestion functions also highlight the siggestions...
	}

	return (
		<>
			<GlobalStyle />
			<WeatherHeadCon>
				<div id="modal-for-search-focus"></div>
				<img alt="logo" className="logo" src={logo} />
				<img id="flag" alt="" className="flag" src={loadFlag()} />
				<img className="weather-image" alt="" src={loadIcon()} />
				<div id="temp" className="temp">
					{calcHeaderTemp()}
				</div>

				<div className="search-container">
					<SearchBar />
				</div>

				<div className="switch" onClick={switchSystem}>
					{displaySwitch()}
				</div>
			</WeatherHeadCon>
		</>
	);
}

export default HeaderW;
