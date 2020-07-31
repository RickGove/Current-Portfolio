import React, { useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { gsap } from 'gsap';

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
	const cubeRef = useRef();
	const sceneRef = useRef();

	let canRoll = true;

	useEffect(() => {
		const tl = new gsap.timeline({ paused: true, repeat: 3 });
		gsap.set(sceneRef.current, { perspective: 0 });
		tl.current = gsap.timeline({ paused: true, repeat: 3 });
		tl.to(cubeRef.current, 1, { rotationY: 360, rotationX: 360 }, '-=1')
			.to(sceneRef.current, 1, { scale: 0.2 }, '-=1')
			.to(cubeRef.current, 1, { x: 500 }, '-=1')
			.timeScale(1);

		return () => {
			tl.current.kill();
		};
	}, []);

	const startRoll = function () {
		if (canRoll) {
			dispatch(setIsRolling(true));
			canRoll = false;
			let rl = new gsap.timeline({ onComplete: faceRoll });
			rl.to(cubeRef.current, 0.01, { rotationY: 0, rotationX: 0 });
			rl.to(cubeRef.current, 3, { rotationY: 1800, rotationX: 1800 });
			rl.to(sceneRef.current, 3, { scale: 0.2 }, '-.1');
			rl.timeScale(4);
			rl.restart();
		}
	};

	const faceRoll = function () {
		var randomNum = Math.floor(Math.random() * 6); //between 0 and 5
		if (randomNum === 0) {
			gsap.to(cubeRef.current, 0.2, { rotationY: 0, rotationX: 0 }, '-1');
			gsap.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 5) {
			gsap.to(cubeRef.current, 0.2, { rotationX: 90, scale: 1 }, '-1');
			gsap.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 1) {
			gsap.to(cubeRef.current, 0.2, { rotationX: 180, scale: 1 }, '-1');
			gsap.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 4) {
			gsap.to(cubeRef.current, 0.2, { rotationX: 270, scale: 1 }, '-1');
			gsap.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 2) {
			gsap.to(cubeRef.current, 0.2, { rotationY: 90, scale: 1 }, '-1');
			gsap.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 3) {
			gsap.to(cubeRef.current, 0.2, { rotationY: 270, scale: 1 }, '-1');
			gsap.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}

		window.setTimeout(() => {
			canRoll = true;
			dispatch(setIsRolling(false));

			if (randomNum + 1 === 1) {
				dispatch(setRoundScore(0));
				activePlayer === 0
					? dispatch(setActivePlayer(1))
					: dispatch(setActivePlayer(0));
			} else {
				dispatch(setRolled(randomNum + 1));
				dispatch(setRoundScore(roundScore + randomNum + 1));
			}
		}, 500);
	};

	return (
		<DiceWrap>
			<div id="box1" onClick={startRoll}>
				<div className="scene" ref={sceneRef}>
					<div className="cube" ref={cubeRef}>
						<div className="cube-face front-face rfront"></div>
						<div className="cube-face back-face rback"></div>
						<div className="cube-face left-face rleft"></div>
						<div className="cube-face right-face rright"></div>
						<div className="cube-face top-face rtop"></div>
						<div className="cube-face bottom-face rbottom"></div>
					</div>
				</div>
			</div>
		</DiceWrap>
	);
}
