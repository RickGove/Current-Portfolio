import React from 'react';
import { ScrollBtn, ScrollBtnDiv } from './ScrollStyle';
import top from '../../img/scrollTop.png';

class ScrollToTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visible: 'none' }; //none is invisible (display:none)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollListen);
	}
	scrollListen = () => {
		let scroll = document.body.scrollTop || document.documentElement.scrollTop;

		if (scroll > 600) {
			this.setState({ visible: 'block' });
		} else {
			this.setState({ visible: 'none' });
		}
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollListen);
	}
	ScrollTop() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}
	render() {
		return (
			<ScrollBtnDiv vis={this.state.visible} onClick={this.ScrollTop}>
				<ScrollBtn src={top} />
			</ScrollBtnDiv>
		);
	}
}

export default ScrollToTop;
