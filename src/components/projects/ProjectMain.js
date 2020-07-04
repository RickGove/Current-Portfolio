import React from 'react';
import {
	AlternatingColorCon,
	ProjectsToolsImg,
	ProjectsToolsSide,
	ProjectsIndCon,
	ProjectsMain,
	ProjectsDesc,
	ProjectsTitleCon,
	ToolsUsedImg,
} from './ProjectsStyle';
import { ShowH1 } from '../about/AboutStyle';
import { projects } from '../data/Data'; //name, description, tools
import toolsUsed from '../../img/logo_toolsUsed.png';

class ProjectMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bg: 'orange' };
	}

	renderIcons(tool) {
		return tool.map((logo) => {
			let random = Math.random();
			let key = `${logo} ${random}`;
			return <ProjectsToolsImg key={key} src={logo} />;
		});
	}

	renderBgColor(index) {
		if (index % 2 === 0) {
			// Even + 0
			return '#f4f4f4';
		} else {
			// odd
			return '##35424a';
		}
	}

	renderFontColor(index) {
		if (index % 2 === 0) {
			// Even + 0
			return 'black';
		} else {
			// odd
			return 'white';
		}
	}

	renderProjectDesc(pro) {
		console.log(pro);
		return pro.description.map((item, i) => {
			return <p>{pro.description[i]}</p>;
		});
	}
	renderProjects = () => {
		return projects.map((pro, i) => {
			let random = Math.random();
			let key = `${pro.name} ${random}`;
			return (
				<div key={key}>
					<AlternatingColorCon id="AltColorCon" bgCol={this.renderBgColor(i)}>
						<a href={pro.link} style={{ textDecoration: 'none' }}>
							<ProjectsTitleCon id={pro.name}>
								<ShowH1 col={this.renderFontColor(i)}>{pro.name}</ShowH1>
							</ProjectsTitleCon>
						</a>

						<ProjectsIndCon>
							<ProjectsToolsSide>
								<>
									<ToolsUsedImg src={toolsUsed} />
								</>
								<>{this.renderIcons(pro.tools)}</>
							</ProjectsToolsSide>
							<ProjectsMain id="ProjectsMain">
								<ProjectsDesc col={this.renderFontColor(i)}>
									{this.renderProjectDesc(pro)}
								</ProjectsDesc>
							</ProjectsMain>
							<div></div>
						</ProjectsIndCon>
					</AlternatingColorCon>
				</div>
			);
		});
	};

	render() {
		return <>{this.renderProjects()}</>;
	}
}

export default ProjectMain;
