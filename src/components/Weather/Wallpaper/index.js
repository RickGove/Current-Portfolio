import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	searchedWeatherData,
	locationError,
	enterTimeAtSearch,
} from '../../../actions';

import { WallPic } from './style/';

import clearsky from '../img/clearsky.jpg';
import clearskyNight from '../img/clearskynight.jpg';
import rain from '../img/rain.jpg';
import snow from '../img/snow.jpg';
import clouds from '../img/clouds.jpg';
import earth from '../img/earth.jpg';

function Wallpaper() {
	//redux
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const timeAtSearch = useSelector((state) => state.timeAtSearch);
	const searchLocation = useSelector((state) => state.searchedLocation); //may break shit

	function renderWallPaper() {
		let wp;
		wp = getTypeOfWp();
		return getSrc(wp);
	}

	function getSrc(arr) {
		if (arr[2] === 'Rain') {
			return <img src={rain} />;
		} else if (arr[2] === 'Snow') {
			return <img src={snow} />;
		} else if (arr[1] === 'clouds') {
			return <img src={clouds} />;
		} else if (arr[0] === 'night') {
			return <img src={clearskyNight} />;
		} else {
			return <img src={clearsky} />;
		}
	}

	function getTypeOfWp() {
		let hour, day, clouds, rainSnowNone;

		// night or day; hour
		hour = getHour();
		day = determineDay(hour);

		// cloudiness; clouds
		clouds = getClouds();

		// rain / snow;
		rainSnowNone = getPrec();
		let toRet = [day, clouds, rainSnowNone];
		return toRet;
	}
	function determineDay(hour) {
		if (hour > 8 && hour < 22) {
			return 'day';
		} else {
			return 'night';
		}
	}

	function getPrec() {
		return searchWeatherData.data.current.weather[0].main;
	}

	function getClouds() {
		if (searchWeatherData.data !== undefined) {
			let clouds = searchWeatherData.data.current.clouds;
			if (clouds > 60) {
				return 'clouds';
			} else {
				return 'clear';
			}
		} else {
		}
	}

	function getHour(i) {
		let fullTime = timeAtSearch.split(':');
		let justHour = fullTime[0];
		let justHourInt = parseInt(justHour);
		return justHourInt;
	}

	if (searchLocation !== 'none' && searchWeatherData.data !== undefined) {
		return <WallPic>{renderWallPaper()}</WallPic>;
	} else {
		return (
			<WallPic>
				<img src={earth} />
				<div id="load-pics">
					<img src={rain} />
					<img src={snow} />
					<img src={clouds} />
					<img src={clearskyNight} />
					<img src={clearsky} />
				</div>
			</WallPic>
		);
	}
}

export default Wallpaper;
