import React, { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import logo from '../../img/intro/logoReport.png';

import playAgainImg from '../../img/bubble.png';
import drawImg from '../../../../img/superIcon.png';

import {
	setReady,
	setMatchReport,
	setShowMatchReport,
	setFighterA,
	setFighterB,
} from '../../../../actions';

import { MatchReportDiv } from './style';

export default function MatchReport() {
	// redux
	const matchReport = useSelector((state) => state.matchReport),
		dispatch = useDispatch();
	//refs
	const playAgain = useRef();

	useEffect(() => {
		window.setTimeout(() => {
			if (playAgain.current) playAgain.current.style.visibility = 'unset';
		}, 2000);
	});

	function newMatch() {
		// must reset all these in redux
		// reset showMatchReport

		dispatch(setReady(false));
		// reset fighterA

		dispatch(setMatchReport(''));
		// reset fighterB

		dispatch(setFighterA(null));
		// reset ready
		dispatch(setFighterB(null));

		dispatch(setShowMatchReport(null));
	}

	function renderWinner() {
		if (matchReport.winnerImg === 'draw') {
			return 'DRAW';
		} else {
			return matchReport.winner;
		}
	}

	function renderImg() {
		if (matchReport.winnerImg !== 'draw') {
			return (
				<img className="macth-report__hero__img" src={matchReport.winnerImg} />
			);
		} else {
			return <img className="macth-report__hero__img" src={drawImg} />;
		}
	}

	return (
		<MatchReportDiv>
			<div className="match-report__inner__div">
				<img src={logo} className="match-report__logo__img" />
				<h1>{renderWinner()}</h1>
				{renderImg()}
				<p className="match-report__p">{matchReport.report}</p>
				<img
					ref={playAgain}
					src={playAgainImg}
					className="match-report__play__again"
					onClick={newMatch}
				/>
			</div>
		</MatchReportDiv>
	);
}
