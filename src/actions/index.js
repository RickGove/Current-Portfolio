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

export const hideAllComps = (hide) => {
	return {
		type: 'HIDE_ALL_COMPS',
		payload: hide,
	};
};

export const showImages = (imagesStatus) => {
	return {
		type: 'SHOW_IMAGES',
		payload: imagesStatus,
	};
};

export const setInitialLocationData = (data) => {
	return {
		type: 'INITIAL_SEARCH_DATA',
		payload: data,
	};
};

export const setLatLonToSearch = (latLon) => {
	return {
		type: 'SET_LAT_LON',
		payload: latLon,
	};
};

export const setOnlyShowTitle = (show) => {
	return {
		type: 'SET_LAT_LON',
		payload: show,
	};
};

export const setImagesFound = (images) => {
	return {
		type: 'SET_IMAGES',
		payload: images,
	};
};

export const setNeededForFavorite = (objData) => {
	return {
		type: 'SET_FAVE_INFO',
		payload: objData,
	};
};
