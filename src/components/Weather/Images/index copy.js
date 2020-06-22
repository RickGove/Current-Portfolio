import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {
	searchedWeatherData,
	imageSearchHasBeenDoneFN,
	showImages,
} from '../../../actions';

import { ImagesDiv, Modal } from './style';
import names from '../../../json/twoToName.json';

import next from '../img/next.png';
import prev from '../img/prev.png';

class Images extends React.Component {
	constructor(props) {
		super(props);

		this.imageRefArr = [];
		this.imageRef = React.createRef();
		this.imagesDiv = React.createRef();

		this.modal = React.createRef();
		this.next = React.createRef();
		this.prev = React.createRef();

		this.state = {
			images: {},

			firstImage: 0,
			showNext: false,
			showPrev: false,
			showModal: false,
			modalImage: '',
			modalImageIndex: null,
			modalImageUser: '',
			modalImageAvatar: '',
		};
	}

	componentDidMount() {}

	loadImages = (from) => {
		if (from === 'data') {
			if (this.props.searchLocation.data !== undefined) {
				let data = this.props.searchLocation.data;
				let count = data.sys.country;
				let countryName = this.convert2toFull(count); // Canada
				let cityName = data.name; // Red Deer
				this.searchImages(cityName, countryName);
				return <div>load images from data</div>;
			}
		} else {
			let city = this.props.location[0];
			let country = this.props.location[2];
			country = this.convert2toFull(country);
			this.searchImages(city, country);
		}
	};

	async searchImages(city, country) {
		if (this.props.imageSearchDone === true) {
		} else if (this.props.imageSearchDone === false) {
			console.log('axios called city');
			const response = await axios.get(
				'https://api.unsplash.com/search/photos',
				{
					params: { query: city, orientation: 'landscape' },
					headers: {
						Authorization:
							'Client-ID SSXPrsRuHu6aoF0rSMsUJ7HHWCpV6UkYMaXtjRiv5xQ',
					},
				}
			);

			if (response.data.total !== 0) {
				this.initImages(response);
				this.props.imageSearchHasBeenDoneFN(true);
				// see if there is no images, search by country
			} else {
				console.log('axios called country');

				const response = await axios.get(
					'https://api.unsplash.com/search/photos',
					{
						params: {
							query: country,
							orientation: 'landscape',
						},
						headers: {
							Authorization:
								'Client-ID SSXPrsRuHu6aoF0rSMsUJ7HHWCpV6UkYMaXtjRiv5xQ',
						},
					}
				);
				if (response.data.total !== 0) {
					this.initImages(response);
					this.props.imageSearchHasBeenDoneFN(true);
				}
			}
		}
	}

	initImages(response) {
		this.setState({ images: response });
		this.setState({ showNext: true });
		this.props.imageSearchHasBeenDoneFN(true);
		this.setState({ firstImage: 0 });
		this.setState({ showPrev: false });
	}

	convert2toFull(count) {
		let x = Object.entries(names);
		for (let i = 0; i < x.length; i++) {
			if (count === x[i][0]) {
				return x[i][1];
			}
		}
	}

	getImages = () => {
		let data = this.props.searchWeatherData;
		let location = this.props.location;
		if (data !== 'none') {
			this.loadImages('data');
		} else if (location[0] !== '') {
			this.loadImages('location');
		} else {
			return <div>no location data</div>;
		}
	};

	renderImages = () => {
		// load images to state
		if (this.props.imageSearchDone === false) {
			this.getImages();
		} else {
			console.log('search prevented!!!');
		}

		//
		let images = this.state.images;
		if (images.data !== undefined) {
			let firstImage = this.state.firstImage;
			let imgArr = [
				images.data.results[firstImage],
				images.data.results[firstImage + 1],
				images.data.results[firstImage + 2],
				images.data.results[firstImage + 3],
			];

			return imgArr.map((i, item) => {
				if (i !== undefined) {
					return (
						<div
							className={
								this.state.showModal
									? 'image-container-no-animation'
									: 'image-container-individual'
							}
							onClick={this.handleImageClick}
							key={item}>
							<img
								ref={(imageRefArr) => (this.imageRefArr[item] = imageRefArr)}
								className="image__preview"
								username={i.user.name}
								avatar={i.user.profile_image.medium}
								src={i.urls.regular}
							/>
							<span className="image__taker">
								<img className="user-image" src={i.user.profile_image.large} />{' '}
								{i.user.name}
							</span>
						</div>
					);
				}
			});
		}
	};

	handleImageClick = (i) => {
		this.setState({ modalImageUser: i.target.attributes.username });
		this.setState({ modalImageAvatar: i.target.attributes.avatar });
		this.showModal(i.target.src);
	};

	/////////////////////////////////////////////
	////// modal stuff /////

	showModal = (url) => {
		this.prev.current.style.display = 'none';
		this.next.current.style.display = 'none';
		this.setState({ showModal: true });
		this.setState({ modalImage: url });
	};

	hideModal = () => {
		this.setState({ showModal: false });
		window.setTimeout(() => {
			this.setState({ modalImage: '' });
			this.modal.current.style.display = 'none';
			this.prev.current.style.display = 'inline';
			this.next.current.style.display = 'inline';
		}, 1000);
		window.setTimeout(() => {
			this.modal.current.style.display = 'grid';
			this.setState({ modalImage: '' });
		}, 1000);
	};

	keyDown = (i) => {
		if (i.code === 'Escape' && this.state.showModal === true) {
			this.hideModal();
		}
	};

	renderModalImage() {
		return (
			<img
				className="image-image"
				src={this.state.modalImage}
				alt="Unsplash Image"
			/>
		);
	}

	renderModalUsername = () => {
		return (
			<div className="user-name-and-avatar">
				<span>
					<img
						className="user-name-and-avatar__avatar"
						src={this.state.modalImageAvatar.value}
					/>{' '}
					{this.state.modalImageUser.value}
				</span>
			</div>
		);
	};

	////// end modal ////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	renderUnsplashNotice() {
		if (this.state.images.data !== undefined) {
			return (
				<div className="unsplash-notice">
					<a href="https://unsplash.com/">
						Images courtesy of Unsplash{' '}
						<img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/21/63/db/2163db41-fede-7076-7478-e6adedb7eb0e/AppIcon-85-220-0-4-2x.png/1200x630bb.png" />{' '}
					</a>
				</div>
			);
		}
	}

	renderNextButton() {
		if (this.state.images.data !== undefined) {
			return (
				<img
					src={next}
					className={this.state.showNext ? 'next-image' : 'next-image inactive'}
					alt="next images"
					onClick={this.showNext}
					ref={this.next}
				/>
			);
		} else return;
	}

	showNext = () => {
		let images = this.state.images.data.results;
		let first = this.state.firstImage;
		if (images !== undefined) {
			//show previous button
			this.setState({ showPrev: true });

			// set the first image to be #4 (second page)
			let newFirst = first + 4;

			if (newFirst < images.length) {
				this.setState({ firstImage: newFirst });

				// determine whether to show or hide next button
				if (images.length > newFirst + 3) {
					this.setState({ showNext: true });
				} else {
					this.setState({ showNext: false });
				}
			}
		} else {
		}
	};

	renderPrevButton() {
		if (this.state.images.data !== undefined) {
			return (
				<img
					src={prev}
					className={this.state.showPrev ? 'prev-image' : 'prev-image inactive'}
					alt="next images"
					onClick={this.showPrev}
					ref={this.prev}
				/>
			);
		} else return;
	}

	showPrev = () => {
		//show previous button
		this.setState({ showNext: true });

		// set first image back 4 (prev page)
		let images = this.state.images.data.results;
		let first = this.state.firstImage;
		if (images !== undefined) {
			let newFirst = first - 4;
			if (newFirst >= 0) {
				this.setState({ firstImage: newFirst });

				// determine whether to show or hide prev button
				if (newFirst !== 0) {
					this.setState({ showPrev: true });
				} else {
					this.setState({ showPrev: false });
				}
			}
		} else {
			this.setState({ firstImage: 0 });
			this.setState({ showPrev: false });
		}
	};

	render() {
		return (
			<React.Fragment>
				<ImagesDiv>
					<div id="main" ref={this.imagesDiv} className="hide-main">
						<div className="title">Images</div>
						<div className="images-grid">{this.renderImages()}</div>
						{this.renderUnsplashNotice()}
						<div ref={this.navButtons} className="next-and-prev">
							{this.renderPrevButton()}
							{this.renderNextButton()}
						</div>
					</div>
				</ImagesDiv>
				<Modal>
					<div
						ref={this.modal}
						className={this.state.showModal ? 'modal' : 'hide-modal'}>
						<span className="huge-x" onClick={this.hideModal}>
							X
						</span>

						{this.renderModalUsername()}
						<div className="image">{this.renderModalImage()}</div>
					</div>
				</Modal>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		location: state.location,
		searchedWeatherData: state.searchedWeatherData,
		searchWeatherData: state.searchWeatherData,
		fullSearchName: state.fullSearchName,
		searchLocation: state.searchedLocation,
		imageSearchDone: state.imageSearchDone,
		imageSearchHasBeenDoneFN: state.imageSearchHasBeenDoneFN,
		errorInSearch: state.errorInSearch,
		hideOrShow: state.hideOrShow,
		shouldShowImages: state.shouldShowImages,
	};
};

export default connect(mapStateToProps, {
	searchedWeatherData,
	imageSearchHasBeenDoneFN,
	showImages,
})(Images);
