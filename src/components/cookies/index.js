import React from 'react';

import { CookiesCon } from './CookiesStyle';

export default function Cookies() {
	function agreeToCookies() {
		window.localStorage.setItem('cookies', 'yes');
	}

	function showModal() {
		let el = document.getElementById('more');
		el.style.display = 'block';
	}

	function refuseCookies() {
		window.localStorage.setItem('cookies', 'no');
		// this.props.agreeCookies('no');
	}

	//1. Test for empty localstorage
	//2. render based on cookie selection
	document.body.style.overflow = 'hidden';

	return (
		<CookiesCon>
			<div>
				<h1 className="full">
					Yo, I use C
					<span role="img" aria-label="cookies">
						🍪🍪
					</span>
					K I E S
				</h1>
				<h3>
					In order to give you the best experience possible, I use cookies.
				</h3>
				<h3>That cool?</h3>

				<button onClick={agreeToCookies}>
					Yes, that's C
					<span role="img" aria-label="cookies">
						🍪🍪
					</span>
					L
				</button>
			</div>
		</CookiesCon>
	);
}
