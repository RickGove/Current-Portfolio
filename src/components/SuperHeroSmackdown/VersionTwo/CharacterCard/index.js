import React, { useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setFighterA, setFighterB } from '../../../../actions';

import placeholder from '../../img/intro/placeholder.png';

import { CharCard } from './style';

const CharacterCard = (props) => {
	const dispatch = useDispatch();

	const charDiv = useRef();

	function clearData() {
		if (props.AB === 'A') dispatch(setFighterA(null));
		if (props.AB === 'B') dispatch(setFighterB(null));
	}

	useEffect(() => {
		//set BG
		if (!props.data)
			charDiv.current.style.backgroundImage = `url(${placeholder})`;
		else charDiv.current.style.backgroundImage = `url(${props.data[1]})`;
	});

	if (!props.data) {
		return (
			<CharCard length={3}>
				<div ref={charDiv}>
					<p>{'  '}</p>
					<h1>? ? ? ?</h1>
				</div>
			</CharCard>
		);
	} else {
		return (
			<CharCard length={props.data[0].length}>
				<div ref={charDiv}>
					<h2 onClick={clearData}>X</h2>
					<h1>{props.data[0]}</h1>
				</div>
			</CharCard>
		);
	}
};

export default CharacterCard;
