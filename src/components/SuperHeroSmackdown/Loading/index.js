import React from 'react';

import { SpinningLoader } from './style/';

function Loading() {
	return (
		<SpinningLoader>
			<p>Searching . . . </p>;
		</SpinningLoader>
	);
}

export default Loading;
