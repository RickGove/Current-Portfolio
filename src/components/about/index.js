import React, { useState } from 'react';
import {
	ShowSubhead,
	ShowCaseCon,
	ShowH1,
	ShowImg,
	AboutTitle,
	AboutWPDiv,
} from './AboutStyle';

import me from '../../img/RBG.jpg';

import { data } from '../data/Data';

function ShowCase() {
	const [hideData, setHideData] = useState();

	function showMore() {
		setHideData(!hideData);
	}

	return (
		<AboutWPDiv>
			<ShowCaseCon id="About">
				<AboutTitle>
					<ShowH1>Hi, I'm Rick Gove</ShowH1>
					<ShowSubhead>Junior Web Developer</ShowSubhead>
				</AboutTitle>
				<ShowImg src={me}></ShowImg>
				<button className="btn-see-more" onClick={showMore}>
					{hideData ? 'Show Less' : 'Find Out More'}
				</button>
				<div id="more-info" className={hideData ? '' : 'hidden-data'}>
					<ShowSubhead>{data.about.subhead}</ShowSubhead>
					<p>{data.about.contentP1}</p>
					<p>{data.about.contentP2}</p>
					<p>{data.about.contentP3}</p>
				</div>
			</ShowCaseCon>
		</AboutWPDiv>
	);
}

export default ShowCase;
