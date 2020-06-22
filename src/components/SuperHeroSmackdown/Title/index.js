import React, { useEffect, useRef } from 'react';

import { TitleDiv } from './style/';

function Title() {
	const titleDiv = useRef(null);

	useEffect(() => {
		window.setTimeout(() => {
			titleDiv.current.classList.add('grow');
		}, 1200);
	});

	return (
		<TitleDiv>
			<div ref={titleDiv} className="">
				<h1>SUPERHERO SMACKDOWN!</h1>
			</div>
		</TitleDiv>
	);
}

export default Title;
