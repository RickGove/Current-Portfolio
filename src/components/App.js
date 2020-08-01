import React from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomePage from './HomePage';
import Dice from './DiceGame/dice';
import Weather from './Weather/';
import Cookies from './cookies/';
import DiceGame from './DiceGame/';
import VersionTwo from './SuperHeroSmackdown/VersionTwo/';
import noSite from './404';

import weatherApp from '../reducers/';

const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25,
});

export const store = createStore(weatherApp, composeEnhancers());

function App() {
	return (
		<Provider store={store}>
			<Router>
				<React.Fragment>
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/weather" exact component={Weather} />
						<Route path="/superherosmackdown" exact component={VersionTwo} />
						<Route path="/dicegame" exact component={DiceGame} />
						<Route path="/dice" exact component={Dice} />
						<Route path="/cookies" exact component={Cookies} />
						<Route path="*" exact component={noSite} />
					</Switch>
				</React.Fragment>
			</Router>
		</Provider>
	);
}

export default App;
