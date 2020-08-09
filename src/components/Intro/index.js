import React, { useEffect, useRef } from 'react';

import SectionWipes from '../SectionWipes';

export default function Intro() {
	const end = useRef();

	useEffect(() => {
		const body = document.body,
			html = document.documentElement;

		const height = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		let x = 0;
		while (x < height) {
			window.setTimeout(() => {
				window.scrollBy(0, 50);
			}, 1000);
			x += 50;
		}
	});

	function scrollToEnd() {
		end.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<React.Fragment>
			<button onClick={scrollToEnd}>scroll</button>
			<div>
				<SectionWipes />
			</div>
			<div ref={end}></div>
		</React.Fragment>
	);
}
