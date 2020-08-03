import React, { useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { WeatherHeadCon } from './Style/WeatherHeadCon';

import SearchBar from './SearchBar/';
import SystemSwitch from './SystemSwitch/';

import { GlobalStyle } from '../../GlobalStyle';

import loader from '../img/loader.png';

import { changeSystem } from '../../../actions';

function HeaderW() {
	// state
	const dispatch = useDispatch();
	const system = useSelector((state) => state.system);
	const showModal = useSelector((state) => state.showModal);
	const showLoader = useSelector((state) => state.showLoader);

	// refs
	const modal = useRef();

	useEffect(() => {
		//change title based on site
		document.title = "Rick Gove | Gove's Weather";
		// dealing with the saved system selection cookie
		let systemCookie = localStorage.getItem('system');

		if (systemCookie === null) {
			localStorage.setItem('system', 'C');
		}
		if (system !== systemCookie) {
			dispatch(changeSystem());
		}
	});

	function switchSystem(e) {
		if (e.target.tagName !== 'INPUT') {
			system === 'C'
				? localStorage.setItem('system', 'F')
				: localStorage.setItem('system', 'C');

			dispatch(changeSystem());
		}
	}

	return (
		<React.Fragment>
			<GlobalStyle />
			<WeatherHeadCon>
				<div ref={modal} className={showModal ? 'modal show-modal' : 'modal'}>
					<img
						alt=""
						className={showLoader ? 'loader' : 'loader hidden'}
						src={loader}
					/>
				</div>
				<div id="modal-for-search-focus"></div>
				<h2 className="title-h1">Gove's Weather</h2>

				<div className="search-container">
					<SearchBar />
				</div>

				<div className="switch-outer" onClick={switchSystem}>
					<div className="switch-container">
						<span>C</span>

						<SystemSwitch checked={system === 'C' ? false : true} />
						<span>F</span>
					</div>
				</div>
			</WeatherHeadCon>
		</React.Fragment>
	);
}

export default HeaderW;
