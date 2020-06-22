import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { HourlyDiv, MoreArrow } from './style';

import chevron from '../img/chevron.png';

function Hourly() {
	// redux

	const system = useSelector((state) => state.system);
	const location = useSelector((state) => state.location);
	const searchLocation = useSelector((state) => state.searchedLocation);
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const timeAtSearch = useSelector((state) => state.timeAtSearch);
	const dateAtSearch = useSelector((state) => state.dateAtSearch);
	const hideOrShow = useSelector((state) => state.hideOrShow);

	// state
	const [showAll, setShowAll] = useState(false);
	//

	useEffect(() => {});

	function timeConverter(UNIX_timestamp) {
		var a = new Date(UNIX_timestamp * 1000);
		var months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes();
		var sec = a.getSeconds();
		var time =
			date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
		return time;
	}

	function getIcon(icon) {
		return `http://openweathermap.org/img/wn/${icon}@2x.png`;
	}

	function displayTime() {
		if (searchLocation !== 'none' && searchWeatherData.data !== undefined) {
			// console.log( timeAtSearch);
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

	function renderHourly() {
		if (searchLocation !== 'none' && searchWeatherData.data !== undefined) {
			let weatherData = searchWeatherData.data.hourly;
			return weatherData.map((item, i) => {
				return (
					<div key={i} className="hour">
						<p className="hour-top">{getHour(i)}</p>
						<p className="icon">
							<img src={getIcon(weatherData[i].weather[0].icon)} alt={i} />{' '}
						</p>
						<p className="degree">{calcTemp(weatherData[i].temp)}°</p>
					</div>
				);
			});
		}
	}

	function getHour(i) {
		// split time at :
		let fullTime = timeAtSearch.split(':');
		// find just hour
		let justHour = fullTime[0];
		// turn into integer
		let justHourInt = parseInt(justHour);
		// now
		if (i === 0) {
			return 'Now';
		} else if (justHourInt + i === 24) {
			return `0:00`;
		} else if (justHourInt + i > 0 && justHourInt + i < 24) {
			let retHour = justHourInt + i;
			return `${retHour}:00`;
		} else if (justHourInt + i > 24) {
			let retHour = justHourInt + i - 24;
			if (retHour > 23) {
				return `${retHour - 24}:00`;
			} else return `${retHour}:00`;
		}
	}

	function showOrHide() {
		setShowAll(!showAll);
	}

	function renderShowHideButton() {
		return (
			<div className="chevron" onClick={showOrHide}>
				<img
					src={chevron}
					className={showAll ? 'show-all-btn' : 'hide-extra-btn'}
				/>
			</div>
		);
	}

	if (
		searchLocation !== 'none' &&
		searchWeatherData.data !== undefined &&
		errorInSearch === 'none'
	) {
		return (
			<React.Fragment>
				<HourlyDiv id="hourly">
					<h1>Hourly forecast for {fullSearchName}</h1>
					<div
						id="hourly-container"
						className={showAll ? 'show-all-hours' : 'hide-extra-hours'}>
						{renderHourly()}
					</div>
				</HourlyDiv>
				<MoreArrow>{renderShowHideButton()}</MoreArrow>
			</React.Fragment>
		);
	} else {
		return <div></div>;
	}
}

export default Hourly;
