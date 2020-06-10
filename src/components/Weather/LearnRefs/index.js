import React from 'react';

class LearnRefs extends React.Component {
	constructor(props) {
		super(props);
		this.text = React.createRef();
	}

	logChange = () => {
		console.log(this.text.current.value);
	};

	render() {
		return <input ref={this.text} onChange={this.logChange} />;
	}
}

export default LearnRefs;
