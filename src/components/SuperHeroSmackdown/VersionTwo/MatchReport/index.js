import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	setReady,
	setMatchReport,
	setShowMatchReport,
	setFighterA,
	setFighterB,
} from '../../../../actions';

export default function MatchReport() {
	// redux
	const matchReport = useSelector((state) => state.matchReport),
		dispatch = useDispatch();

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

	return (
		<div className="match-report-hidden">
			<h1>{matchReport.winner}</h1>
			<img className="hero-img" src={matchReport.winnerImg} />
			<p className="match-report">{matchReport.report}</p>

			<button className="hidden" onClick={newMatch}>
				New Battle
			</button>
		</div>
	);
}
