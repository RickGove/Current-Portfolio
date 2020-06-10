import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import Weather from './Weather/';
import history from '../history';
import Cookies from './cookies';

import weatherApp from '../reducers/';

let store = createStore(weatherApp);

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<>
						<Cookies />
						<Switch>
							<Route path="/" exact component={HomePage} />
							<Route path="/weather" exact component={Weather} />
						</Switch>
					</>
				</Router>
			</Provider>
		);
	}
}

export default App;
