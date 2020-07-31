import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import DiceOne from './faces/dice-1.png';
import DiceTwo from './faces/dice-2.png';
import DiceThree from './faces/dice-3.png';
import DiceFour from './faces/dice-4.png';
import DiceFive from './faces/dice-5.png';
import DiceSix from './faces/dice-6.png';

import { DiceWrap } from './style';

import {
	setRoundScore,
	setActivePlayer,
	setRolled,
	setIsRolling,
} from '../../../actions';

export default function Dice() {
	const dispatch = useDispatch();

	const roundScore = useSelector((state) => state.roundScore);
	const activePlayer = useSelector((state) => state.activePlayer);
	const rolledLast = useSelector((state) => state.rolled);

	const diceRef = useRef();

	let canRoll = true;

	/////////////////////

	function findRandom() {
		const rolled = Math.floor(Math.random() * 6 + 1);
		if (rolled === rolledLast) return findRandom();
		return rolled;
	}

	function roll() {
		if (canRoll) {
			dispatch(setIsRolling(true));
			canRoll = false;
			const duration = 1500;
			let rolled = findRandom();

			diceRef.current.classList.remove = 'one';
			diceRef.current.classList.remove = 'two';
			diceRef.current.classList.remove = 'three';
			diceRef.current.classList.remove = 'four';
			diceRef.current.classList.remove = 'five';
			diceRef.current.classList.remove = 'six';

			switch (rolled) {
				case 1:
					diceRef.current.className = 'one';
					break;
				case 2:
					diceRef.current.className = 'two';
					break;
				case 3:
					diceRef.current.className = 'three';
					break;
				case 4:
					diceRef.current.className = 'four';
					break;
				case 5:
					diceRef.current.className = 'five';
					break;
				case 6:
					diceRef.current.className = 'six';
					break;
			}

			window.setTimeout(() => {
				canRoll = true;
				dispatch(setIsRolling(false));

				if (rolled === 1) {
					dispatch(setRoundScore(0));
					activePlayer === 0
						? dispatch(setActivePlayer(1))
						: dispatch(setActivePlayer(0));
				} else {
					dispatch(setRolled(rolled));
					dispatch(setRoundScore(roundScore + rolled));
				}
			}, duration + 200);
		}
	}

	return (
		<DiceWrap>
			<div id="view">
				<div id="dice" ref={diceRef} onClick={roll}>
					<div className="diceFace" id="front">
						<img alt="dice face" src={DiceSix} />
					</div>
					<div className="diceFace" id="right">
						<img alt="dice face" src={DiceFive} />
					</div>
					<div className="diceFace" id="back">
						<img alt="dice face" src={DiceFour} />
					</div>
					<div className="diceFace" id="left">
						<img alt="dice face" src={DiceThree} />
					</div>
					<div className="diceFace" id="top">
						<img alt="dice face" src={DiceTwo} />
					</div>
					<div className="diceFace" id="bottom">
						<img alt="dice face" src={DiceOne} />
					</div>
				</div>
			</div>
		</DiceWrap>
	);
}
