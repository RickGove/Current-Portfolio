import React from 'react';
import { Container } from '../GlobalStyle';
import { ProjectsCon, ProjectsTitleCard } from './ProjectsStyle.js';
import ProjectMain from './ProjectMain';
import { ShowH1 } from '../about/AboutStyle';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.proRef = React.createRef();
	}

	render() {
		return (
			<ProjectsCon id="Projects">
				<Container>
					<ProjectsTitleCard>
						<ShowH1 col="white">Projects</ShowH1>
					</ProjectsTitleCard>
				</Container>
				<ProjectMain />
			</ProjectsCon>
		);
	}
}

export default Projects;
