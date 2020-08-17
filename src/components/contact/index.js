import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { ContactCon, ContactDiv, ContactA, EmailImg } from './ContactStyle';
import { ShowH1 } from '../about/AboutStyle';
import email from '../../img/logo_email.png';
import linked from '../../img/logo_linked.png';
import leet from '../../img/logo_leet.png';
import logoGit from '../../img/logo_github.png';
import twitter from '../../img/logo_twitter.png';

export default function Contact() {
	const anImgRef = useRef([]),
		triggerRef = useRef(),
		anTitleContRef = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(anImgRef.current, {
			opacity: 0,
			x: -1000,
			top: -500,
			stagger: 0.2,
			duration: 2,
			rotate: 360,
			ease: 'power4',
			scrollTrigger: {
				trigger: triggerRef.current,
				start: 'top 50%',
				end: '83% 50%',
				toggleActions: 'play reverse play reverse',
			},
		});
		gsap.from(anTitleContRef.current, {
			opacity: 0,
			x: -1000,
			duration: 3,
			ease: 'power4',
			scrollTrigger: {
				trigger: triggerRef.current,
				start: 'top 50%',
				end: '83% 50%',
				toggleActions: 'play reverse play reverse',
			},
		});
	}, [anImgRef, triggerRef, anTitleContRef]);

	return (
		<ContactCon id="Contact">
			<div ref={triggerRef} className="trigger" />
			<ContactDiv>
				<div ref={anTitleContRef} className="anTitleCont">
					<ShowH1 col="white">Contact Me</ShowH1>
					<br />
				</div>
				<div ref={(ref) => anImgRef.current.push(ref)} className="anImg">
					<ContactA href="https://github.com/RickGove">
						<EmailImg src={logoGit} />
					</ContactA>
				</div>
				<div ref={(ref) => anImgRef.current.push(ref)} className="anImg">
					<ContactA href="https://leetcode.com/rickbgove/">
						<EmailImg src={leet} />
					</ContactA>
				</div>
				<div ref={(ref) => anImgRef.current.push(ref)} className="anImg">
					<ContactA href="mailto:rick.gove.developer@gmail.com">
						<EmailImg src={email} />
					</ContactA>
				</div>
				<div ref={(ref) => anImgRef.current.push(ref)} className="anImg">
					<ContactA href="http://www.linkedin.com/in/richard-gove-developer">
						<EmailImg src={linked} />
					</ContactA>
				</div>
				<div ref={(ref) => anImgRef.current.push(ref)} className="anImg">
					<ContactA href="https://twitter.com/@gove_rick">
						<EmailImg src={twitter} />
					</ContactA>
				</div>
			</ContactDiv>
		</ContactCon>
	);
}
