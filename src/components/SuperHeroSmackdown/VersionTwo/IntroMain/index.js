import React, { useRef, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setIntroDone } from '../../../../actions';

function IntroMain() {
	// REFS
	const imageDiv = useRef();
	const image = useRef();

	// STATE
	const dispatch = useDispatch();

	function generateArrOfImages(total) {
		let arr = [];
		let i = 0;
		while (i < total) {
			let newFile = require(`../../img/intro/${i}-min.png`);
			arr.push(newFile);
			i++;
		}
		return arr;
	}

	useEffect(() => {
		console.clear();
		let arrOfImages = generateArrOfImages(39),
			interval = 750;

		buildUpImage(arrOfImages, interval, 0);
	});

	function buildUpImage(arr, int, i) {
		let keys = [1, 2, 3, 11, 12, 20, 21, 27, 28, 35, 36, 37];
		let tempInt = int;
		if (keys.includes(i)) {
			tempInt = int * 2;
		}
		if (i === 0) tempInt = int * 5;
		if (image.current) {
			if (i < arr.length) {
				if (image.current) image.current.classList.add('image-fade');

				if (image.current) image.current.src = arr[i];
				window.setTimeout(() => {
					if (image.current) image.current.classList.remove('image-fade');
				}, 75);

				window.setTimeout(() => {
					i++;
					buildUpImage(arr, int, i);
				}, tempInt);
			} else {
				if (image.current) image.current.src = arr[arr.length - 1];
				moveOn();
			}
		}
	}

	function moveOn() {
		dispatch(setIntroDone(true));
		localStorage.setItem('introDone', true);
	}

	return (
		<div id="image-div" ref={imageDiv}>
			<img alt="intro" src="" ref={image} className="image" />
			<button className="skip-button" onClick={moveOn}>
				SKIP INTRO > > >
			</button>
		</div>
	);
}

export default IntroMain;
