import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
// import Cookies from './components/cookies';
import reducers from './reducers';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,

	document.querySelector('#root')
);
