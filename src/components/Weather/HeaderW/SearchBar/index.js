import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// json to convert country codes
import iso3 from '../../../../json/iso3.json';
import names from '../../../../json/twoToName.json';

//images
import gps from '../../img/gps.png';
import fave from '../../img/fave.png';

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
	setShowModal,
	setShowLoader,
} from '../../../../actions';

function SearchBar() {
	// refs
	const inputRef = useRef();

	// state
	const [totalButtons, setTotalButtons] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const [value, setValue] = useState('');
	const [highlighted, setHighlighted] = useState();
	const [locationRefused, setLocationRefused] = useState(false);

	// redux
	// state
	const dispatch = useDispatch();
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
		hideResults();

		inputRef.current.blur();
	}

	function handleEsc() {
		inputRef.current.blur();
	}

	function makeButtonsArray() {
		let el,
			newArray = [];

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

		////////////////////////
		//  add faves

		el = document.getElementById('but-fave-0');
		if (el !== null) {
			// run through the list of faves and add each to the array
			for (let i = 0; i < 3; i++) {
				el = document.getElementById(`but-fave-${i}`);
				if (el !== null) {
					newArray.push(el);
				}
			}
		}

		//////////////////////////////////////
		// handle adding the location button to the array
		el = document.getElementById('but-location');
		if (el !== null) {
			// add el to array
			newArray.push(el);
		}

		setTotalButtons(newArray);
		return newArray;
	}

	function clearOldHighlights(a) {
		a.forEach((i) => {
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
		if (countryCode === undefined) {
		} else {
			const flagImage = require(`../../img/flags/${countryCode}.png`);
			return (
				<img
					alt="flag"
					src={flagImage}
					onMouseLeave={handleMouseLeave}
					onMouseOver={handleMouseOverImg}
				/>
			);
		}
	}

	function handleMouseOverImg(e) {
		clearAllHighlights();
		setHighlighted(e.target.parentElement);
		if (e.target.src !== undefined) {
		} else {
		}
	}

	function handleMouseOver(e) {
		clearAllHighlights();
		if (e.target.src !== undefined) {
			setHighlighted(e.target.parentElement);
		} else {
			setHighlighted(e.target);
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
			if (labelArr[i] !== labelArr[i - 1]) {
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
			results.forEach((item) => {
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
		dispatch(setShowLoader(true));

		// look for suggestions on Here API
		axios
			.get(hereSite)
			.then((response) => {
				// pass response to state setting Fn
				dispatch(setShowLoader(false));

				setStateSuggestions(response);
			})
			.catch((err) => {
				alert(err + ': Here api');
				dispatch(setShowLoader(false));
			});

		//return results
	}

	function searchForLatLonHere(id, name, country) {
		const site = `https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${id}&jsonattributes=1&gen=9&apiKey=${hereKey}`;
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
	function locationAvailable() {
		// check if geolocation avaialable
		if ('geolocation' in navigator) {
			return true;
		} else {
			return false;
		}
	}

	function handleClickLocation() {
		getCoords();
		hideResults();

		dispatch(setShowLoader(true));
	}

	//// searching by location ///

	function buildLocationForState(fullWeatherInfo) {
		// set the current location
		let cityName = fullWeatherInfo.data.name;
		let flagCode = fullWeatherInfo.data.sys.country;
		let lat = fullWeatherInfo.data.coord.lat;
		let lon = fullWeatherInfo.data.coord.lon;
		let countryName = convert2toFull(flagCode.toUpperCase());

		dispatch(
			setNeededForFavorite({
				// id: id,
				name: cityName,
				country: countryName,
				flag: flagCode,
			})
		);
		searchLocation(cityName, lat, lon, countryName);
	}

	function findWeatherInfo(latLon) {
		// initial weather info, just for location
		// if (location[0] === '');
		// {
		let key = `f63ee05c044c91f80348c4e021c7d476`;
		let site = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				buildLocationForState(response);
			})
			.catch((err) => {
				alert(`There appears to be an error on the weather site: ${err}`);
			});
		// }
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

	function locateFail(err) {
		alert('User denied geolocation');
		let el = document.getElementById('but-location');
		if (el !== null) {
			el.style = 'display: none;';
		}
		setLocationRefused(true);
	}

	function getCoords() {
		navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
	}

	////////////////////////////////////////////////////////
	/// buttons

	function showLocation() {
		if (locationRefused === true) {
		} else if (locationAvailable()) {
			return (
				<button
					key="location-but"
					id="but-location"
					onClick={handleClickLocation}
					onMouseLeave={handleMouseLeave}
					onMouseOver={handleMouseOver}>
					<img
						alt="gps"
						className="gps-img"
						src={gps}
						onMouseLeave={handleMouseLeave}
						onMouseOver={handleMouseOverImg}
					/>
					{'   '}
					Search Current Location
				</button>
			);
		}
	}

	///////////////////////////////////////////
	// for showing the favourites
	/////////////////////////////

	function favesDivider() {
		let favesList = buildFaves();

		if (favesList.length !== 0) {
			return <span>___ Favourites ___</span>;
		}
	}

	function buildFaves() {
		// add localStorage to stor
		let stor = window.localStorage;

		// init favesList
		let favesList = [];

		// build array of favesList
		for (let x = 0; x <= 2; x++) {
			// set key for stor
			let cur = `favourite${x}`;
			if (stor.getItem(cur) === null) {
				stor.setItem(cur, 'none');
				stor.getItem(`${cur}-Name`, 'none');
				stor.getItem(`${cur}-flag`, 'none');
			}
			// check if fave exists
			else if (stor.getItem(cur) !== 'none') {
				// build array
				let newArr = [
					stor.getItem(cur),
					stor.getItem(`${cur}-Name`),
					stor.getItem(`${cur}-flag`),
				];

				//add to favesList array
				favesList.push(newArr);
			}
		}
		return favesList;
	}

	function showFaves() {
		let favesList = buildFaves();

		if (favesList.length !== 0) {
			return favesList.map((item, i) => {
				let idName = `but-fave-${i}`;
				// build buttons with the faves
				return (
					<button
						key={item[0]}
						orderindex={i}
						id={idName}
						searchid={item[0]}
						fullsearchname={item[1]}
						countrycode={item[2]}
						displayname={item[1]}
						onMouseLeave={handleMouseLeave}
						onMouseOver={handleMouseOver}>
						{getFlagImg(item[2].toLowerCase())}
						<img
							alt="fave"
							src={fave}
							onMouseLeave={handleMouseLeave}
							onMouseOver={handleMouseOverImg}
						/>

						{'   '}
						{item[1]}
					</button>
				);
			});
		}
	}

	function locationDivider() {
		return <span>___ By Location ___</span>;
	}

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
						countrycode={item.countryCode.toUpperCase()}
						fullsearchname={item.fullName}
						locationid={item.id}
						displayname={item.displayName}
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
				getFullWeatherInfo(lat, lon, city, country);
				dispatch(newSearchLocation(response));
				dispatch(logFullSearchName(city));
				window.scroll({ top: 0, left: 0, behavior: 'smooth' });
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
				dispatch(setShowModal(false));
				dispatch(setShowLoader(false));
				// }, 600);
			})
			.catch((err) => {
				// log error and city name to redux store
				dispatch(locationError(city));
				dispatch(setImagesFound(''));

				dispatch(setShowModal(false));

				dispatch(setShowLoader(false));
				dispatch(hideAllComps(false));
			});
	}

	function hideResults() {
		let el = document.getElementById('search-results');
		el.style.transform = 'scale(0)';
		el = document.getElementById('input-container');
		el.style.borderRadius = '1rem';
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

	function searchByOpenWeatherId(id, city, country) {
		// for searching the faves
		const key = `f63ee05c044c91f80348c4e021c7d476`;
		const site = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				let latitude = response.data.coord.lat;
				let longitude = response.data.coord.lon;
				// must search for lat and lon and then pass it off to the same thing as
				// latLon here search Fn
				searchLocation(city, latitude, longitude, country);
			})
			.catch((err) => {
				alert(err);
			});
	}

	function handleBlur() {
		if (highlighted !== undefined) {
			if (highlighted.id === undefined) {
				// store button info
				let searchBut = totalButtons[highlighted];

				// if button is location, search location
				if (searchBut !== undefined && searchBut.id === 'but-location') {
					hideResults();

					handleClickLocation();
				} // else if it's fave
				else if (searchBut.id.includes('fave')) {
					// pressing enter on fave
					hideResults();

					// set faveoutite info
					let id = searchBut.attributes.searchid.value;
					let cityName = searchBut.attributes.displayname.value;
					let countryArr = searchBut.attributes.displayname.value.split(',');
					let flagCode = searchBut.attributes.countrycode.value;
					let fullCountry = countryArr[countryArr.length - 1].trim();
					dispatch(
						setNeededForFavorite({
							id: id,
							name: cityName,
							country: fullCountry,
							flag: flagCode,
						})
					);

					// search for weather
					dispatch(setShowLoader(true));

					searchByOpenWeatherId(id, cityName, fullCountry);
				} else {
					// pressing enter on suggestion
					hideResults();

					let fullCountry = searchBut.attributes.country.value;
					let cityName = reverseLabel(
						searchBut.attributes.fullsearchname.value
					);
					let id = searchBut.attributes.locationid.value;
					let flagCode = searchBut.attributes.countrycode.value;

					dispatch(
						setNeededForFavorite({
							id: id,
							name: cityName,
							country: fullCountry,
							flag: flagCode,
						})
					);
					dispatch(setShowLoader(true));

					searchForLatLonHere(id, cityName, fullCountry);
				}
			} else if (highlighted.id !== undefined) {
				if (highlighted.id === 'but-location') {
					// clicking location
					// works
					hideResults();

					handleClickLocation();
				} else if (highlighted.id.includes('fave')) {
					// clicking a fave
					// works
					let id = highlighted.attributes.searchid.value;
					let cityName = highlighted.attributes.displayname.value;
					let countryArr = highlighted.attributes.displayname.value.split(',');
					let fullCountry = countryArr[countryArr.length - 1].trim();
					let flagCode = highlighted.attributes.countrycode.value;
					hideResults();

					// set fave info
					dispatch(
						setNeededForFavorite({
							id: id,
							name: cityName,
							country: fullCountry,
							flag: flagCode,
						})
					);
					dispatch(setShowLoader(true));

					searchByOpenWeatherId(id, cityName, fullCountry);
				} else {
					//clicking on suggestion
					hideResults();

					let id = highlighted.attributes.locationid.value;
					let cityName = highlighted.attributes.displayname.value;
					let fullCountry = highlighted.attributes.country.value;
					let flagCode = highlighted.attributes.countrycode.value;

					dispatch(
						setNeededForFavorite({
							id: id,
							name: cityName,
							country: fullCountry,
							flag: flagCode,
						})
					);
					dispatch(setShowLoader(true));
					// check if the loader is showing when search is started
					searchForLatLonHere(id, cityName, fullCountry);
				}
			} else {
				// search suggestion
			}
		} else {
			hideResults();

			dispatch(setShowModal(false));
		}
	}

	function showModal(e) {
		e.preventDefault();
		dispatch(setShowModal(true));

		// set results div show and adjust border-radius
		let el = document.getElementById('search-results');
		el.style.transform = 'scale(1)';
		el = document.getElementById('input-container');
		el.style.borderRadius = '1rem 1rem 0 0';
	}

	function reset() {
		setValue('');
	}

	return (
		<React.Fragment>
			<div>
				<form>
					<div id="input-container" className="input-container">
						<span role="img" aria-label="search">
							🔎
						</span>
						<input
							ref={inputRef}
							id="search"
							type="text"
							autoComplete="off"
							value={value}
							className="search"
							onFocus={showModal}
							onChange={(e) => setValue(e.target.value)}
							onBlur={handleBlur}
							onKeyUp={handleKey}
							autoFocus={true}
						/>
						<button className="clear-search__btn" type="button" onClick={reset}>
							X
						</button>
					</div>
				</form>
				<div className="search__results" id="search-results">
					<ul>
						{showSearchResults()}
						{favesDivider()}
						{showFaves()}
						{locationDivider()}
						{showLocation()}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
}

export default SearchBar;
