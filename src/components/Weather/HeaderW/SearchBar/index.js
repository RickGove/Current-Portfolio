import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

// json to convert country codes
import iso3 from '../../../../json/iso3.json';
import names from '../../../../json/twoToName.json';

import gps from '../../img/gps.png';

// redux actions
import {
	hideAllComps,
	newSearchLocation,
	logFullSearchName,
	locationError,
	searchedWeatherData,
	imageSearchHasBeenDoneFN,
	enterTimeAtSearch,
	enterDateAtSearch,
	setImagesFound,
	setNeededForFavorite,
} from '../../../../actions';

function SearchBar() {
	// refs
	const inputRef = useRef();

	// state
	const [totalButtons, setTotalButtons] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const [value, setValue] = useState('Search here');
	const [highlighted, setHighlighted] = useState();

	//////////////////////////////////////////////////////////////
	//// for favourites in the future, might be better in redux
	// const [favesList, setFavesList] = useState([])
	/////

	// redux
	// state
	const dispatch = useDispatch();
	const currentLocation = useSelector((state) => state.location);

	// axios things
	const hereKey = `YVh-b0HlW3jpI3qPgzG4VZWtBDwhe4a42U4wlaNYB7w`;
	const hereSite = `https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json
		?language=en&resultType=city&query=${value}&apiKey=${hereKey}`;

	function organizeImages(res) {
		dispatch(setImagesFound(res));
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

	function handleKey(e) {
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
				handleChange();
		}
	}

	function handleEnter() {
		inputRef.current.blur();
		// let city, country;
		// let currentHighlight = totalButtons[highlighted];
		// if (currentHighlight !== undefined) {
		// 	// GPS location choses
		// 	if (currentHighlight.attributes.name !== undefined) {
		// 		// city = currentHighlight.attributes.name.value;
		// 		// set to redux state
		// 		dispatch(
		// 			logFullSearchName(`${currentLocation[0]}, ${currentLocation[2]}`)
		// 		);
		// 		let el = document.getElementById('but-location');
		// 		country = el.attributes.country.value;
		// 		searchLocation(
		// 			currentLocation[0],
		// 			currentLocation[4],
		// 			currentLocation[5],
		// 			country
		// 		);
		// 	}
		// 	// suggestions chosen
		// 	else if (currentHighlight.attributes.fullsearchname !== undefined) {
		// 		searchForLatLonHere(
		// 			currentHighlight.attributes.locationid.value,
		// 			currentHighlight.attributes.displayname.value,
		// 			currentHighlight.attributes.country.value
		// 		);
		// 		dispatch(
		// 			logFullSearchName(currentHighlight.attributes.displayname.value)
		// 		);
		// 	}
		// } else {
		// 	// only typing, no choice
		// 	// search by name 'city'
		// 	city = inputRef.current.value;
		// 	searchSubmit(city);
		// }
	}

	function handleEsc() {
		inputRef.current.blur();
	}

	function makeButtonsArray() {
		let el,
			newArray = [];
		//////////////////////////////////////
		// handle adding the location button to the array
		el = document.getElementById('but-location');
		if (el !== null) {
			// add el to array
			newArray[0] = el;
		}

		//////////////////////////
		/// add faves
		///// doesn't exist yet through

		// add favesList to state, or redux or something

		// el = document.getElementById('but-fave-0');
		// if (el !== null) {
		// 	// run through the list of faves and add each to the array
		// 	for (let i = 0; i < favesList.length; i++) {
		// 		el = document.getElementById(`but-${i}`);

		// 		newArray.push(el);
		// 	}
		// }

		//////////////////////////////////////
		/// add searches
		el = document.getElementById('but-0');
		if (el !== null) {
			// run through the list of suggestions and add each to the array
			for (let i = 0; i < suggestions.length; i++) {
				el = document.getElementById(`but-${i}`);

				newArray.push(el);
			}
		}
		setTotalButtons(newArray);
		return newArray;
	}

	function clearOldHighlights(a) {
		a.map((i) => {
			// toUnhighlight = document.getElementById(i);
			if (i !== null) {
				i.style = '';
				return;
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
			el.style = 'background-color: grey; opacity: 0.8;';
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
			el.style = 'background-color: grey; opacity: 0.8;';
		}
	}

	function convert2toFull(count) {
		let x = Object.entries(names);
		for (let i = 0; i < x.length; i++) {
			if (count === x[i][0]) {
				return x[i][1];
			}
		}
	}

	function getFlagImg(countryCode) {
		if (countryCode !== undefined) {
			const flagImage = require(`../../img/flags/${countryCode}.png`);
			return (
				<img
					src={flagImage}
					// onClick={handleImageClick}
				/>
			);
		}
	}

	function handleImageClick(e) {}

	function handleMouseOver(e) {
		clearAllHighlights();
		setHighlighted(e.target);
		if (e.target.src !== undefined) {
		} else {
		}
	}

	function handleMouseLeave() {
		setHighlighted();
	}

	function handleChange() {
		// register new value
		let search = inputRef.current.value;

		// set timeout to prevent spamming search
		window.setTimeout(() => {
			if (search === inputRef.current.value) {
				// begin search for places
				setTotalButtons([]);
				findSuggestions();
			}
		}, 1000);

		//display new results
	}

	function convert3to2(count) {
		let x = Object.entries(iso3);
		for (let i = 0; i < x.length; i++) {
			if (count === x[i][1]) {
				return x[i][0];
			}
		}
	}

	function reverseLabel(label) {
		// return the labe; in reverse order for better viewing UX
		let labelArr = label.split(', ');
		let newArr = [];
		// make new string with words
		for (let i = labelArr.length - 1; i > -1; i--) {
			// remove white spaces
			let nameNoSpaces = labelArr[i].trim();
			//prevent duplicates
			if (labelArr[i] != labelArr[i - 1]) {
				if (i === labelArr.length - 1) {
					newArr.push(`${nameNoSpaces}`);
				} else {
					//add space in front of first word
					newArr.push(` ${nameNoSpaces}`);
				}
			}
		}

		return newArr.toString();
	}

	function setStateSuggestions(r) {
		let suggs = [];
		const results = r.data.suggestions;
		if (results !== undefined) {
			results.map((item) => {
				//change country code to be usable by flags
				let countryCode = convert3to2(item.countryCode).toLowerCase();

				//reverse the order of item.label for displaying on the suggestions
				let displayName = reverseLabel(item.label);

				// get the id for future lat/lon search
				let locationId = item.locationId;

				// build new suggestion
				let newSugg = {
					fullName: item.label,
					countryCode,
					displayName,
					id: locationId,
				};

				// push new suggestion into suggestion array
				suggs.push(newSugg);
			});
			// set suggestions in state
			setSuggestions(suggs);
		}
	}

	function findSuggestions() {
		// look for suggestions on Here API
		axios
			.get(hereSite)
			.then((response) => {
				// pass response to state setting Fn
				setStateSuggestions(response);
			})
			.catch((err) => {
				alert(err + ': Here api');
			});

		//return results
	}

	function searchForLatLonHere(id, name, country) {
		const site = `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${id}&jsonattributes=1&gen=9&apiKey=${hereKey}`;
		let coord;
		axios
			.get(site)
			.then((response) => {
				//set lat and lon to redux state

				searchLocation(
					name,
					response.data.response.view[0].result[0].location.displayPosition
						.latitude,
					response.data.response.view[0].result[0].location.displayPosition
						.longitude,
					country
				);
			})
			.catch((err) => {
				alert(err + ' latLonById');
			});
	}

	function handleClick(e) {
		e.preventDefault();
		// for suggestion
		if (e.target.attributes.id !== undefined) {
			dispatch(hideAllComps(true));

			dispatch(logFullSearchName(e.target.attributes.displayname.value));
			searchForLatLonHere(
				e.target.attributes.locationId.value,
				e.target.attributes.displayname.value,
				e.target.attributes.country.value
			);
		}
	}

	function handleClickLocation() {
		let el = document.getElementById('but-location');
		let country = el.attributes.country.value;

		dispatch(logFullSearchName(`${currentLocation[0]}, ${currentLocation[2]}`));
		dispatch(
			setNeededForFavorite({
				id: currentLocation[0],
				name: currentLocation[4],
				country: currentLocation[5],
			})
		);
		searchLocation(
			currentLocation[0],
			currentLocation[4],
			currentLocation[5],
			country
		);
	}

	////////////////////////////////////////////////////////
	/// buttons

	function showLocation() {
		if (currentLocation[0] !== '') {
			let flag = currentLocation[2].toLowerCase();
			let fullCountry = convert2toFull(currentLocation[2]);

			return (
				<button
					key="location-but"
					name={currentLocation[0]}
					orderindex="location"
					id="but-location"
					country={fullCountry}
					lat={currentLocation[4]}
					lon={currentLocation[5]}
					// onClick={handleClickLocation}
					onMouseLeave={handleMouseLeave}
					onMouseOver={handleMouseOver}>
					{getFlagImg(flag)}
					<img
						src={gps}
						// onClick={handleClickLocation}
					/>
					{'   '}
					{currentLocation[0]}
				</button>
			);
		}
	}

	///////////////////////////////////////////
	// for showing the favourites
	/////////////////////////////
	// function showFaves() {
	// 	if (favesList.length !== 0) {
	// 		return favesList.map((item, i) => {
	// 			let idName = `but-fave-${i}`;
	// 			// build buttons with the suggestions
	// 			return (
	// 				<button
	// 					key={item.fullName}
	// 					orderindex={i}
	// 					id={idName}
	// 					fullsearchname={item.fullName}
	// 					displayname={item.displayName}
	// 					onClick={handleClick}
	// onMouseLeave={handleMouseLeave}
	// 					onMouseOver={handleMouseOver}>
	// 					{getFlagImg(item.countryCode)}
	// 					{'   '}
	// 					{item.displayName}
	// 				</button>
	// 			);
	// 		});
	// 	}
	// }

	function showSearchResults() {
		if (suggestions.length !== 0) {
			return suggestions.map((item, i) => {
				let fullCountry = convert2toFull(item.countryCode.toUpperCase());

				let idName = `but-${i}`;
				// build buttons with the suggestions
				return (
					<button
						key={item.fullName}
						orderindex={i}
						id={idName}
						country={fullCountry}
						fullsearchname={item.fullName}
						locationid={item.id}
						displayname={item.displayName}
						// onClick={handleClick}
						onMouseLeave={handleMouseLeave}
						onMouseOver={handleMouseOver}>
						{getFlagImg(item.countryCode)}
						{'   '}
						{item.displayName}
					</button>
				);
			});
		}
	}

	/////////////////////////////////////// end of buttons ///////////////////
	/////////////////////////////////
	///
	///////
	///

	function searchLocation(city, lat, lon, country) {
		dispatch(hideAllComps(true));

		const key = `f63ee05c044c91f80348c4e021c7d476`;
		let site;
		if (lat === undefined) {
			site = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
		} else {
			site = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
		}

		axios
			.get(site)
			.then((response) => {
				let coord = [response.data.coord.lat, response.data.coord.lon];
				getFullWeatherInfo(lat, lon, city, country);
				dispatch(newSearchLocation(response));
				dispatch(logFullSearchName(city));

				// change the site to the onecall API
				// let timezone = response.data.timezone;
				// getTimeAtSearch(timezone);
			})
			.catch((err) => {
				getFullWeatherInfo(lat, lon, city, country);
			});
	}

	async function getFullWeatherInfo(lat, lon, city, country) {
		const key = `f63ee05c044c91f80348c4e021c7d476`;
		const site = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				// log response to redux store
				dispatch(searchedWeatherData(response));
				dispatch(locationError('none'));
				dispatch(setImagesFound(''));
				//get time at the search location
				const tz = response.data.timezone;
				getTimeAtSearch(tz);
				searchImagesByCity(city, country);
				// window.setTimeout(() => {
				dispatch(hideAllComps(false));
				// }, 600);
			})
			.catch((err) => {
				// log error and city name to redux store
				dispatch(locationError(city));
				dispatch(setImagesFound(''));
				dispatch(hideAllComps(false));
			});
	}

	async function getTimeAtSearch(tz) {
		const site = `https://worldtimeapi.org/api/timezone/${tz}`;
		axios
			.get(site)
			.then((response) => {
				getTimeAndDate(response);
			})
			.catch((err) => {
				alert(`There appears to be an error on the time zone site: ${err}`);
			});
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

	function searchSubmit(city, country) {
		// get city name

		// set redux state to hide all other components
		dispatch(hideAllComps(true));

		// search location
		searchLocation(city, country);
	}

	function handleBlur() {
		// works for
		if (highlighted === undefined) {
		} else if (highlighted.id === 'but-location' || highlighted === 0) {
			// search location
			handleClickLocation();
		} else {
			let selection = suggestions[highlighted - 1];
			if (selection !== undefined) {
				let fullCountry = convert2toFull(selection.countryCode.toUpperCase());
				let cityName = reverseLabel(selection.fullName);
				console.log(selection.id, cityName, fullCountry);
				searchForLatLonHere(selection.id, cityName, fullCountry);
				dispatch(
					setNeededForFavorite({
						id: selection.id,
						name: cityName,
						country: fullCountry,
					})
				);
				dispatch(logFullSearchName(cityName));
			} else {
				console.log(
					highlighted.attributes.locationid.value,
					highlighted.attributes.displayname.value,
					highlighted.attributes.country.value
				);
				dispatch(logFullSearchName(highlighted.attributes.displayname.value));
				dispatch(
					setNeededForFavorite({
						id: highlighted.attributes.locationid.value,
						name: highlighted.attributes.displayname.value,
						country: highlighted.attributes.country.value,
					})
				);
				searchForLatLonHere(
					highlighted.attributes.locationid.value,
					highlighted.attributes.displayname.value,
					highlighted.attributes.country.value
				);
			}
			// console.log(selection); //works for enter
			// console.log(highlighted); // works for click
			// searchForLatLonHere(
			// 	selection.id,
			// 	selection.displayname,
			// 	selection.country
			// );
			// dispatch(logFullSearchName(selection.displayname));
		}
	}

	return (
		<React.Fragment>
			<input
				ref={inputRef}
				className="search"
				id="search"
				type="text"
				autoComplete="off"
				placeholder={value}
				className="search"
				// onFocus={this.showModal}
				onChange={() => setValue(inputRef.current.value)}
				onBlur={handleBlur}
				onKeyUp={handleKey}
				// onKeyPress={handleChange}
				autoFocus={true}
			/>
			<div className="search__results" id="search-results">
				<ul>
					{showLocation()}
					{/* favourites to be added later */}
					{/* {showFaves()} */}
					{showSearchResults()}
				</ul>
			</div>
		</React.Fragment>
	);
}

export default SearchBar;
