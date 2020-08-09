import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.triggerAbout',
				toggleActions: 'play reset play reset',
				start: -600,
			},
		});
		const delay = 2;
		const stagger = 0.5;

		tl.from('.anName', {
			duration: delay,
			opacity: 0,
			x: -1000,
			ease: 'power4',
		});
		tl.from('.anB', {
			duration: delay / 2,
			opacity: 0,
			y: -100,
			stagger: stagger,
			ease: 'bounce',
		});
		tl.from('.anSub', {
			duration: delay / 2,
			opacity: 0,
			y: -100,
			ease: 'bounce',
		});
		tl.from('.anC', {
			y: -100,
			duration: delay,
			opacity: 0,
			ease: 'power3',
		});

		return function () {
			tl.kill();
		};
	});

	return (
		<AboutWPDiv>
			<div classname="triggerAbout" />
			<ShowCaseCon id="About">
				<AboutTitle>
					<div className="anName">
						<ShowH1>Hi, I'm Rick Gove</ShowH1>
					</div>
				</AboutTitle>
				<div className="anB">
					<ShowImg src={meA}></ShowImg>
				</div>
				<ShowSubhead className="anSub">Junior Web Developer</ShowSubhead>
				<div>
					<FindOutMore />
					<MoreInfo />
				</div>
			</ShowCaseCon>
		</AboutWPDiv>
	);
}

export default ShowCase;
