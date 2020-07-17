import React, { useEffect, useRef } from 'react';
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
		input = useRef();

	// redux
	const fighterA = useSelector((state) => state.fighterA),
		fighterB = useSelector((state) => state.fighterB),
		ready = useSelector((state) => state.ready),
		showMatchReport = useSelector((state) => state.showMatchReport),
		dispatch = useDispatch();

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
			if (mainDiv.current.style.width === 0) {
				setDivSize();
			}
		}, 500);
	}

	useEffect(() => {
		setDivSize();
	});

	function beginBattle() {
		// set state to battle begin
		dispatch(setReady(true));
	}

	if (!fighterA || !fighterB) {
		return (
			<div id="image-div-search" ref={mainDiv}>
				<img src={searchImg} ref={image} className="image-on-search" />
				<SearchBar ref={input} />
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
		return (
			<div id="image-div-search" ref={mainDiv}>
				<img src={searchImg} ref={image} className="image-on-search" />
				<button className="begin-button" onClick={beginBattle}>
					Click to Begin Battle
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
