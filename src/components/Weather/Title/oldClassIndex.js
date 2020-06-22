import React from 'react';
import { connect } from 'react-redux';

import { TitleCon } from './style';

import Hourly from '../Hourly';
import Wallpaper from '../Wallpaper';

import {
	changeSystem,
	inputLocation,
	newSearchLocation,
	searchedWeatherData,
	locationError,
	logFullSearchName,
	showImages,
} from '../../../actions';

class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	/////// utilities ////
	calcTemp = (temp) => {
		let newTemp;
		if (this.props.system === 'C') {
			let x = Math.round(parseFloat(temp - 273.15) * 9) / 5 + 32;

			return `${Math.round(x)}°`;
		} else {
			let x = Math.round(parseFloat(temp) - 273.15);
			return `${Math.round(x)}°`;
		}
	};
	seeProps = () => {
		console.log('to see the props on the title comp');
		console.log(this.props);
		return this.props.location[0];
	};
	////////////////////////////////////////

	/////// rendering /////////////////////

	cloudiness() {
		let clouds, rain;
		const weatherData = this.props.searchWeatherData.data;
		if (weatherData !== undefined) {
			let text = weatherData.current.weather[0].description;
			let str = text.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
				match.toUpperCase()
			);
			return str;
		}
	}

	renderTitle = () => {
		let data = this.props.searchLocation.data;
		if (this.props.errorInSearch !== 'none') {
			// error in search

			this.props.showImages(false);
			return (
				<React.Fragment>
					<h1>{this.props.errorInSearch} has no available weather info</h1>

					<div className="fill-screen"></div>
				</React.Fragment>
			);
		} else if (this.props.searchLocation === 'none') {
			if (this.props.location[2] !== '') {
				// only location via gps is available

				this.props.showImages(true);
				const country = this.props.location[2].toLowerCase();
				const flagImage = require(`../img/flags/${country}.png`);
				return (
					<React.Fragment>
						<h1>
							{this.props.location[0]} <img src={flagImage} alt={country} />
						</h1>
						<div className="fill-screen"></div>
					</React.Fragment>
				);
			}
		} else if (
			this.props.searchLocation !== 'none' &&
			this.props.searchWeatherData.data !== undefined
		) {
			// full weather info available

			const country = data.sys.country.toLowerCase();
			const flagImage = require(`../img/flags/${country}.png`);
			this.props.showImages(true);

			return (
				<>
					<h1>
						{this.props.fullSearchName} <img src={flagImage} alt={country} />
					</h1>
					<h4>{this.cloudiness()}</h4>
					<h1 className="huge-temp">
						{this.getCurrentWeatherForSearchLocation()}
						<img className="icon" alt="weather-icon" src={this.getIcon()} />
					</h1>
					<h4>
						High:{' '}
						{this.calcTemp(this.props.searchWeatherData.data.daily[0].temp.day)}{' '}
						Low:{' '}
						{this.calcTemp(this.props.searchWeatherData.data.daily[0].temp.min)}
					</h4>
				</>
			);
		} else {
			this.props.showImages(false);
		}
	};

	getIcon() {
		if (
			this.props.searchWeatherData.data.current.weather[0].icon !== undefined
		) {
			let icon = this.props.searchWeatherData.data.current.weather[0].icon;
			return `http://openweathermap.org/img/wn/${icon}@2x.png`;
		} else {
			return <p>hello</p>;
		}
	}

	getCurrentWeatherForSearchLocation = () => {
		return this.calcTemp(this.props.searchWeatherData.data.current.temp);
	};

	render() {
		return (
			<>
				<Wallpaper />
				<TitleCon>{this.renderTitle()}</TitleCon>
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
		shouldShowImages: state.shouldShowImages,
	};
};

export default connect(mapStateToProps, {
	changeSystem,
	inputLocation,
	newSearchLocation,
	searchedWeatherData,
	locationError,
	logFullSearchName,
	showImages,
})(Title);
