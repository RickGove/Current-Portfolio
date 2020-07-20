import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../SearchBar';
import CharacterCard from '../CharacterCard';
import BattleScene from '../BattleScene';
import MatchReport from '../MatchReport';

import searchImg from '../../img/intro/watchlogo-min.png';
import battleLogo from '../../img/intro/logoBattle.png';

import vs from '../../img/intro/vs.png';

import { setReady } from '../../../../actions';

function Search() {
	///refs
	const image = useRef(),
		mainDiv = useRef(),
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
	const [showInput, setShowInput] = useState(false);

	// var vars

	// begin main fn

	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			e.preventDefault();
			if (e.keyCode === 13 && begin.current) {
				beginBattle();
			}
		});
	});

	function delayButton() {
		window.setTimeout(() => {
			if (begin.current) begin.current.style.visibility = 'unset';
			if (begin.current) begin.current.focus();
		}, 3000);
	}

	function beginBattle() {
		// set state to battle begin
		dispatch(setReady(true));
	}

	function delayInput() {
		if (!ready) {
			window.setTimeout(() => {
				if (delayedDiv.current) delayedDiv.current.style.visibility = 'unset';
			}, 5000);
		}
	}

	if (!fighterA || !fighterB) {
		delayInput();
		return (
			<div id="main-app-div" ref={mainDiv}>
				<div ref={image} className="logo-on-search">
					SUPERHERO SMACKDOW
				</div>
				<SearchBar />
				<div ref={cardContainer} className="card-container">
					<div ref={charCardA} className="char-card">
						<CharacterCard AB="A" data={fighterA} />
					</div>
					<img src={vs} className="vs-img" />
					<div ref={charCardB} className="char-card">
						<CharacterCard AB="B" data={fighterB} />
					</div>
				</div>
			</div>
		);
	} else if (!ready) {
		delayButton();
		return (
			<div id="main-app-div" ref={mainDiv}>
				<div ref={image} className="logo-on-search">
					sUPERHERO SMACKDOWn
				</div>

				<div ref={cardContainer} className="card-container">
					<div ref={charCardA} className="char-card">
						<CharacterCard AB="A" data={fighterA} />
					</div>
					<img src={vs} className="vs-img" />
					<div ref={charCardB} className="char-card">
						<CharacterCard AB="B" data={fighterB} />
					</div>
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
			</div>
		);
	} else if (!showMatchReport) {
		return (
			<div id="main-app-div" ref={mainDiv}>
				<div ref={image} className="logo-on-search">
					sUPERHERO SMACKDOWn
				</div>
				<BattleScene />
			</div>
		);
	} else {
		return <MatchReport />;
	}
}

export default Search;
