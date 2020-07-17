import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../SearchBar/';
import CharacterCard from '../CharacterCard/';
import BattleScene from '../BattleScene/';
import MatchReport from '../MatchReport/';

import searchImg from '../../img/intro/38.png';
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
		delayedDiv = useRef(),
		input = useRef();

	// redux
	const fighterA = useSelector((state) => state.fighterA),
		fighterB = useSelector((state) => state.fighterB),
		ready = useSelector((state) => state.ready),
		showMatchReport = useSelector((state) => state.showMatchReport),
		dispatch = useDispatch();

	// state vars
	const [sized, setSized] = useState(false),
		[showInput, setShowInput] = useState(false);

	// var vars

	// begin main fn
	////
	window.onresize = setDivSize;

	function setDivSize() {
		const vw = Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0
			),
			vh = Math.max(
				document.documentElement.clientHeight || 0,
				window.innerHeight || 0
			);

		// hide main div
		if (mainDiv.current) mainDiv.current.style.opacity = 0;

		// resize main div
		if (mainDiv.current) mainDiv.current.style.height = `${vh}px`;

		// set image to find proper size
		if (image.current) image.current.style.display = 'block';
		if (image.current) image.current.src = searchImg;

		let heightToRemain = image.current.clientHeight,
			widthToRemain = image.current.clientWidth;

		/////////////////////////
		// testing
		// console.log('heightToRemain:', heightToRemain);
		// console.log('widthToRemain:', widthToRemain);
		// console.log('vw:', vw);
		// console.log('vh:', vh);
		//
		//////////////////////////////////////////

		// set main div properties
		if (mainDiv.current) mainDiv.current.style.height = `${heightToRemain}px`;
		if (mainDiv.current) mainDiv.current.style.width = `${widthToRemain}px`;
		if (mainDiv.current)
			mainDiv.current.style.backgroundImage = `url('${searchImg}')`;

		// set card container props
		if (cardContainer.current)
			cardContainer.current.style.width = `${widthToRemain}px`;
		if (cardContainer.current)
			cardContainer.current.style.width = `${heightToRemain * 0.66}`;

		//hide image
		if (image.current) image.current.style.display = 'none';

		// check it worked, else do again
		window.setTimeout(() => {
			if (mainDiv.current.clientWidth === 0) setDivSize();
			else {
				mainDiv.current.style.transition = '1ms';
				mainDiv.current.style.opacity = 1;
				setSized(true);
				delayInput();
			}
		}, 500);
	}

	function delayButton() {
		window.setTimeout(() => {
			if (begin.current) begin.current.style.visibility = 'unset';
		}, 3000);
	}

	useEffect(() => {
		if (!sized) setDivSize();
	});

	function beginBattle() {
		// set state to battle begin
		dispatch(setReady(true));
	}

	function delayInput() {
		window.setTimeout(() => {
			if (delayedDiv.current) delayedDiv.current.style.visibility = 'unset';
			if (input.current) input.current.focus();
		}, 5000);
	}

	if (!fighterA || !fighterB) {
		if (setSized) delayInput();
		return (
			<div id="image-div-search" ref={mainDiv}>
				<img src={searchImg} ref={image} className="image-on-search" />
				<div ref={delayedDiv} style={{ visibility: 'hidden' }}>
					<SearchBar ref={input} />
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
			</div>
		);
	} else if (!ready) {
		delayButton();
		return (
			<div id="image-div-search" ref={mainDiv}>
				<img src={searchImg} ref={image} className="image-on-search" />
				<button
					className="begin-button"
					ref={begin}
					style={{ visibility: 'hidden' }}
					onClick={beginBattle}>
					Begin Battle
				</button>
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
	} else if (!showMatchReport) {
		return (
			<div id="image-div-search" ref={mainDiv}>
				<img src={searchImg} ref={image} className="image-on-search" />
				<BattleScene />
			</div>
		);
	} else {
		return (
			<div id="image-div-search" ref={mainDiv}>
				<img src={searchImg} ref={image} className="image-on-search" />
				<MatchReport />
			</div>
		);
	}
}

export default Search;
