import React from 'react';

import { useSelector } from 'react-redux';

import { IntroDiv } from './style';
import IntroMain from './IntroMain';
import MainDiv from './MainDiv';

function Intro() {
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
				<MainDiv />
			</IntroDiv>
		);
	}
}

export default Intro;
