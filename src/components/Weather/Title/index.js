import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TitleCon } from './style';

import faveImg from '../img/fave.png';
import faveImgEmpty from '../img/faveEmpty.png';

import { showImages } from '../../../actions';

function Title() {
	//// redux /////

	const dispatch = useDispatch();
	const currentLocation = useSelector((state) => state.location);
	const searchLocation = useSelector((state) => state.searchedLocation); //may break shit
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const system = useSelector((state) => state.system);
	const favouriteInfo = useSelector((state) => state.neededForFavorite);

	//////

	/////// utilities ////
	function calcTemp(temp) {
		if (system === 'F') {
			let x = Math.round(parseFloat(temp - 273.15) * 9) / 5 + 32;

			return `${Math.round(x)}°`;
		} else {
			let x = Math.round(parseFloat(temp) - 273.15);
			return `${Math.round(x)}°`;
		}
	}

	////////////////////////////////////////

	/////// rendering /////////////////////

	function cloudiness() {
		const weatherData = searchWeatherData.data;
		if (weatherData !== undefined) {
			let text = weatherData.current.weather[0].description;
			let str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
				match.toUpperCase()
			);
			return str;
		}
	}

	function getCurrentFaves() {
		//get faves from local store
		let fave0 = window.localStorage.getItem('favourite0');
		let fave1 = window.localStorage.getItem('favourite1');
		let fave2 = window.localStorage.getItem('favourite2');

		// make array of faves
		return [fave0, fave1, fave2];
	}

	function removeFave(pos) {
		let stor = window.localStorage;
		stor.setItem(pos, 'none');
		stor.setItem(`${pos}-Name`, 'none');
		stor.setItem(`${pos}-flag`, 'none');
	}

	function setFave(pos, id) {
		let stor = window.localStorage;
		stor.setItem(pos, id);
		stor.setItem(`${pos}-Name`, favouriteInfo.name.trim());
		stor.setItem(`${pos}-flag`, favouriteInfo.flag);
	}

	function handleFaveClick() {
		// get current faves
		let faveArray = getCurrentFaves();

		// store current search ID to var
		let currentId = searchLocation.data.id;

		// set variable of whether id was saved, if not store in #3
		let stored = false;

		// search the array of faves
		faveArray.forEach((item, index) => {
			// set the current localstorage key name
			let current = `favourite${index}`;

			//check if storage is empty, and init
			if (item === null) {
				// init
				removeFave(current);

				// see if item is already saved
			} else if (item === currentId) {
				// remove item
				removeFave(current);

				// change heart
				let el = document.getElementById('fave-img');
				el.src = faveImgEmpty;

				// prevent any more alterations
				stored = true;
				return;
			} else if (item === 'none' && stored === false) {
				// if not saved, save it to local Storage
				setFave(current, currentId);

				// prevent future storage at the moment
				stored = true;

				//change heart logo
				let el = document.getElementById('fave-img');
				el.src = faveImg;
			}
		});

		// if all poistions were already full, replace 0
		if (stored === false) {
			//change heart
			let el = document.getElementById('fave-img');
			el.src = faveImg;
			setFave(`favourite0`, currentId);
		}
	}

	function renderFaveImg() {
		// build array of faves
		let faveArray = getCurrentFaves();

		// store current search id
		let currentId = searchLocation.data.id;

		// set var to tell if item is found in faves
		let found = false;

		// set what to return
		faveArray.forEach((item, index) => {
			if (item === currentId && found === false) {
				found = true;
			}
		});
		if (found === false) {
			return (
				<img
					id="fave-img"
					className="fave-img"
					onClick={handleFaveClick}
					src={faveImgEmpty}
					alt="favourite"
				/>
			);
		} else {
			return (
				<img
					id="fave-img"
					className="fave-img"
					onClick={handleFaveClick}
					src={faveImg}
					alt="favourite"
				/>
			);
		}

		//
		/* if (returnItem === 'faveItem') {
			
		} else {
			
		} */
	}

	function renderTitle() {
		let data = searchLocation.data;

		if (errorInSearch !== 'none') {
			// error in search

			dispatch(showImages(false));
			return (
				<React.Fragment>
					<h1>{errorInSearch} has no available weather info</h1>

					<div className="fill-screen"></div>
				</React.Fragment>
			);
		} else if (searchLocation === 'none') {
			if (currentLocation[2] !== '') {
				// only location via gps is available

				const country = currentLocation[2].toLowerCase();
				const flagImage = require(`../img/flags/${country}.png`);
				return (
					<React.Fragment>
						<h1>
							{currentLocation[0]} <img src={flagImage} alt={country} />
						</h1>
						<div className="fill-screen"></div>
					</React.Fragment>
				);
			}
		} else if (
			searchLocation !== 'none' &&
			searchWeatherData.data !== undefined
		) {
			// full weather info available

			const country = data.sys.country.toLowerCase();
			const flagImage = require(`../img/flags/${country}.png`);
			dispatch(showImages(true));

			return (
				<React.Fragment>
					<h1>
						{renderFaveImg()}
						{fullSearchName} <img src={flagImage} alt={country} />{' '}
					</h1>
					<h4>{cloudiness()}</h4>
					<h1 className="huge-temp">
						{getCurrentWeatherForSearchLocation()}
						<img className="icon" alt={flagImage} src={getIcon()} />
					</h1>
					<h4>
						High: {calcTemp(searchWeatherData.data.daily[0].temp.day)} Low:{' '}
						{calcTemp(searchWeatherData.data.daily[0].temp.min)}
					</h4>
				</React.Fragment>
			);
		} else {
			dispatch(showImages(false));
		}
	}

	function getIcon() {
		if (searchWeatherData.data.current.weather[0].icon !== undefined) {
			let icon = searchWeatherData.data.current.weather[0].icon;
			return `https://openweathermap.org/img/wn/${icon}@2x.png`;
		} else {
			return <p>hello</p>;
		}
	}

	function getCurrentWeatherForSearchLocation() {
		return calcTemp(searchWeatherData.data.current.temp);
	}

	return (
		<>
			<TitleCon>{renderTitle()}</TitleCon>
		</>
	);
}

export default Title;
