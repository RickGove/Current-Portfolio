import React from 'react';

import { data } from '../data/Data';

import { ShowSubhead } from '../about/AboutStyle';

// import { useSelector } from 'react-redux';

export default function MoreInfo() {
	// const hideData = useSelector((state) => state.hideData);

	return (
		<React.Fragment>
			<div id="more-info" className={'hidden-data'}>
				{/* hideData ? '' : 'hidden-data' */}
				<ShowSubhead>{data.about.subhead}</ShowSubhead>
				<p>{data.about.contentP1}</p>
				<p>{data.about.contentP2}</p>
				<p>{data.about.contentP3}</p>
			</div>
		</React.Fragment>
	);
}
