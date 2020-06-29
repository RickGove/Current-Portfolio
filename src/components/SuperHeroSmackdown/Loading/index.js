import React from 'react';

import { SpinningLoader } from './style/';

function Loading() {
	let x = Math.random() * 10;
	x = Math.floor(x);
	let randomImg = require(`../img/${x}.png`);
	return (
		<SpinningLoader>
			<img src={randomImg} />
		</SpinningLoader>
	);
}

export default Loading;
