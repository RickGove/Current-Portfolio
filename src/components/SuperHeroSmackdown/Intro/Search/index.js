import React, { useEffect, useRef } from 'react';

import { SearchDiv } from './style/';
import SearchBar from '../SearchBar/';

import searchImg from '../../img/intro/38.png';
import spacer from '../../img/intro/spacer.png';

function Search() {
	///refs
	const image = useRef();
	const mainDiv = useRef();
	// state

	window.onresize = setDivSize;

	function setDivSize() {
		if (image.current) image.current.style.display = 'unset';
		if (image.current) image.current.src = searchImg;
		let heightToRemain = image.current.clientHeight,
			widthToRemain = image.current.clientWidth;
		console.log('widthToRemain:', widthToRemain);
		if (image.current) image.current.style.display = 'none';
		if (mainDiv) mainDiv.current.style.height = `${heightToRemain}px`;
		if (mainDiv) mainDiv.current.style.width = `${widthToRemain}px`;
		if (mainDiv) mainDiv.current.style.backgroundImage = `url('${searchImg}')`;
	}

	useEffect(() => {
		// setDivSize();
		window.setTimeout(() => {
			setDivSize();
		}, 800);
	});

	return (
		<div id="image-div-search" ref={mainDiv}>
			<img src={searchImg} ref={image} className="image-on-search" />
			<SearchBar />
		</div>
	);
}

export default Search;
