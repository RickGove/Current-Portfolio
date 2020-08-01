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

export const setShowModal = (bool) => {
	return {
		type: 'SET_SHOW_MODAL',
		payload: bool,
	};
};

export const setShowLoader = (bool) => {
	return {
		type: 'SET_SHOW_LOADER',
		payload: bool,
	};
};

///////////////////////
//
//  Begin Super Hero Smackdown
//

export const setIntroDone = (bool) => {
	return {
		type: 'SET_INTRO_DONE',
		payload: bool,
	};
};

export const setFighterA = (objData) => {
	return {
		type: 'SET_FIGHTER_A',
		payload: objData,
	};
};

export const setFighterB = (objData) => {
	return {
		type: 'SET_FIGHTER_B',
		payload: objData,
	};
};

export const setReady = (bool) => {
	return {
		type: 'SET_READY',
		payload: bool,
	};
};

export const setMatchReport = (report) => {
	return {
		type: 'SET_MATCH_REPORT',
		payload: report,
	};
};

export const setShowMatchReport = (report) => {
	return {
		type: 'SET_SHOW_REPORT',
		payload: report,
	};
};

export const setRolled = (rolled) => {
	return {
		type: 'SET_ROLLED',
		payload: rolled,
	};
};

export const setScores = (scores) => {
	return {
		type: 'SET_SCORES',
		payload: scores,
	};
};

export const setRoundScore = (score) => {
	return {
		type: 'SET_ROUND_SCORE',
		payload: score,
	};
};

export const setActivePlayer = (player) => {
	return {
		type: 'SET_ACTIVE_PLAYER',
		payload: player,
	};
};

export const setGamePlaying = (bool) => {
	return {
		type: 'SET_GAME_PLAYING',
		payload: bool,
	};
};

export const setIsRolling = (bool) => {
	return {
		type: 'SET_IS_ROLLING',
		payload: bool,
	};
};

export const setCookies = (bool) => {
	return {
		type: 'SET_COOKIES',
		payload: bool,
	};
};

export const setSuperSearch = (bool) => {
	return {
		type: 'SET_SUPER_SEARCH',
		payload: bool,
	};
};

export const setWeatherSearch = (bool) => {
	return {
		type: 'SET_WEATHER_SEARCH',
		payload: bool,
	};
};
