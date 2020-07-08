import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import Weather from './Weather/';
import SuperHeroSmackdown from './SuperHeroSmackdown/';
import Reset from './SuperHeroSmackdown/Reset/';
import history from '../history';
import Nastya from './Nastya';
import My404Component from './404';
import understandState from './understandState';

import weatherApp from '../reducers/';

// let store = createStore(weatherApp);
const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25,
});
export const store = createStore(weatherApp, composeEnhancers());
function App() {
	// useEffect(() => {
	// 	document.addEventListener('click', (e) => {
	// 		console.log(e.target);
	// 	});
	// });

	return (
		<Provider store={store}>
			<Router history={history}>
				<React.Fragment>
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/weather" exact component={Weather} />
						<Route
							path="/superherosmackdown"
							exact
							component={SuperHeroSmackdown}
						/>
						<Route path="/reset" exact component={Reset} />
						<Route path="/AnastaciaKorotkevich" exact component={Nastya} />
						<Route path="/learn" exact component={understandState} />
						<Route path="*" exact component={My404Component} />
					</Switch>
				</React.Fragment>
			</Router>
		</Provider>
	);
}

export default App;
