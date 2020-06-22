import React from 'react';

import { ProductionWrapper } from './style/';

class ProductionWarning extends React.Component {
	constructor(props) {
		super(props);
		this.modalRef = React.createRef();
		this.checkBox = React.createRef();
	}

	date() {
		const date = '16 - June - 2020';
		const time = '19:20 UTC + 3';
		return `${date} at ${time}`;
	}

	submitWarn = () => {
		if (this.checkBox.current != null && this.checkBox.current.checked) {
			localStorage.setItem('remind', false);
		}
		this.hideModal();
	};

	hideModal = () => {
		if (this.modalRef.current != null) {
			this.modalRef.current.style.display = 'none';
		}
	};

	renderWarning = () => {
		const remind = localStorage.getItem('remind');
		if (remind) {
			this.hideModal();
			return <div></div>;
		} else {
			return (
				<ProductionWrapper ref={this.modalRef}>
					<div className="warning">
						<h1>Warning</h1>
						<h2>This website is currently in production.</h2>
						<p></p>
						<p>Current build was deployed on {this.date()}</p>

						<h4>Currently Known Bugs:</h4>
						<ul>
							<li>Search Bar Behaves Erratically</li>
							<li>Images - User Avatars remain on top of everything</li>
							<li>
								Loading - Some sections load too early, some remain when they
								shouldn't{' '}
							</li>
							<li>Site has not been optimized for responsive mobile viewing</li>
							<li>Technical:</li>
							<li>APIs may be being fetched more than once at a time</li>
							<li>Functions may be firing over and over</li>
						</ul>
						<h3>
							Please submit any bugs you may find to the developer by clicking
							the Gmail icon on the bottom left corner of your browser.
							<h3>Your help is appreciated.</h3>
						</h3>
						<button onClick={this.submitWarn}>Ok</button>
						<input type="checkbox" ref={this.checkBox} />
						<p className="understand">I understand, don't show again</p>
					</div>
				</ProductionWrapper>
			);
		}
	};

	render() {
		return this.renderWarning();
	}
}

export default ProductionWarning;
