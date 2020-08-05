import { combineReducers } from 'redux';

const searchedLocation = (loc = 'none', action) => {
	if (action.type === 'NEW_SEARCH_LOCATION') {
		return action.payload;
	} else {
		return loc;
	}
};

const selectedSystem = (system = 'C', action) => {
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

const hideOrShow = (show = false, action) => {
	if (action.type === 'HIDE_ALL_COMPS') {
		return action.payload;
	} else {
		return show;
	}
};

const onlyShowTitle = (show = false, action) => {
	if (action.type === 'SHOW_ONLY_TITLE') {
		return action.payload;
	} else {
		return show;
	}
};

const shouldShowImages = (display = false, action) => {
	if (action.type === 'SHOW_IMAGES') {
		return action.payload;
	} else {
		return display;
	}
};

const dataFromInitialLocationSearch = (data = {}, action) => {
	if (action.type === 'INITIAL_SEARCH_DATA') {
		return action.payload;
	} else {
		return data;
	}
};

const latLonToSearch = (coord = [0, 0], action) => {
	if (action.type === 'SET_LAT_LON') {
		return action.payload;
	} else {
		return coord;
	}
};

const imagesFound = (images = '', action) => {
	if (action.type === 'SET_IMAGES') {
		return action.payload;
	} else {
		return images;
	}
};

const neededForFavorite = (
	obj = { id: 0, name: 'none', country: 'unknown' },
	action
) => {
	if (action.type === 'SET_FAVE_INFO') {
		return action.payload;
	} else {
		return obj;
	}
};

const showModal = (show = false, action) => {
	if (action.type === 'SET_SHOW_MODAL') {
		return action.payload;
	} else {
		return show;
	}
};

const showLoader = (show = false, action) => {
	if (action.type === 'SET_SHOW_LOADER') {
		return action.payload;
	} else {
		return show;
	}
};

const weatherSearch = (
	props = { value: '', focus: false, blur: true },
	action
) => {
	if (action.type === 'SET_COOKIES') {
		return action.payload;
	} else {
		return props;
	}
};

///////////////////////////////////
//
//  Super Hero Smackdown State

const introDone = (moveOn = false, action) => {
	if (action.type === 'SET_INTRO_DONE') {
		return action.payload;
	} else {
		return moveOn;
	}
};

const fighterA = (chosen = null, action) => {
	if (action.type === 'SET_FIGHTER_A') {
		return action.payload;
	} else {
		return chosen;
	}
};

const fighterB = (chosen = null, action) => {
	if (action.type === 'SET_FIGHTER_B') {
		return action.payload;
	} else {
		return chosen;
	}
};

const ready = (readyOrNot = false, action) => {
	if (action.type === 'SET_READY') {
		return action.payload;
	} else {
		return readyOrNot;
	}
};

const matchReport = (report = '', action) => {
	if (action.type === 'SET_MATCH_REPORT') {
		return action.payload;
	} else {
		return report;
	}
};

const showMatchReport = (ready = false, action) => {
	if (action.type === 'SET_SHOW_REPORT') {
		return action.payload;
	} else {
		return ready;
	}
};

const rolled = (dice = 1, action) => {
	if (action.type === 'SET_ROLLED') {
		return action.payload;
	} else {
		return dice;
	}
};

const scores = (both = [0, 0], action) => {
	if (action.type === 'SET_SCORES') {
		return action.payload;
	} else {
		return both;
	}
};

const roundScore = (current = 0, action) => {
	if (action.type === 'SET_ROUND_SCORE') {
		return action.payload;
	} else {
		return current;
	}
};

const activePlayer = (act = 0, action) => {
	if (action.type === 'SET_ACTIVE_PLAYER') {
		return action.payload;
	} else {
		return act;
	}
};

const gamePlaying = (inPlay = true, action) => {
	if (action.type === 'SET_GAME_PLAYING') {
		return action.payload;
	} else {
		return inPlay;
	}
};

const isRolling = (inPlay = true, action) => {
	if (action.type === 'SET_IS_ROLLING') {
		return action.payload;
	} else {
		return inPlay;
	}
};

const cookies = (allow = false, action) => {
	if (action.type === 'SET_COOKIES') {
		return action.payload;
	} else {
		return allow;
	}
};

const superSearch = (
	props = { value: '', focus: false, blur: true },
	action
) => {
	if (action.type === 'SET_COOKIES') {
		return action.payload;
	} else {
		return props;
	}
};

/////////////////////////
// Recipes

const recipeResults = (recipes = [], action) => {
	if (action.type === 'SET_RECIPE_RESULTS') {
		return action.payload;
	} else {
		return recipes;
	}
};

const recipeDetails = (recipe = [], action) => {
	if (action.type === 'SET_RECIPE_DETAILS') {
		return action.payload;
	} else {
		return recipe;
	}
};

const inputFocus = (bool = false, action) => {
	if (action.type === 'SET_INPUT_FOCUS') {
		return action.payload;
	} else {
		return bool;
	}
};

const weatherApp = combineReducers({
	cookies,
	system: selectedSystem,
	location: inputLocation,
	searchedLocation: searchedLocation,
	searchWeatherData: searchWeatherData,
	errorInSearch: errorInSearch,
	fullSearchName: fullSearchName,
	timeAtSearch: timeAtSearch,
	dateAtSearch: dateAtSearch,
	imageSearchDone: imageSearchDone,
	hideOrShow: hideOrShow,
	shouldShowImages: shouldShowImages,
	dataFromInitialLocationSearch: dataFromInitialLocationSearch,
	latLonToSearch: latLonToSearch,
	onlyShowTitle: onlyShowTitle,
	imagesFound: imagesFound,
	neededForFavorite: neededForFavorite,
	showModal: showModal,
	showLoader: showLoader,
	weatherSearch,
	// begin Super Hero Smackdown
	introDone: introDone,
	fighterA: fighterA,
	fighterB: fighterB,
	ready: ready,
	matchReport: matchReport,
	showMatchReport,
	// Dice Game
	rolled,
	scores,
	roundScore,
	activePlayer,
	gamePlaying,
	isRolling,
	superSearch,
	// Recipes
	recipeResults,
	recipeDetails,
	inputFocus,
});

export default weatherApp;
