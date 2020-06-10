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

import { DailyContainer } from './style';
import { MoreArrow } from '../Hourly/style';

import chevron from '../img/chevron.png';

class Daily extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showAll: false };
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
		var time = [date, month, year, hour, min, sec];
		return time;
	};

	getImage(img) {
		return `http://openweathermap.org/img/wn/${img}@2x.png`;
	}

	getTemp(temp) {
		return this.calcTemp(temp);
	}

	getDate(unix) {
		let fullTime = this.timeConverter(unix);
		let date = `${fullTime[0]} ${fullTime[1]} ${fullTime[2]}`;
		return date;
	}

	getSunTimes(unix) {
		let fullTime = this.timeConverter(unix);
		let time = `${fullTime[3]}:${fullTime[4]}`;
		return time;
	}

	getPrec(prec) {
		if (prec === undefined) {
			return '0';
		} else {
			return prec;
		}
	}

	getUVI(uvi) {
		return uvi;
	}

	getWeatherDesc(desc) {
		return desc;
	}

	renderDaily = () => {
		return this.props.searchWeatherData.data.daily.map((item, i) => {
			return (
				<div key={i} className="day">
					<div className="date">
						{this.getDate(this.props.searchWeatherData.data.daily[i].sunrise)}
					</div>
					<div className="description">
						{this.getWeatherDesc(
							this.props.searchWeatherData.data.daily[i].weather[0].description
						)}
					</div>
					<div className="weather-image">
						<img
							alt="weather image"
							src={this.getImage(
								this.props.searchWeatherData.data.daily[i].weather[0].icon
							)}
						/>
					</div>
					<div>
						High:{' '}
						{this.getTemp(this.props.searchWeatherData.data.daily[i].temp.day)}°
					</div>
					<div>
						Low:{' '}
						{this.getTemp(this.props.searchWeatherData.data.daily[i].temp.min)}°
					</div>
					<div>
						Sunrise:{' '}
						{this.getSunTimes(
							this.props.searchWeatherData.data.daily[i].sunrise
						)}
					</div>
					<div>
						Sunset:{' '}
						{this.getSunTimes(
							this.props.searchWeatherData.data.daily[i].sunset
						)}
					</div>
					<div>
						Rain:{' '}
						{this.getPrec(this.props.searchWeatherData.data.daily[i].rain)}
						mm
					</div>
					<div>
						Snow:{' '}
						{this.getPrec(this.props.searchWeatherData.data.daily[i].snow)}
						mm
					</div>
					<div>
						UV Index:{' '}
						{this.getUVI(this.props.searchWeatherData.data.daily[i].uvi)}
					</div>
				</div>
			);
		});
	};

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

	render = () => {
		if (
			this.props.searchLocation !== 'none' &&
			this.props.searchWeatherData.data !== undefined
		) {
			return (
				<React.Fragment>
					<DailyContainer>
						<div
							id="daily-con"
							className={
								this.state.showAll ? 'show-all-days' : 'hide-extra-days'
							}>
							{this.renderDaily()}
						</div>
					</DailyContainer>
					<MoreArrow>{this.renderShowHideButton()}</MoreArrow>
				</React.Fragment>
			);
		} else {
			return <div></div>;
		}
	};
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
})(Daily);
