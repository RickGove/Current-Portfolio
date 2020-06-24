import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TitleCon } from './style';

import faveImg from '../img/fave.png';
import faveImgEmpty from '../img/faveEmpty.png';

import { showImages } from '../../../actions';

function Title() {
	//// redux /////
	const dispatch = useDispatch();
	const hideAllCompsState = useSelector((state) => state.hideOrShow);
	const currentLocation = useSelector((state) => state.location);
	const searchLocation = useSelector((state) => state.searchedLocation); //may break shit
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const system = useSelector((state) => state.system);
	const faveouriteInfo = useSelector((state) => state.neededForFavorite);

	//////

	/////// utilities ////
	function calcTemp(temp) {
		let newTemp;
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
		let clouds, rain;
		const weatherData = searchWeatherData.data;
		if (weatherData !== undefined) {
			let text = weatherData.current.weather[0].description;
			let str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
				match.toUpperCase()
			);
			return str;
		}
	}

	function handleFaveClick() {}

	function renderFaveImg() {
		return (
			<img
				className="fave-img"
				onClick={handleFaveClick}
				isfave="True"
				src={faveImgEmpty}
				alt="favourite"
			/>
		);
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
