import React, { useState, useRef } from 'react';

function UnderstandState() {
	// state
	const [stateA, setStateA] = useState('This is the deault for A');
	const [stateB, setStateB] = useState('This is the deault for B');
	const [stateC, setStateC] = useState('This is the deault for C');
	// refs
	const pA = useRef();
	const inputA = useRef();

	function updateStateFromInput() {
		setStateA(inputA.current.value);
	}

	function changeB() {
		setStateB('New state');
	}

	function doSomethingWithStateC() {}
	return (
		<div>
			<input ref={inputA} type="text" onChange={updateStateFromInput} />
			<p ref={pA}>{stateA}</p>
			<p>{stateB}</p>
			<p>{stateC}</p>
			<button onClick={changeB}> CLICK TO CHANGE STATE OF B</button>
			<button onClick={doSomethingWithStateC}>Manipulate state A</button>
		</div>
	);
}

export default UnderstandState;
