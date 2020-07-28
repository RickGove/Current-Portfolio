import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setIntroDone } from '../../../actions';

import { IntroDiv } from './style';
import IntroMain from './IntroMain';
import MainDiv from './MainDiv';

import GoHome from '../../GoHome';

function SuperHeroVersionTwo() {
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = 'Rick Gove | Super Hero Smackdown';
	});

	if (localStorage.introDone) dispatch(setIntroDone(true));
	const introDone = useSelector((state) => state.introDone);
	////////////////////////////////
	// must uncomment to make into run
	if (!introDone) {
		return (
			<IntroDiv>
				<IntroMain />
			</IntroDiv>
		);
	} else {
		return (
			<IntroDiv>
				{/* <div className="go-home__wrapper">
					<GoHome />
				</div> */}
				<MainDiv />
			</IntroDiv>
		);
	}
}

export default SuperHeroVersionTwo;
