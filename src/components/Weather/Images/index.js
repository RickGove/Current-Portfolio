import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import {
	searchedWeatherData,
	imageSearchHasBeenDoneFN,
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
		this.modal = React.createRef();
		this.next = React.createRef();
		this.prev = React.createRef();

		this.state = {
			images: {},
			organizedUrls: [],
			organizedImageTakers: [],
			organizedTakerAvatars: [],
			organizedIds: [],
			organizedLinks: [],
			organizedLinksToTaker: [],
			firstImage: 0,
			showNext: false,
			showPrev: false,
			showModal: false,
			modalImage: '',
			modalImageIndex: null,
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.keyDown);
	}

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

	organizeImages = (resp) => {
		if (this.state.organizedUrls !== []) {
			let oUrl = [],
				oIT = [],
				oTA = [],
				oID = [],
				oLI = [],
				oLIT = [];
			console.log('organizeImages fired');
			if (this.state.images.data != undefined) {
				for (let i = 0; i < resp.data.results.length; i++) {
					oUrl.push(resp.data.results[i].urls.regular);
					oIT.push(resp.data.results[i].user.name);
					oTA.push(resp.data.results[i].user.profile_image.medium);
					oID.push(resp.data.results[i].id);
					oLI.push(resp.data.results[i].user.links.html);
					oLIT.push(resp.data.results[i].links.html);
				}
				this.setState({ organizedUrls: oUrl });
				this.setState({ organizedImageTakers: oIT });
				this.setState({ organizedTakerAvatars: oTA });
				this.setState({ organizedIds: oID });
				this.setState({ organizedLinks: oLIT });
				this.setState({ organizedLinksToTaker: oLIT });
			}
		} else {
			console.log('organzie images prevented');
		}
	};

	clearOrganizedImages() {
		console.log('image organzieation remvoed');
		this.setState({ organizedUrls: [] });
		this.setState({ organizedImageTakers: [] });
		this.setState({ organizedTakerAvatars: [] });
		this.setState({ organizedIds: [] });
		this.setState({ organizedLinks: [] });
		this.setState({ organizedLinksToTaker: [] });
	}

	async searchImages(city, country) {
		if (this.props.imageSearchDone === true) {
		} else if (this.props.imageSearchDone === false) {
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
				this.setState({ images: response });
				this.clearOrganizedImages();
				this.organizeImages(response);
				this.setState({ showNext: true });
				this.props.imageSearchHasBeenDoneFN(true);
				// see if there is no images, search by country
			} else {
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
					this.setState({ images: response });
					this.clearOrganizedImages();
					this.organizeImages(response);
					this.props.imageSearchHasBeenDoneFN(true);
					this.setState({ showNext: true });
				}
			}
		}
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
		this.getImages();

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
		let userName, userAvatar;

		if (this.state.modalImage === '') {
			return;
		} else {
			let organizedUrls = this.state.organizedUrls;
			let modalImage = this.state.modalImage;
			organizedUrls.map((i, index) => {
				if (modalImage === organizedUrls[index]) {
					// match the image url to the one in state, get user id and image from there
					userName = this.state.organizedImageTakers[index];
					userAvatar = this.state.organizedTakerAvatars[index];
				} else {
				}
			});
		}

		return (
			<div className="user-name-and-avatar">
				<span>
					<img className="user-name-and-avatar__avatar" src={userAvatar} />{' '}
					{userName}
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
					<div className="title">Images</div>
					<div className="images-grid">{this.renderImages()}</div>
					{this.renderUnsplashNotice()}
					<div ref={this.navButtons} className="next-and-prev">
						{this.renderPrevButton()}
						{this.renderNextButton()}
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
	};
};

export default connect(mapStateToProps, {
	searchedWeatherData,
	imageSearchHasBeenDoneFN,
})(Images);
