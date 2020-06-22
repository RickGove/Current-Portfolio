import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { hooksAction, hooksActionTwo } from '../../../actions';

function LearnHooks() {
	const reduxState = useSelector((state) => state.hooksReducer);
	const reduxStateTwo = useSelector((state) => state.hooksReducerTwo);

	const dispatch = useDispatch();

	function changeRedux() {
		let el, value;
		el = document.getElementById('input');
		if (el !== null) {
			value = el.value;
		} else {
			value = 'SADKH';
		}
		dispatch(hooksAction(value));
	}

	function changeReduxTwo() {
		let el, value;
		el = document.getElementById('inputTwo');
		if (el !== null) {
			value = el.value;
		} else {
			value = 'SADKH';
		}
		dispatch(hooksActionTwo(value));
	}
	return (
		<div>
			TO learn redux hooks:{reduxState}
			<input onChange={changeRedux} id="input" />
			TO learn redux hooks two:{reduxStateTwo}
			<input onChange={changeReduxTwo} id="inputTwo" />
		</div>
	);
}

export default LearnHooks;
