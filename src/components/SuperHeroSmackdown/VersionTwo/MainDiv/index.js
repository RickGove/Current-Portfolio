import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../SearchBar/';
import CharacterCard from '../CharacterCard';
import BattleScene from '../BattleScene';
import MatchReport from '../MatchReport';

import { setReady } from '../../../../actions';

function Search() {
	///refs
	const mainDiv = useRef(),
		cardContainer = useRef(),
		charCardA = useRef(),
		charCardB = useRef(),
		begin = useRef(),
		delayedDiv = useRef();

	// redux
	const fighterA = useSelector((state) => state.fighterA),
		fighterB = useSelector((state) => state.fighterB),
		ready = useSelector((state) => state.ready),
		showMatchReport = useSelector((state) => state.showMatchReport),
		dispatch = useDispatch();

	// state vars

	// var vars

	// begin main fn

	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			e.preventDefault();
			if (
				e.keyCode === 13 &&
				begin.current &&
				begin.current.style.visibility === 'unset'
			) {
				beginBattle();
			}
		});
	});

	function delayButton() {
		window.setTimeout(() => {
			if (begin.current) begin.current.style.visibility = 'unset';
			if (begin.current) begin.current.focus();
		}, 2000);
	}

	function beginBattle() {
		// set state to battle begin
		dispatch(setReady(true));
	}

	function delayInput() {
		if (delayedDiv.current) delayedDiv.current.style.visibility = 'hidden';
		if (!ready) {
			window.setTimeout(() => {
				if (delayedDiv.current) delayedDiv.current.style.visibility = 'unset';
				if (delayedDiv.current) delayedDiv.current.focus();
			}, 2500);
		}
	}

	function makeHeader() {
		return (
			<div className="header-title">
				<h2 className="header-title__heading">SUPERHERO SMACKDOWN</h2>
			</div>
		);
	}

	if (showMatchReport) {
		return <MatchReport />;
	} else if (!fighterA && !fighterB) {
		delayInput();
		return (
			<div id="main-app-div" ref={mainDiv}>
				{makeHeader()}

				<div ref={delayedDiv} style={{ visibility: 'hidden' }}>
					<SearchBar />
				</div>
				<div ref={cardContainer} className="card-container">
					<div ref={charCardA} className="char-card"></div>
					<div className="vs-h1">
						<h1>VS</h1>
					</div>
					<div ref={charCardB} className="char-card"></div>
				</div>
			</div>
		);
	} else if (fighterA && !fighterB) {
		delayInput();

		return (
			<div id="main-app-div" ref={mainDiv}>
				{makeHeader()}
				<div ref={delayedDiv} style={{ visibility: 'hidden' }}>
					<SearchBar />
				</div>
				<div ref={cardContainer} className="card-container">
					<div ref={charCardA} className="char-card">
						<CharacterCard AB="A" data={fighterA} />
					</div>
					<div className="vs-h1">
						<h1>VS</h1>
					</div>
					<div ref={charCardB} className="char-card"></div>
				</div>
			</div>
		);
	} else if (fighterA && fighterB && !ready) {
		delayButton();
		return (
			<div id="main-app-div" ref={mainDiv}>
				{makeHeader()}
				<div ref={cardContainer} className="card-container">
					<div ref={charCardA} className="char-card">
						<CharacterCard AB="A" data={fighterA} />
					</div>
					<div className="container-begin-button">
						<button
							autoFocus
							className="begin-button"
							ref={begin}
							style={{ visibility: 'hidden' }}
							onClick={beginBattle}>
							Begin Battle
						</button>
					</div>
					<div ref={charCardB} className="char-card">
						<CharacterCard AB="B" data={fighterB} />
					</div>
				</div>
			</div>
		);
	} else if (!fighterA && fighterB) {
		delayInput();

		return (
			<div id="main-app-div" ref={mainDiv}>
				{makeHeader()}
				<div ref={delayedDiv} style={{ visibility: 'hidden' }}>
					<SearchBar />
				</div>

				<div ref={cardContainer} className="card-container">
					<div ref={charCardA} className="char-card"></div>
					<div className="vs-h1">
						<h1>VS</h1>
					</div>
					<div ref={charCardB} className="char-card">
						<CharacterCard AB="B" data={fighterB} />
					</div>
				</div>
			</div>
		);
	} else if (ready) {
		delayButton();
		return (
			<div id="main-app-div" ref={mainDiv}>
				{makeHeader()}

				<BattleScene />
			</div>
		);
	} else if (!showMatchReport) {
		return (
			<div id="main-app-div" ref={mainDiv}>
				{makeHeader()}
				<BattleScene />
			</div>
		);
	}
}

export default Search;
