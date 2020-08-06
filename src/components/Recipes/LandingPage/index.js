import React, { useEffect } from 'react';

import { gsap } from 'gsap';

import { LandingDiv } from './style';

export default function LandingPage() {
	useEffect(() => {
		const delay = 2;
		const stagger = 1;
		const tl = gsap.timeline();
		tl.from('.main', {
			duration: delay,
			opacity: 0,
			x: 100,
			y: 100,
			stagger: stagger,
			ease: 'power4',
		});
		tl.from('.quotes__quote', {
			duration: delay,
			opacity: 0,
			y: -60,
			stagger: stagger,
			ease: 'power4',
		});

		return function () {
			tl.kill();
		};
	});
	return (
		<LandingDiv>
			<div className="wrap">
				<div className="titles main">
					<h1 className="main">RECIPES MADE EASY</h1>
					<h2 className="main">FIND TASTY DISHES</h2>
					<h2 className="main">CREATE SHOPPING LISTS</h2>
					<h2 className="main">SAVE RECIPES</h2>
				</div>
				<div className="quotes">
					<div className="quotes__quote">
						<h3>
							“ The only app I will ever use for recipes again. It does
							everything!”
						</h3>
						<h4>- Anastacia Korotkevich</h4>
					</div>
					<div className="quotes__quote">
						<h3>
							“ it makes finding a recipe, creating a shopping list and coming
							back to make it a snap!”
						</h3>
						<h4>- Brian McNulty</h4>
					</div>
					<div className="quotes__quote">
						<h3>
							“ I just search whatever I have in my fridge and find delicious
							nutritious recipes.”
						</h3>
						<h4>- Han Kim</h4>
					</div>
				</div>
			</div>
		</LandingDiv>
	);
}
