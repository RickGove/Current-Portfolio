import React from 'react';
import { Button1, Container } from './GlobalStyle';
import { NewsForm, NewsInpEmail } from './NewsStyle';

class SubsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert(`Submission: ${this.state.value}`);
		event.preventDefault();
	}

	render() {
		return (
			<Container>
				<NewsForm onSubmit={this.handleSubmit}>
					<label>
						Email Address:
						<NewsInpEmail
							type="email"
							placeholder="Enter E-mail Address..."
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<Button1 type="submit" value="Submit">
						Subscribe
					</Button1>
				</NewsForm>
			</Container>
		);
	}
}

export default SubsForm;
