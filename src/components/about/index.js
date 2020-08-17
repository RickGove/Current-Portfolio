import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import {
	ShowSubhead,
	ShowCaseCon,
	ShowH1,
	ShowImg,
	AboutTitle,
	AboutWPDiv,
} from './AboutStyle';

import MoreInfo from '../MoreInfo/';

import FindOutMore from '../FindOutMore/';

import meA from '../../img/RBG.jpg';

function ShowCase() {
	const triggerAbout = useRef(),
		anName = useRef(),
		anSub = useRef(),
		anB = useRef();

	useEffect(() => {
		const tl = gsap.timeline();
		const delay = 2;
		const stagger = 0.5;

		tl.from(anName.current, {
			duration: delay,
			opacity: 0,
			x: -1000,
			ease: 'power4',
		});
		tl.from(anB.current, {
			duration: delay / 2,
			opacity: 0,
			y: -100,
			stagger: stagger,
			ease: 'bounce',
		});
		tl.from(anSub.current, {
			duration: delay / 2,
			opacity: 0,
			y: -100,
			ease: 'bounce',
		});

		return function () {
			tl.kill();
		};
	}, []);

	return (
		<AboutWPDiv>
			<div ref={triggerAbout} className="triggerAbout" />
			<ShowCaseCon id="About">
				<AboutTitle>
					<div ref={anName} className="anName">
						<ShowH1>Hi, I'm Rick Gove</ShowH1>
					</div>
				</AboutTitle>
				<div ref={anB} className="anB">
					<ShowImg src={meA}></ShowImg>
				</div>
				<ShowSubhead ref={anSub} className="anSub">
					Junior Web Developer
				</ShowSubhead>
				<div>
					<FindOutMore />
					<MoreInfo />
				</div>
			</ShowCaseCon>
		</AboutWPDiv>
	);
}

export default ShowCase;
