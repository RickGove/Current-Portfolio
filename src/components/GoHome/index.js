import React from 'react';

import { GoHomeDiv } from './style';

import home from '../../img/icon.png';

export default function GoHome() {
	return (
		<div>
			<GoHomeDiv>
				<div>
					<a href="/#">
						<img src={home} alt="go home" />
					</a>
				</div>
			</GoHomeDiv>
		</div>
	);
}
