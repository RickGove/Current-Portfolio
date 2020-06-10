import React from 'react';
import { Container } from './GlobalStyle';
import SubsForm from './SubsForm';
import { NewsCon, NewsH1 } from './NewsStyle';

function Newsletter() {
	return (
		<NewsCon>
			<Container>
				<NewsH1>
					Subscribe to our Newsletter
					<SubsForm />
				</NewsH1>
			</Container>
		</NewsCon>
	);
}

export default Newsletter;
