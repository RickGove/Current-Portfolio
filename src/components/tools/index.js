import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Container } from '../GlobalStyle';

import {
	Box,
	BoxImg,
	BoxCon,
	BoxGrid,
	H3Box,
	PBox,
	ToolsTitle,
} from './ToolsStyle';

import { tools } from '../data/Data';

import { ShowH1 } from '../about/AboutStyle';

import logoTool from '../../img/logo_tools.png';

export default function Boxes() {
	const anTool = useRef(),
		anTitleTools = useRef(),
		triggerTools = useRef(),
		toolsTriggerEnd = useRef();

	useEffect(() => {
		const stTools = {
			trigger: triggerTools.current,
			start: 'top 50%',
			end: 'bottom 60%',
			endTrigger: toolsTriggerEnd.current,
			toggleActions: 'play reverse play reverse',
		};
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(anTool.current, {
			opacity: 0,
			scale: 0,
			stagger: 0.4,
			duration: 1.5,
			ease: 'slow',
			scrollTrigger: stTools,
		});
		gsap.from(anTitleTools.current, {
			opacity: 0,
			scale: 0,
			ease: 'power4',
			duration: 2,
			scrollTrigger: stTools,
		});
	}, []);

	function renderTools() {
		const colors = [
			'#778beb',
			'#786fa6',
			'#303952',
			'#e15f41',
			'#596275',
			'#f5cd79',
		];
		return tools.map((tool) => {
			let last = '';
			let randomColor = colors[Math.round(Math.random() * (colors.length - 1))];
			if (last === randomColor) {
				randomColor = colors[Math.round(Math.random() * (colors.length - 1))];
			} else {
				last = randomColor;
			}
			return (
				<Box key={tool.name} bg={randomColor} id={tool.name}>
					<BoxImg src={tool.logo} />
					<H3Box>{tool.name}</H3Box>
					<PBox>{tool.Description}</PBox>
				</Box>
			);
		});
	}

	return (
		<BoxCon id="Tools">
			<div ref={triggerTools} />
			<Container>
				<ToolsTitle>
					<ShowH1 col="black">
						<div ref={anTitleTools} className="anTitleTools">
							<BoxImg src={logoTool} r="30px" sz="45px" />
							Tools
						</div>
					</ShowH1>
				</ToolsTitle>

				<BoxGrid ref={anTool} className="anTool" id="BoxGrid">
					{renderTools()}
				</BoxGrid>
				<div ref={toolsTriggerEnd} className="toolsTriggerEnd" />
			</Container>
		</BoxCon>
	);
}
