import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { DailyContainer } from './style';
import { MoreArrow } from '../Hourly/style';

import chevron from '../img/chevron.png';

function Daily() {
	// state
	const [showAll, setShowAll] = useState(false);

	//redux
	const system = useSelector((state) => state.system);
	const location = useSelector((state) => state.location);
	const searchLocation = useSelector((state) => state.searchedLocation);
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const errorInSearch = useSelector((state) => state.errorInSearch);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const timeAtSearch = useSelector((state) => state.timeAtSearch);
	const dateAtSearch = useSelector((state) => state.dateAtSearch);

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

	function dayOfWeekConverter(unix) {
		const xx = new Date();
		xx.setTime(unix * 1000); // javascript timestamps are in milliseconds
		const dayInt = xx.getDay(); // the Day
		const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return dayArr[dayInt];
	}

	function timeConverter(UNIX_timestamp) {
		dayOfWeekConverter(UNIX_timestamp);
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
		var time = [date, month, year, hour, min, sec];

		return time;
	}

	function getImage(img) {
		return `http://openweathermap.org/img/wn/${img}@2x.png`;
	}

	function getTemp(temp) {
		return calcTemp(temp);
	}

	function getDate(unix) {
		let fullTime = timeConverter(unix);
		let day = dayOfWeekConverter(unix);
		let date = `${day} ${fullTime[1]} ${fullTime[0]}`;
		// ${fullTime[2]} -- year if wanted
		return date;
	}

	function getSunTimes(unix) {
		let fullTime = timeConverter(unix);
		let time = `${fullTime[3]}:${fullTime[4]}`;
		return time;
	}

	function getPrec(prec) {
		if (prec === undefined) {
			return '0';
		} else {
			return prec;
		}
	}

	function getUVI(uvi) {
		return uvi;
	}

	function getWeatherDesc(desc) {
		return desc;
	}

	function renderDaily() {
		return searchWeatherData.data.daily.map((item, i) => {
			return (
				<div key={i} className="day">
					<div className="date">
						{getDate(searchWeatherData.data.daily[i].sunrise)}
					</div>
					<div className="description">
						{getWeatherDesc(
							searchWeatherData.data.daily[i].weather[0].description
						)}
					</div>
					<div className="weather-image">
						<img
							alt="weather image"
							src={getImage(searchWeatherData.data.daily[i].weather[0].icon)}
						/>
					</div>
					<div>High: {getTemp(searchWeatherData.data.daily[i].temp.day)}°</div>
					<div>Low: {getTemp(searchWeatherData.data.daily[i].temp.min)}°</div>
					<div>
						Sunrise: {getSunTimes(searchWeatherData.data.daily[i].sunrise)}
					</div>
					<div>
						Sunset: {getSunTimes(searchWeatherData.data.daily[i].sunset)}
					</div>
					<div>
						Rain: {getPrec(searchWeatherData.data.daily[i].rain)}
						mm
					</div>
					<div>
						Snow: {getPrec(searchWeatherData.data.daily[i].snow)}
						mm
					</div>
					<div>UV Index: {getUVI(searchWeatherData.data.daily[i].uvi)}</div>
				</div>
			);
		});
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
				<DailyContainer>
					<h1>Forecast for the next week</h1>
					<div
						id="daily-con"
						className={showAll ? 'show-all-days' : 'hide-extra-days'}>
						{renderDaily()}
					</div>
				</DailyContainer>
				<MoreArrow>{renderShowHideButton()}</MoreArrow>
			</React.Fragment>
		);
	} else {
		return <div></div>;
	}
}

export default Daily;
