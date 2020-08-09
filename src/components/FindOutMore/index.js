import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setHideData } from '../../actions';

export default function FindOutMore() {
	const hideData = useSelector((state) => state.hideData);
	const dispatch = useDispatch();

	return (
		<div className="find-more">
			<button
				className={hideData ? 'btn-see-more__hidden anC' : 'btn-see-more anC'}
				onClick={() => dispatch(setHideData(!hideData))}>
				{hideData ? 'Show Less' : 'Find Out More'}
			</button>
		</div>
	);
}
