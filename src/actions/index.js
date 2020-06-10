export const changeSystem = (sys) => {
	return {
		type: 'CHANGE_SYSTEM',
	};
};

export const inputLocation = (data) => {
	return {
		type: 'INPUT_LOCATION',
		payload: data,
	};
};

export const newSearchLocation = (loc) => {
	return {
		type: 'NEW_SEARCH_LOCATION',
		payload: loc,
	};
};

export const searchedWeatherData = (data) => {
	return {
		type: 'CHANGE_SEARCH_DATA',
		payload: data,
	};
};

export const locationError = (data) => {
	return {
		type: 'ERROR_IN_SEARCH',
		payload: data,
	};
};

export const logFullSearchName = (name) => {
	return {
		type: 'ADD_FULL_SEARCH_NAME',
		payload: name,
	};
};

export const enterTimeAtSearch = (time) => {
	return {
		type: 'ENTER_TIME',
		payload: time,
	};
};

export const enterDateAtSearch = (date) => {
	return {
		type: 'ENTER_DATE',
		payload: date,
	};
};

export const imageSearchHasBeenDoneFN = (done) => {
	return {
		type: 'IMAGE_SEARCH_DONE',
		payload: done,
	};
};
