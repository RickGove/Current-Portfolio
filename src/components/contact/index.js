import React, { useEffect } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ContactCon, ContactDiv, ContactA, EmailImg } from './ContactStyle';
import { ShowH1 } from '../about/AboutStyle';
import email from '../../img/logo_email.png';
import linked from '../../img/logo_linked.png';
import leet from '../../img/logo_leet.png';
import logoGit from '../../img/logo_github.png';
// import facebook from '../../img/logo_facebook.png';
import twitter from '../../img/logo_twitter.png';

export default function () {
	const st = {
		trigger: '.trigger',
		start: 'top 50%',
		end: 'bottom 50%',
		toggleActions: 'play reverse play reverse',
	};

	useEffect(() => {
		window.addEventListener('scroll', checkIfViewed);
		checkIfViewed();
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('.anImg', {
			opacity: 0,
			x: -1000,
			top: -500,
			endTrigger: 200,
			stagger: 0.2,
			duration: 1.5,
			rotate: 360,
			ease: 'power4',
			scrollTrigger: st,
		});
		gsap.from('.anTitleCont', {
			opacity: 0,
			x: -1000,
			duration: 1,
			ease: 'power4',
			scrollTrigger: st,
		});
	});

	function checkIfViewed() {
		// Get the current component

		let comp = document.getElementById('Contact');
		if (comp !== null) {
			// Get it's position in the viewport

			let bounding = comp.getBoundingClientRect();

			if (bounding.top <= 0 && bounding.top >= ~bounding.height) {
			} else {
			}
		}
	}

	return (
		<ContactCon id="Contact">
			<div className="trigger" />
			<ContactDiv>
				<div className="anTitleCont">
					<ShowH1 col="white">Contact Me</ShowH1>
					<br />
				</div>
				<div className="anImg">
					<ContactA href="https://github.com/RickGove">
						<EmailImg src={logoGit} />
					</ContactA>
				</div>
				<div className="anImg">
					<ContactA href="https://leetcode.com/rickbgove/">
						<EmailImg src={leet} />
					</ContactA>
				</div>
				<div className="anImg">
					<ContactA href="mailto:rick.gove.developer@gmail.com">
						<EmailImg src={email} />
					</ContactA>
				</div>
				<div className="anImg">
					<ContactA href="http://www.linkedin.com/in/richard-gove-developer">
						<EmailImg src={linked} />
					</ContactA>
				</div>

				{/* 
				<div className="anImg">
				
				<ContactA href="FaceBook">
						<EmailImg src={facebook} />
					</ContactA> 
					</div> */}
				<div className="anImg">
					<ContactA href="https://twitter.com/@gove_rick">
						<EmailImg src={twitter} />
					</ContactA>
				</div>
			</ContactDiv>
		</ContactCon>
	);
}
