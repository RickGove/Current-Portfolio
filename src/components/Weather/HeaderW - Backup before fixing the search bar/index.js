import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { WeatherHeadCon } from './Style/WeatherHeadCon';

import logo from '../img/Logo.png';
import { GlobalStyle } from '../../GlobalStyle';
import iso3 from '../../../json/iso3.json';

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
} from '../../../actions';

class HeaderW extends React.Component {
	constructor(props) {
		super(props);
		this.switchSystem = this.switchSystem.bind(this);
		// this.searchLocation = this.searchLocation.bind(this);
		this.state = {
			value: '',
			suggestions: [],
			suggsFlags: [],
			currentlyHighlighted: 0,
		};
	}

	locationAvailable = () => {
		// check if geolocation avaialable
		if ('geolocation' in navigator) {
			return true;
		} else {
			return false;
		}
	};
	////////////////////////////////////////////////
	//// header code

	async getLocation() {
		// build location from gps
		this.getCoords();
	}

	buildLocationForState(fullWeatherInfo) {
		// set the current location
		let icon = fullWeatherInfo.data.weather[0].icon;
		let cityName = fullWeatherInfo.data.name;
		let tempHere = fullWeatherInfo.data.main.temp;
		let flagCode = fullWeatherInfo.data.sys.country;
		let newLocation = [cityName, tempHere, flagCode, icon];
		this.props.inputLocation(newLocation);
	}

	splitDateAndTime = (json) => {
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
	};

	getTimeAndDate = (json) => {
		let time, date;

		//split date
		let timeAndDateArr = this.splitDateAndTime(json);

		//get time
		time = timeAndDateArr[0];

		//get date
		date = timeAndDateArr[1];

		// store to redux
		this.props.enterTimeAtSearch(time);
		this.props.enterDateAtSearch(date);
		this.props.hideAllComps(false);
	};

	async getTimeAtSearch() {
		// determine the time at the location
		if (this.props.searchWeatherData.data !== undefined) {
			let weatherData = this.props.searchWeatherData.data;
			let timeAtSearch;
			const timeZone = weatherData.timezone;
			const site = `https://worldtimeapi.org/api/timezone/${timeZone}`;
			axios
				.get(site)
				.then((response) => {
					this.getTimeAndDate(response);
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

	async findWeatherInfo(latLon) {
		// initial weather info, just for location
		let key = `f63ee05c044c91f80348c4e021c7d476`;
		let site = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				this.buildLocationForState(response);
			})
			.catch((err) => {
				alert(`There appears to be an error on the weather site: ${err}`);
			});
	}

	locateSuccess = (pos) => {
		let latLon = this.extractCoords(pos);
		this.findWeatherInfo(latLon);
	};

	extractCoords(pos) {
		const lat = pos.coords.latitude;
		const lon = pos.coords.longitude;
		return [lat, lon];
	}

	locateFail = (err) => {};

	getCoords() {
		navigator.geolocation.getCurrentPosition(
			this.locateSuccess,
			this.locateFail
		);
	}

	loadFlag = () => {
		if (this.props.location[2] !== '') {
			let countryCode = this.props.location[2].toLowerCase();
			const flagImage = require(`../img/flags/${countryCode}.png`);
			return flagImage;
		} else {
			return '';
		}
	};

	buttonClick = (e) => {
		// hack work around because the clicking is fucked up
		if (e.target.id === 'root') {
			this.searchSubmit();
		}
	};

	componentDidMount = () => {
		// click listener
		document.addEventListener('click', this.buttonClick);

		//get curent city and write it to the reux state
		this.getLocation();

		// display location and weather info
		this.setSearchValue();
	};

	setSearchValue = () => {
		let el = document.getElementById('search');
		el.value = this.state.value;
	};

	setStateValue = () => {
		let el = document.getElementById('search');
		this.setState({ value: el.value });
	};

	loadIcon() {
		if (this.props.location[3] !== '') {
			return `https://openweathermap.org/img/wn/${this.props.location[3]}.png`;
		}
	}

	displaySwitch = () => {
		if (this.props.system === 'F') {
			return (
				<>
					<span id="C" className="system-choice">
						C
					</span>{' '}
					/ <span id="F">F</span>
				</>
			);
		} else if (this.props.system === 'C') {
			return (
				<>
					<span id="C">C</span> /{' '}
					<span id="F" className="system-choice">
						F
					</span>
				</>
			);
		} else {
			return (
				<ul>
					<li>no data</li>
				</ul>
			);
		}
	};

	chooseSuggestion0 = () => {
		this.handleSuggestionHover(0);
	};

	chooseSuggestion1 = () => {
		this.handleSuggestionHover(1);
	};
	chooseSuggestion2 = () => {
		this.handleSuggestionHover(2);
	};
	chooseSuggestion3 = () => {
		this.handleSuggestionHover(3);
	};
	chooseSuggestion4 = () => {
		this.handleSuggestionHover(4);
	};

	handleSuggestionHover(n) {
		let x = document.getElementById('search');
		x.value = this.state.suggestions[n];
	}

	showSearchResults = () => {
		if (this.state.suggestions.length === 0) {
			return <button>Enter your search...</button>;
		} else {
			return this.state.suggestions.map((item, i) => {
				let flagImage = '';
				if (this.state.suggsFlags.length > 0) {
					let x = this.state.suggsFlags[i];
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
							<button
								id="suggestion-0"
								key="0"
								onMouseOver={this.chooseSuggestion0}>
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
								onMouseOver={this.chooseSuggestion1}>
								{item} <img src={flagImage} />
							</button>
						);
						break;
					case 2:
						return (
							<button
								id="suggestion-2"
								key={item}
								onMouseOver={this.chooseSuggestion2}>
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
								onMouseOver={this.chooseSuggestion3}>
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
								onMouseOver={this.chooseSuggestion4}>
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
	};

	switchSystem = () => {
		this.props.changeSystem();
	};

	calcHeaderTemp = () => {
		if (this.props.location[1] !== '') {
			let temp = this.props.location[1];
			let x = this.calcTemp(temp);

			return `${x}°`;
		} else {
			return '';
		}
	};

	calcTemp = (temp) => {
		let newTemp;
		if (this.props.system === 'C') {
			let x = Math.round(parseFloat(temp - 273.15) * 9) / 5 + 32;

			return Math.round(x);
		} else {
			let x = Math.round(parseFloat(temp) - 273.15);
			return Math.round(x);
		}
	};

	findCityName() {
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

	searchSubmit = () => {
		// get city name
		let city = this.findCityName();

		// set redux state to hide all other components
		this.props.hideAllComps(true);

		// search location
		this.searchLocation(city);
	};

	searchLocation = (c) => {
		let key = `f63ee05c044c91f80348c4e021c7d476`;
		let coord = ['lat', 'lon'];
		let site = `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				coord = [response.data.coord.lat, response.data.coord.lon];

				//log the search results
				this.props.newSearchLocation(response);

				// clear the input
				let el = document.getElementById('search');

				// name to be displayed on the next
				// FIX FIX FIX
				this.props.logFullSearchName(el.value);
				el.value = '';

				//log the weather info
				this.getFullWeatherInfo(coord[0], coord[1]);

				// log no error found
				this.props.locationError('none');
				this.props.imageSearchHasBeenDoneFN(false);
			})
			.catch((err) => {
				// pass error and city to redux for use in the future
				if (c !== undefined) {
					this.props.locationError(c);
				}
			});
	};

	getFullWeatherInfo(lat, lon) {
		this.props.searchedWeatherData('');
		const key = `f63ee05c044c91f80348c4e021c7d476`;
		const site = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${key}`;
		axios
			.get(site)
			.then((response) => {
				// log response to redux store
				this.props.searchedWeatherData(response);

				//get time at the search location
				this.getTimeAtSearch();
			})
			.catch((err) => {
				// log error and city name to redux store
				alert(
					`Error occured. Please contact rickbgove@gmail.com; code: 999999999`
				);
			});
	}
	convert3to2(count) {
		let x = Object.entries(iso3);
		for (let i = 0; i < x.length; i++) {
			if (count === x[i][1]) {
				return x[i][0];
			}
		}
	}

	lookUpSuggestions = (search) => {
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
						let country2 = this.convert3to2(
							response.data.suggestions[x].countryCode
						);
						country2 = country2.toLowerCase();
						suggsFl.push(country2);
					}
					this.setState({ suggestions: [] });
					this.setState({ suggestions: suggs });
					this.setState({ suggsFlags: suggsFl });
					this.setState({ suggsStates: suggsSt });
					this.showSearchResults();
				})
				.catch((err) => {
					alert(`There appears to be an error on the suggestion site: ${err}`);
				});
		}
	};

	handleInputChange = (e) => {
		this.handleKeysOnInput(e);
		// set state
		// this.setStateValue();
	};

	showModal() {
		let modal = document.getElementById('modal-for-search-focus');
		modal.classList.remove('hide__modal');
		modal.classList.add('show__modal');

		// element.classList.toggle("mystyle");
	}

	hideModal() {
		const modal = document.getElementById('modal-for-search-focus');
		modal.classList.add('hide__modal');
		modal.classList.remove('show__modal');

		const search = document.getElementById('search');
		search.blur();
	}

	handleKeysOnInput = (event) => {
		if (event.key === 'Enter') {
			// event.preventDefault();
			this.searchSubmit();
			this.hideModal();
		} else if (event.which === 38) {
			event.preventDefault();
			this.upArrow();
		} else if (event.which === 40) {
			event.preventDefault();
			this.downArrow();
		} else {
			let el = document.getElementById('search');
			this.setState({ value: el.value });
			if (el.value === '') {
				this.setState({ suggestions: [] });
			} // search for suggestions
			this.lookUpSuggestions(el.value);
		}
	};

	upArrow = () => {
		let el = document.getElementById('search');
		switch (el.value) {
			case this.state.suggestions[1]:
				if (this.state.suggestions[0] !== undefined) {
					el.value = this.state.suggestions[0];
					const active = document.getElementById('suggestion-0');
				}
				break;
			case this.state.suggestions[2]:
				if (this.state.suggestions[1] !== undefined) {
					el.value = this.state.suggestions[1];
				}
				break;
			case this.state.suggestions[3]:
				if (this.state.suggestions[2] !== undefined) {
					el.value = this.state.suggestions[2];
				}
				break;
			default:
				el.value = this.state.suggestions[0];
				break;
		}
	};

	downArrow = () => {
		let el = document.getElementById('search');
		switch (el.value) {
			case this.state.suggestions[0]:
				if (this.state.suggestions[1] !== undefined) {
					el.value = this.state.suggestions[1];
				}
				break;
			case this.state.suggestions[1]:
				if (this.state.suggestions[2] !== undefined) {
					el.value = this.state.suggestions[2];
				}
				break;
			case this.state.suggestions[2]:
				if (this.state.suggestions[3] !== undefined) {
					el.value = this.state.suggestions[3];
				}
				break;
			case this.state.suggestions[3]:
				if (this.state.suggestions[4] !== undefined) {
					el.value = this.state.suggestions[4];
				}
				break;
			default:
				el.value = this.state.suggestions[0];
				break;
		}
	};

	chooseChooseSuggestion = (n) => {
		/// write a switch to trigger the chooseSuggestion of newSearchLocation
		switch (n) {
			case 0:
				this.chooseSuggestion0();
				break;
			case 1:
				this.chooseSuggestion1();
				break;
			case 2:
				this.chooseSuggestion2();
				break;

			case 3:
				this.chooseSuggestion3();
				break;

			case 4:
				this.chooseSuggestion4();
				break;
		}
		/// make sure that the choose suggestion functions also highlight the siggestions...
	};

	render() {
		return (
			<>
				<GlobalStyle />
				<WeatherHeadCon>
					<div id="modal-for-search-focus"></div>
					<img alt="logo" className="logo" src={logo} />
					<img id="flag" alt="" className="flag" src={this.loadFlag()} />
					<img className="weather-image" alt="" src={this.loadIcon()} />
					<div id="temp" className="temp">
						{this.calcHeaderTemp()}
					</div>

					<div className="search-container">
						<input
							className="search"
							id="search"
							type="text"
							autoComplete="off"
							placeholder="Search..."
							className="search"
							onFocus={this.showModal}
							onBlur={this.hideModal}
							onKeyUp={this.handleInputChange}
							// onKeyPress={this.handleKeysOnInput}
						/>
						<div className="search__results" onClick={this.searchSubmit}>
							<ul>{this.showSearchResults()}</ul>
						</div>
					</div>

					<div className="switch" onClick={this.switchSystem}>
						{this.displaySwitch()}
					</div>
				</WeatherHeadCon>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		system: state.system,
		location: state.location,
		searchLocation: state.searchedLocation,
		searchWeatherData: state.searchWeatherData,
		errorInSearch: state.errorInSearch,
		fullSearchName: state.fullSearchName,
		timeAtSearch: state.timeAtSearch,
		dateAtSearch: state.dateAtSearch,
		imageSearchHasBeenDoneFN: state.imageSearchHasBeenDoneFN,
		hideOrShow: state.hideOrShow,
	};
};

export default connect(mapStateToProps, {
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
})(HeaderW);
