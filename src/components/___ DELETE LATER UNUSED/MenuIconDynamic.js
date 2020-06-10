import React from 'react';
import './MenuIconDynamic.css';

import menuLogo from 'C:/Users/rickb/Desktop/Coding/portfolio/diceGame/dicegame/src/img/menuIcon.png';
import myLogo from 'C:/Users/rickb/Desktop/Coding/portfolio/diceGame/dicegame/src/img/icon.png';

class MenuIconDynamic extends React.Component {
	render = () => {
		return (
			<div className="container">
				<img src={menuLogo} alt="Avatar" className="image"></img>
				<div className="overlay">
					<img src={myLogo} alt="Avatar" className="image"></img>
				</div>
			</div>
		);
	};
}

export default MenuIconDynamic;
