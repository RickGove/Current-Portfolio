import React from 'react';

import { useSelector } from 'react-redux';

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
	const timeAtSearch = useSelector((state) => state.timeAtSearch);
	const searchLocation = useSelector((state) => state.searchedLocation);

	function renderWallPaper() {
		let wp;
		wp = getTypeOfWp();
		return getSrc(wp);
	}

	function getSrc(arr) {
		if (arr[2] === 'Rain') {
			return <img alt="" src={rain} />;
		} else if (arr[2] === 'Snow') {
			return <img alt="" src={snow} />;
		} else if (arr[1] === 'clouds') {
			return <img alt="" src={clouds} />;
		} else if (arr[0] === 'night') {
			return <img alt="" src={clearskyNight} />;
		} else {
			return <img alt="" src={clearsky} />;
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
				<img alt="" src={earth} />
				<div id="load-pics">
					<img alt="" src={rain} />
					<img alt="" src={snow} />
					<img alt="" src={clouds} />
					<img alt="" src={clearskyNight} />
					<img alt="" src={clearsky} />
				</div>
			</WallPic>
		);
	}
}

export default Wallpaper;
