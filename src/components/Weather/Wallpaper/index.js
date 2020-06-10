import React from 'react';
import { connect } from 'react-redux';

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

class Wallpaper extends React.Component {
	constructor(props) {
		super(props);
	}

	renderWallPaper = () => {
		let wp;
		wp = this.getTypeOfWp();
		return this.getSrc(wp);
	};

	getSrc(arr) {
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

	getTypeOfWp() {
		let hour, day, clouds, rainSnowNone;

		// night or day; hour
		hour = this.getHour();
		day = this.determineDay(hour);

		// cloudiness; clouds
		clouds = this.getClouds();

		// rain / snow;
		rainSnowNone = this.getPrec();
		let toRet = [day, clouds, rainSnowNone];
		return toRet;
	}
	determineDay(hour) {
		if (hour > 8 && hour < 22) {
			return 'day';
		} else {
			return 'night';
		}
	}

	getPrec = () => {
		return this.props.searchWeatherData.data.current.weather[0].main;
	};

	getClouds = () => {
		if (this.props.searchWeatherData.data !== undefined) {
			let clouds = this.props.searchWeatherData.data.current.clouds;
			if (clouds > 60) {
				return 'clouds';
			} else {
				return 'clear';
			}
		} else {
		}
	};

	getHour(i) {
		let fullTime = this.props.timeAtSearch.split(':');
		let justHour = fullTime[0];
		let justHourInt = parseInt(justHour);
		return justHourInt;
	}

	render() {
		if (
			this.props.searchLocation !== 'none' &&
			this.props.searchWeatherData.data !== undefined
		) {
			return <WallPic>{this.renderWallPaper()}</WallPic>;
		} else {
			return (
				<WallPic>
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
}

const mapStateToProps = (state) => {
	return {
		searchWeatherData: state.searchWeatherData,
		errorInSearch: state.errorInSearch,
		timeAtSearch: state.timeAtSearch,
	};
};

export default connect(mapStateToProps, {
	searchedWeatherData,
	locationError,
	enterTimeAtSearch,
})(Wallpaper);
