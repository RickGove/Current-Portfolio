import React, { useRef, useState } from 'react';

import { useDispatch } from 'react-redux';

import { setFighterA, setFighterB } from '../../../../actions';

import placeholder from '../../img/intro/placeholder.png';

import { CharCard } from './style';

const CharacterCard = (props) => {
	const dispatch = useDispatch();

	function clearData() {
		if (props.AB === 'A') dispatch(setFighterA(null));
		if (props.AB === 'B') dispatch(setFighterB(null));
	}

	if (!props.data) {
		return (
			<CharCard>
				<img src={placeholder} />
			</CharCard>
		);
	} else {
		return (
			<CharCard>
				<div>
					<img src={props.data[1]} />
					<h1>{props.data[0]}</h1>
					<h2 onClick={clearData}>X</h2>
				</div>
			</CharCard>
		);
	}
};

export default CharacterCard;