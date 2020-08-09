import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const SectionWipes2Styled = styled.div`
	overflow: hidden;
	#pinContainer {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#pinContainer .panel {
		display: flex;
		height: 100vh;
		width: 100vw;
		position: absolute;
		justify-content: center;
	}
	.panel span {
		font-family: 'Playfair Display', serif;
		position: relative;
		display: block;
		top: 40%;
		font-size: 80px;
	}

	.panel.blue {
		background-color: #3883d8;
	}

	.panel.turqoise {
		background-color: #38ced7;
	}

	.panel.green {
		background-color: grey;
	}

	.panel.bordeaux {
		background-color: white;
	}
`;

const SectionWipes2 = () => (
	<SectionWipes2Styled>
		<Controller>
			<Scene triggerHook="onLeave" duration="300%" pin>
				<Timeline wrapper={<div id="pinContainer" />}>
					<section className="panel blue">
						<span>Professional</span>
					</section>
					<Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
						<section className="panel turqoise">
							<span>Reliable</span>
						</section>
					</Tween>
					<Tween from={{ x: '100%' }} to={{ x: '0%' }}>
						<section className="panel green">
							<span>Hard-Working</span>
						</section>
					</Tween>
					<Tween from={{ y: '-100%' }} to={{ y: '0%' }}>
						<section className="panel bordeaux">
							<span>Team Player</span>
						</section>
					</Tween>
				</Timeline>
			</Scene>
		</Controller>
	</SectionWipes2Styled>
);

export default SectionWipes2;
