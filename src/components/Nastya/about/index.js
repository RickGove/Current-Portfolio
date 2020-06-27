import React from 'react';
import {
	ShowSubhead,
	ShowCaseCon,
	ShowH1,
	ShowImg,
	AboutTitle,
	AboutWPDiv,
} from './AboutStyle';

import me from '../img/RBG.jpg';

import { data } from '../data/Data';

function ShowCase() {
	return (
		<AboutWPDiv>
			<ShowCaseCon id="About">
				<AboutTitle>
					<ShowH1>About Nastya</ShowH1>
				</AboutTitle>
				<ShowImg src={me}></ShowImg>
				<ShowSubhead>{data.about.subhead}</ShowSubhead>
				<p>{data.about.contentP1}</p>
				<p>{data.about.contentP2}</p>
				<p>{data.about.contentP3}</p>
			</ShowCaseCon>
		</AboutWPDiv>
	);
}

export default ShowCase;
