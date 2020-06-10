import React from 'react';
import { connect } from 'react-redux';

import {
	changeSystem,
	inputLocation,
	newSearchLocation,
	searchedWeatherData,
	locationError,
	logFullSearchName,
	enterTimeAtSearch,
	enterDateAtSearch,
} from '../../../actions';

import { HourlyDiv, MoreArrow } from './style';

import chevron from '../img/chevron.png';

class Hourly extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showAll: false };
	}

	timeConverter = (UNIX_timestamp) => {
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
	};

	getIcon(icon) {
		return `http://openweathermap.org/img/wn/${icon}@2x.png`;
	}

	displayTime() {
		if (
			this.props.searchLocation !== 'none' &&
			this.props.searchWeatherData.data !== undefined
		) {
			// console.log(this.props.timeAtSearch);
		}
	}

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

	renderHourly = () => {
		if (
			this.props.searchLocation !== 'none' &&
			this.props.searchWeatherData.data !== undefined
		) {
			let weatherData = this.props.searchWeatherData.data.hourly;
			return weatherData.map((item, i) => {
				return (
					<div key={i} className="hour">
						<p className="hour-top">{this.getHour(i)}</p>
						<p className="icon">
							<img src={this.getIcon(weatherData[i].weather[0].icon)} alt={i} />{' '}
						</p>
						<p className="degree">{this.calcTemp(weatherData[i].temp)}°</p>
					</div>
				);
			});
		}
	};

	getHour(i) {
		let fullTime = this.props.timeAtSearch.split(':');
		let justHour = fullTime[0];
		let justHourInt = parseInt(justHour);
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

	showOrHide = () => {
		this.setState({ showAll: !this.state.showAll });
	};

	renderShowHideButton = () => {
		return (
			<div className="chevron" onClick={this.showOrHide}>
				<img
					src={chevron}
					className={this.state.showAll ? 'show-all-btn' : 'hide-extra-btn'}
				/>
			</div>
		);
	};

	render() {
		if (
			this.props.searchLocation !== 'none' &&
			this.props.searchWeatherData.data !== undefined
		) {
			return (
				<React.Fragment>
					<HourlyDiv id="hourly">
						<div
							id="hourly-container"
							className={
								this.state.showAll ? 'show-all-hours' : 'hide-extra-hours'
							}>
							{this.renderHourly()}
						</div>
					</HourlyDiv>
					<MoreArrow>{this.renderShowHideButton()}</MoreArrow>
				</React.Fragment>
			);
		} else {
			return <div></div>;
		}
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
})(Hourly);
