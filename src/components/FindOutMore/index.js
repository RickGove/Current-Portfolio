import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';

// import { useSelector, useDispatch } from 'react-redux';

// import { setHideData } from '../../actions';

export default function FindOutMore() {
	// const hideData = useSelector((state) => state.hideData);
	// const dispatch = useDispatch();
	const anC = useRef();

	useEffect(() => {
		gsap.from(anC.current, {
			delay: 4,
			y: -100,
			duration: 2,
			opacity: 0,
			ease: 'power3',
		});
	}, []);

	return (
		<div className="find-more">
			<button
				ref={anC}
				className={'btn-see-more anC'}
				// onClick={() => dispatch(setHideData(!hideData))}
			>
				Find Out More
			</button>
		</div>
	);
}
