import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setCookies } from '../../actions';

import { CookiesCon } from './CookiesStyle';

export default function Cookies() {
	const dispatch = useDispatch();

	const cookies = useSelector((state) => state.cookies);

	useEffect(() => {
		const cookiesLS = window.localStorage.getItem('cookies');
		if (cookiesLS === 'yes') dispatch(setCookies(true));
	});

	function agreeToCookies() {
		window.localStorage.setItem('cookies', 'yes');
		dispatch(setCookies(true));
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

	if (!cookies) {
		return (
			<CookiesCon>
				<div>
					<h1 className="full">
						I use C
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
	} else return <div></div>;
}
