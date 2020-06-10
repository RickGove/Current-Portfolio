import React from 'react';
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

class Boxes extends React.Component {
	renderTools() {
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

	render() {
		return (
			<BoxCon id="Tools">
				<Container>
					<ToolsTitle>
						<ShowH1 col="black">
							<BoxImg src={logoTool} r="30px" sz="45px" />
							Tools
						</ShowH1>
					</ToolsTitle>
					<BoxGrid id="BoxGrid">{this.renderTools()}</BoxGrid>
				</Container>
			</BoxCon>
		);
	}
}

export default Boxes;
