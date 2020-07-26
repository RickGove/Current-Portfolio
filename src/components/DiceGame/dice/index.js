import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TweenMax, Linear, TimelineMax } from 'gsap';

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

	//////////// Copy Pasta ////////

	const cubeRef = useRef();
	const sceneRef = useRef();

	let canRoll = true;

	let i = 90;
	let j = 0;

	//Main DOM Variables and Selectors

	//Selects Cube Face X via CSS Degree Rotatation
	const cubeFace = [
		'translateX(200px)',
		'rotateX(90deg)',
		'rotateX(180deg)',
		'rotateX(270deg)',
	];

	TweenMax.set(sceneRef.current, { perspective: 0 });

	//Rotates through cubeFace array on each click.
	//If i>cubeFace reset to 0 and preform 1st step.

	const RotateY = function () {
		TweenMax.to(cubeRef.current, 0.5, {
			transform: cubeFace[i],
			ease: Linear.easeNone,
		});

		if (i < cubeFace.length) {
			i++;
			console.log(i);
		} else {
			i = 1;
			TweenMax.to(cubeRef.current, 0.5, {
				transform: cubeFace[0],
				ease: Linear.easeNone,
			});
			console.log(i);
		}
	}; //RotateY Function

	const RotateX = function () {
		TweenMax.to(cubeRef.current, 0.5, { transform: 'rotateY(' + i + 'deg)' });
		i += 90;
	};

	//Random Experimental Scene
	const tl = new TimelineMax({ paused: true, repeat: 3 });
	tl.yoyo(true);
	tl.to(cubeRef.current, 1, { rotation: 360 })

		.to(cubeRef.current, 1, { rotationY: 360, rotationX: 360 }, '-=1')
		.to(sceneRef.current, 1, { scale: 0.2 }, '-=1')
		.to(cubeRef.current, 1, { x: 500 }, '-=1');

	tl.timeScale(1);

	const start = function () {
		tl.restart();
	};

	//Roll Die Timeline
	const startRoll = function () {
		if (canRoll) {
			dispatch(setIsRolling(true));
			canRoll = false;
			const duration = 1500;
			let randomNum = Math.floor(Math.random() * 3); //between 0 and 5
			let rl = new TimelineMax({ onComplete: faceRoll });
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
			TweenMax.to(cubeRef.current, 0.2, { rotationY: 0, rotationX: 0 }, '-1');
			TweenMax.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 5) {
			TweenMax.to(cubeRef.current, 0.2, { rotationX: 90, scale: 1 }, '-1');
			TweenMax.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 1) {
			TweenMax.to(cubeRef.current, 0.2, { rotationX: 180, scale: 1 }, '-1');
			TweenMax.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 4) {
			TweenMax.to(cubeRef.current, 0.2, { rotationX: 270, scale: 1 }, '-1');
			TweenMax.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 2) {
			TweenMax.to(cubeRef.current, 0.2, { rotationY: 90, scale: 1 }, '-1');
			TweenMax.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
		}
		if (randomNum === 3) {
			TweenMax.to(cubeRef.current, 0.2, { rotationY: 270, scale: 1 }, '-1');
			TweenMax.to(sceneRef.current, 0.2, { scale: 1 }, '-1');
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
	}; //FaceRoll If Statement

	/////////////////////

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
