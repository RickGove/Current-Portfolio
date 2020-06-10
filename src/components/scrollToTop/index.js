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
		////////////// Tetsing //////////////////////////////
		// console.log(
		// 	`Shooter scroll: ${scroll}, state.visible: ${this.state.visible}`
		// );
		////////////////////////////////////////////////////
		if (scroll > 600) {
			this.setState({ visible: 'block' });
		} else {
			this.setState({ visible: 'none' });
		}
	};
	ScrollTop() {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		// let elm;
		// elm = document.getElementById('Projects');

		// elm.scrollIntoView({
		// 	behavior: 'smooth',
		// 	block: 'start',
		// 	inline: 'nearest',
		// });
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
