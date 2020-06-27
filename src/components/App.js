import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import Weather from './Weather/';
import SuperHeroSmackdown from './SuperHeroSmackdown/';
import history from '../history';
import Nastya from './Nastya';

import weatherApp from '../reducers/';

// let store = createStore(weatherApp);
const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25,
});
export const store = createStore(weatherApp, composeEnhancers());
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<>
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/weather" exact component={Weather} />
							<Route
								path="/superherosmackdown"
								exact
								component={SuperHeroSmackdown}
							/>
							<Route path="/AnastaciaKorotkevich" exact component={Nastya} />
						</Switch>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
