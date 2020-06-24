import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { HourlyDiv, MoreArrow } from './style';

import chevron from '../img/chevron.png';

function Hourly() {
	// redux

	const system = useSelector((state) => state.system);
	const searchLocation = useSelector((state) => state.searchedLocation);
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const timeAtSearch = useSelector((state) => state.timeAtSearch);

	// state
	const [showAll, setShowAll] = useState(false);
	//

	useEffect(() => {});

	function getIcon(icon) {
		return `https://openweathermap.org/img/wn/${icon}@2x.png`;
	}

	function calcTemp(temp) {
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
						<h3 className="hour-top">{getHour(i)}</h3>
						<p className="icon">
							<img src={getIcon(weatherData[i].weather[0].icon)} alt={i} />{' '}
						</p>
						<h3 className="degree">{calcTemp(weatherData[i].temp)}°</h3>
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
					alt="show/hide"
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
					<MoreArrow>{renderShowHideButton()}</MoreArrow>
				</HourlyDiv>
			</React.Fragment>
		);
	} else {
		return <div></div>;
	}
}

export default Hourly;
