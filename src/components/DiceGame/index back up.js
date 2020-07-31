import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Dice from './dice copy/';

import { DiceDiv } from './style';

import {
	setScores,
	setRoundScore,
	setActivePlayer,
	setGamePlaying,
} from '../../actions';

export default function DiceGame() {
	const dispatch = useDispatch();

	const scores = useSelector((state) => state.scores),
		roundScore = useSelector((state) => state.roundScore),
		activePlayer = useSelector((state) => state.activePlayer),
		isRolling = useSelector((state) => state.isRolling),
		gamePlaying = useSelector((state) => state.gamePlaying);

	const rulesDivRef = useRef();

	function holdBtn() {
		if (gamePlaying) {
			let newScores;
			// Add CURRENT score to GLOBAL score
			activePlayer === 0
				? (newScores = [scores[0] + roundScore, scores[1]])
				: (newScores = [scores[0], scores[1] + roundScore]);
			dispatch(setScores(newScores));

			//Next player
			nextPlayer();
		}
	}

	useEffect(() => {
		const pointsToWin = 40;
		// Check if player won the game
		if (scores[0] >= pointsToWin) {
			document.querySelector('#name-0').textContent = 'Winner!';
			document.querySelector('#name-1').classList.remove('playing');
			document.querySelector('.player-0-panel').classList.add('winner');
			document.querySelector('.player-0-panel').classList.remove('active');
			dispatch(setGamePlaying(false));
		} else if (scores[1] >= pointsToWin) {
			document.querySelector('#name-1').textContent = 'Winner!';
			document.querySelector('#name-0').classList.remove('playing');
			document.querySelector('.player-1-panel').classList.add('winner');
			document.querySelector('.player-1-panel').classList.remove('active');
			dispatch(setGamePlaying(false));
		}
	});

	function nextPlayer() {
		//Next player
		activePlayer === 0
			? dispatch(setActivePlayer(1))
			: dispatch(setActivePlayer(0));
		dispatch(setRoundScore(0));
	}

	function init() {
		document.getElementById('dice-wrap').style.visibility = 'hidden';
		dispatch(setScores([0, 0]));
		dispatch(setActivePlayer(0));
		dispatch(setRoundScore(0));
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('#name-0').textContent = 'Player 1';
		document.querySelector('#name-1').textContent = 'Player 2';
		dispatch(setGamePlaying(true));
		window.setTimeout(() => {
			document.getElementById('dice-wrap').style.visibility = 'unset';
		}, 500);
	}

	function hideRules() {
		rulesDivRef.current.style.height = '0';
		rulesDivRef.current.style.opacity = '0';
		rulesDivRef.current.style.width = '0';
		rulesDivRef.current.className = 'rules-div';
	}

	function showRules() {
		rulesDivRef.current.style.opacity = 1;
		rulesDivRef.current.style.height = '75vh';
		rulesDivRef.current.style.width = '80vw';
	}

	function setHoldClass() {
		if (!gamePlaying || isRolling || roundScore === 0) return 'hidden';
		else return 'btn-hold';
	}

	return (
		<DiceDiv>
			{/* <div className="go-home__wrapper">
				<GoHome />
			</div> */}
			<div className="wrapper clearfix">
				<div
					className={
						activePlayer === 0 ? 'player-0-panel active' : 'player-0-panel'
					}>
					<div
						className={
							activePlayer === 0 ? 'player-name playing' : 'player-name'
						}
						id="name-0">
						Player 1
					</div>
					<div className="player-score" id="score-0">
						{scores[0]}
					</div>
					<div className="player-current-box">
						<div className="player-current-label">Current</div>
						<div className="player-current-score" id="current-0">
							{activePlayer === 0 ? roundScore : '-'}
						</div>
					</div>
				</div>

				<div
					className={
						activePlayer === 1 ? 'player-1-panel active' : 'player-1-panel'
					}>
					<div
						className={
							activePlayer === 1 ? 'player-name playing' : 'player-name'
						}
						id="name-1">
						Player 2
					</div>
					<div className="player-score" id="score-1">
						{scores[1]}
					</div>
					<div className="player-current-box">
						<div className="player-current-label">Current</div>
						<div className="player-current-score" id="current-1">
							{activePlayer === 1 ? roundScore : '-'}
						</div>
					</div>
				</div>
				<div className="rules-wrapper">
					<button id="rules-btn" onClick={showRules}>
						<span role="img" aria-label="rules">
							❓
						</span>
						rules
					</button>
					<div className="rules-div" ref={rulesDivRef} onClick={hideRules}>
						<h2>RULES:</h2>
						<ul>
							<li>The goal is to reach forty (40) points</li>
							<li>
								Click the dice to roll it; rolled value will be added to current
								points
							</li>
							<li>If you roll a one (1), all current points are lost</li>
							<li>After a one is rolled, it's the other player's turn </li>
							<li>
								When you wish to keep your current points for the round, click
								the hold button and it becomes the other player's turn
							</li>
						</ul>
						<button className="got-it-btn" onClick={hideRules}>
							<span role="img" aria-label="got it">
								👍
							</span>
							Got it!
						</button>
					</div>
				</div>
				<button className={gamePlaying ? 'hidden' : 'btn-new'} onClick={init}>
					<span role="img" aria-label="new game">
						➕
					</span>
					New game
				</button>
				<div className={gamePlaying ? 'dice-wrap' : 'hidden'} id="dice-wrap">
					<Dice />
					<button className={setHoldClass()} onClick={holdBtn}>
						<span role="img" aria-label="hold">
							✋
						</span>
						Hold
					</button>
				</div>
			</div>
		</DiceDiv>
	);
}
