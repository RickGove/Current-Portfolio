import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import nextImg from '../img/next.png';
import prevImg from '../img/prev.png';

import { ImagesDiv, Modal } from './style';

function Images() {
	// refs
	const imageRefArr = useRef([]);
	const imageRef = useRef();
	const imagesDiv = useRef();

	const modal = useRef();
	const next = useRef();
	const prev = useRef();
	const navButtons = useRef();
	// state

	const [images, setImages] = useState({});
	const [canSearch, setCanSearch] = useState(true);
	const [firstImage, setFirstImage] = useState(0);
	const [showNext, setShowNext] = useState(true);
	const [showPrev, setShowPrev] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [modalImageIndex, setModalImageIndex] = useState(null);
	const [modalImageUser, setModalImageUser] = useState('');
	const [modalImageAvatar, setModalImageAvatar] = useState('');

	// redux

	const location = useSelector((state) => state.location);
	const searchedWeatherData = useSelector((state) => state.searchedWeatherData);
	const searchWeatherData = useSelector((state) => state.searchWeatherData);
	const fullSearchName = useSelector((state) => state.fullSearchName);
	const searchLocation = useSelector((state) => state.searchedLocation);
	const imageSearchDone = useSelector((state) => state.imageSearchDone);
	const imagesFound = useSelector((state) => state.imagesFound);

	const errorInSearch = useSelector((state) => state.errorInSearch);
	const hideOrShow = useSelector((state) => state.hideOrShow);
	const shouldShowImages = useSelector((state) => state.shouldShowImages);

	function initImages() {
		setShowNext(true);
		setShowPrev(false);
		setFirstImage(0);
		setImages(imagesFound);
	}

	useEffect(() => {
		if (imagesFound !== images) {
			console.log('NEW IAMGES!!!');
			initImages();
		}
	});

	function renderImages() {
		if (images.data !== undefined) {
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
								showModal
									? 'image-container-no-animation'
									: 'image-container-individual'
							}
							onClick={handleImageClick}
							key={item}>
							<img
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
	}

	function handleImageClick(i) {
		setModalImageUser(i.target.attributes.username);
		setModalImageAvatar(i.target.attributes.avatar);
		displayModal(i.target.src);
	}

	/////////////////////////////////////////////
	////// modal stuff /////

	function displayModal(url) {
		prev.current.style.display = 'none';
		next.current.style.display = 'none';
		setShowModal(true);
		setModalImage(url);
	}

	function hideModal() {
		setShowModal(false);
		window.setTimeout(() => {
			setModalImage('');
			modal.current.style.display = 'none';
			prev.current.style.display = 'inline';
			next.current.style.display = 'inline';
		}, 1000);
		window.setTimeout(() => {
			modal.current.style.display = 'grid';
			setModalImage('');
		}, 1000);
	}

	function keyDown(i) {
		if (i.code === 'Escape' && showModal === true) {
			hideModal();
		}
	}

	function renderModalImage() {
		return (
			<img className="image-image" src={modalImage} alt="Unsplash Image" />
		);
	}

	function renderModalUsername() {
		return (
			<div className="user-name-and-avatar">
				<span>
					<img
						className="user-name-and-avatar__avatar"
						src={modalImageAvatar.value}
					/>{' '}
					{modalImageUser.value}
				</span>
			</div>
		);
	}

	////// end modal ////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function renderUnsplashNotice() {
		return (
			<div className="unsplash-notice">
				<a href="https://unsplash.com/">
					Images courtesy of Unsplash{' '}
					<img src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/21/63/db/2163db41-fede-7076-7478-e6adedb7eb0e/AppIcon-85-220-0-4-2x.png/1200x630bb.png" />{' '}
				</a>
			</div>
		);
	}

	function renderNextButton() {
		return (
			<img
				src={nextImg}
				className={showNext ? 'next-image' : 'next-image inactive'}
				alt="next images"
				onClick={displayNext}
				ref={next}
			/>
		);
	}

	function displayNext() {
		let imagesR = images.data.results;
		let first = firstImage;
		if (imagesR !== undefined) {
			//show previous button
			setShowPrev(true);

			// set the first image to be #4 (second page)
			let newFirst = first + 4;

			if (newFirst < imagesR.length) {
				setFirstImage(newFirst);

				// determine whether to show or hide next button
				if (imagesR.length > newFirst + 3) {
					setShowNext(true);
				} else {
					setShowNext(false);
				}
			}
		} else {
		}
	}

	function renderPrevButton() {
		return (
			<img
				src={prevImg}
				className={showPrev ? 'prev-image' : 'prev-image inactive'}
				alt="prev image"
				onClick={displayPrev}
				ref={prev}
			/>
		);
	}

	function displayPrev() {
		//show previous button
		setShowNext(true);

		// set first image back 4 (prev page)
		let imagesR = images.data.results;
		let first = firstImage;
		if (imagesR !== undefined) {
			let newFirst = first - 4;
			if (newFirst >= 0) {
				setFirstImage(newFirst);

				// determine whether to show or hide prev button
				if (newFirst !== 0) {
					setShowPrev(true);
				} else {
					setShowPrev(false);
				}
			}
		} else {
			setFirstImage(0);
			setShowPrev(false);
		}
	}

	function showImages() {
		if (imagesFound !== '') {
			return (
				<React.Fragment>
					<ImagesDiv>
						<div id="main" ref={imagesDiv}>
							<div className="title">Images</div>
							<div className="images-grid">{renderImages()}</div>
							{renderUnsplashNotice()}
							<div ref={navButtons} className="next-and-prev">
								{renderPrevButton()}
								{renderNextButton()}
							</div>
						</div>
					</ImagesDiv>
					<Modal>
						{' '}
						<div ref={modal} className={showModal ? 'modal' : 'hide-modal'}>
							{' '}
							<span className="huge-x" onClick={hideModal}>
								X{' '}
							</span>
							{renderModalUsername()}
							<div className="image">{renderModalImage()}</div>{' '}
						</div>{' '}
					</Modal>
				</React.Fragment>
			);
		} else {
			return <React.Fragment></React.Fragment>;
		}
	}

	return showImages();

	// console.log(imagesFound);
	// // if (imagesFound !== '') {
	// // 	return (
	// // 		<React.Fragment>
	// // 			<ImagesDiv>

	// 			</ImagesDiv>
	//
	// 		</React.Fragment>
	// 	);
	// } else {
	// 	return <React.Fragment></React.Fragment>;
	// }
}

export default Images;
