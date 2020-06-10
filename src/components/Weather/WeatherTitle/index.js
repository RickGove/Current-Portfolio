import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { BodyDiv } from './BodyStyle';

import {
	changeSystem,
	inputLocation,
	newSearchLocation,
} from '../../../actions';

class WeatherTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	renderTitleLocation = () => {
		if (this.props.searchLocation === 'none') {
			return this.props.location[0];
		} else {
			return this.props.searchLocation.data.name;
		}
	};

	render() {
		return (
			<BodyDiv>
				<div className="current">
					<h1>{this.renderTitleLocation()}</h1>
				</div>
			</BodyDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		system: state.system,
		location: state.location,
		searchLocation: state.searchedLocation,
	};
};

export default connect(mapStateToProps, {
	changeSystem,
	inputLocation,
	newSearchLocation,
})(WeatherTitle);
