import React from 'react';

class HeaderDeterminerW extends React.Component {
	constructor(props) {
		super(props);
		this.state = { anchor: 0, active: '' };
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			this.chooseHeader();
			this.findActiveSection();
		});
	}

	chooseHeader = () => {
		let scroll = document.body.scrollTop || document.documentElement.scrollTop;

		if (scroll >= 150) {
			this.setState({ anchor: 1 });
		} else {
			this.setState({ anchor: 0 });
		}
	};

	render() {
		if (this.state.anchor === 0) {
			return <HeaderW active={this.state.active} />;
		} else {
			return <HeaderFloatW active={this.state.active} />;
		}
	}
}

export default HeaderDeterminerW;
