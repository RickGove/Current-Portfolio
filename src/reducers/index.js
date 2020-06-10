import { combineReducers } from 'redux';

const searchedLocation = (loc = 'none', action) => {
	if (action.type === 'NEW_SEARCH_LOCATION') {
		return action.payload;
	} else {
		return loc;
	}
};

const selectedSystem = (system = 'F', action) => {
	if (action.type === 'CHANGE_SYSTEM') {
		let newSystem;
		system === 'C' ? (newSystem = 'F') : (newSystem = 'C');
		return newSystem;
	} else {
		return system;
	}
};

const inputLocation = (data = ['', '', '', ''], action) => {
	if (action.type === 'INPUT_LOCATION') {
		return action.payload;
	} else {
		return data;
	}
};

const searchWeatherData = (data = 'none', action) => {
	if (action.type === 'CHANGE_SEARCH_DATA') {
		return action.payload;
	} else {
		return data;
	}
};

const errorInSearch = (data = 'none', action) => {
	if (action.type === 'ERROR_IN_SEARCH') {
		return action.payload;
	} else {
		return data;
	}
};

const fullSearchName = (name = '', action) => {
	if (action.type === 'ADD_FULL_SEARCH_NAME') {
		return action.payload;
	} else {
		return name;
	}
};

const timeAtSearch = (time = '', action) => {
	if (action.type === 'ENTER_TIME') {
		return action.payload;
	} else {
		return time;
	}
};

const dateAtSearch = (date = '', action) => {
	if (action.type === 'ENTER_DATE') {
		return action.payload;
	} else {
		return date;
	}
};

const imageSearchDone = (done = false, action) => {
	if (action.type === 'IMAGE_SEARCH_DONE') {
		return action.payload;
	} else {
		return done;
	}
};

const weatherApp = combineReducers({
	system: selectedSystem,
	location: inputLocation,
	searchedLocation: searchedLocation,
	searchWeatherData: searchWeatherData,
	errorInSearch: errorInSearch,
	fullSearchName: fullSearchName,
	timeAtSearch: timeAtSearch,
	dateAtSearch: dateAtSearch,
	imageSearchDone: imageSearchDone,
});

export default weatherApp;
