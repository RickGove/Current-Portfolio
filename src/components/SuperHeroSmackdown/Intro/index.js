import React from 'react';

import { useSelector } from 'react-redux';

import { IntroDiv } from './style/';
import IntroMain from './IntroMain/';
import Search from './Search';

function Intro() {
	const introDone = useSelector((state) => state.introDone);

	if (!introDone) {
		return (
			<IntroDiv>
				<IntroMain />
			</IntroDiv>
		);
	} else {
		return (
			<IntroDiv>
				<Search />
			</IntroDiv>
		);
	}
}

export default Intro;
