import React from 'react';

import { LandingDiv } from './style';

export default function LandingPage() {
	return (
		<LandingDiv>
			<div className="wrap">
				<div className="titles">
					<h1>MAKE RECIPES GREAT AGAIN</h1>
					<h2>FIND TASTY DISHES</h2>
					<h2>CREATE SHOPPING LISTS</h2>
					<h2>SAVE RECIPES</h2>
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
							nutritious recipes, guy. MRGA!”
						</h3>
						<h4>- Han Kim</h4>
					</div>
				</div>
			</div>
		</LandingDiv>
	);
}
