import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import nextImg from '../img/next.png';
import prevImg from '../img/prev.png';

import { ImagesDiv, Modal } from './style';

function Images() {
	// refs
	const imagesDiv = useRef();

	const modal = useRef();
	const next = useRef();
	const prev = useRef();
	// state

	const [images, setImages] = useState({});
	const [firstImage, setFirstImage] = useState(0);
	const [showNext, setShowNext] = useState(true);
	const [showPrev, setShowPrev] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [modalUserLink, setModalUserLink] = useState('');
	const [modalImageUser, setModalImageUser] = useState('');
	const [modalImageAvatar, setModalImageAvatar] = useState('');

	// redux

	const imagesFound = useSelector((state) => state.imagesFound);

	function initImages() {
		setShowNext(true);
		setShowPrev(false);
		setFirstImage(0);
		setImages(imagesFound);
	}

	useEffect(() => {
		if (imagesFound !== images) {
			initImages();
			document.addEventListener('keydown', keyDown);
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

			return imgArr.forEach((i, item) => {
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
								alt=""
								className="image__preview"
								username={i.user.name}
								avatar={i.user.profile_image.medium}
								modaluserlink={i.user.links.html}
								src={i.urls.regular}
							/>
							<span className="image__taker">
								<img
									alt=""
									className="user-image"
									src={i.user.profile_image.large}
								/>{' '}
								{i.user.name}
							</span>
						</div>
					);
				}
			});
		}
	}

	function handleImageClick(i) {
		setModalImageUser(i.target.attributes.username.value);
		setModalImageAvatar(i.target.attributes.avatar.value);
		setModalUserLink(i.target.attributes.modaluserlink.value);
		displayModal(i.target.src);
	}

	/////////////////////////////////////////////
	////// modal stuff /////

	function displayModal(url) {
		prev.current.style.visibility = 'hidden';
		next.current.style.visibility = 'hidden';
		setShowModal(true);
		setModalImage(url);
	}

	function hideModal() {
		if (modal.current !== null) {
			setShowModal(false);
			window.setTimeout(() => {
				setModalImage('');
				if (modal.current !== undefined) {
					modal.current.style.display = 'none';

					prev.current.style.visibility = 'visible';
					next.current.style.visibility = 'visible';
				}
			}, 1000);
			window.setTimeout(() => {
				if (modal.current !== undefined) {
					modal.current.style.display = 'grid';
					setModalImage('');
				}
			}, 1000);
		}
	}

	function keyDown(i) {
		if (i.code === 'Escape') {
			hideModal();
		}
	}

	function renderModalImage() {
		return (
			<React.Fragment>
				<img
					className="image-image"
					src={modalImage}
					alt="Unsplash"
					onClick={openImageNewWindow}
				/>
			</React.Fragment>
		);
	}

	function renderModalPrev() {
		if (
			images.data !== undefined &&
			modalImage !== images.data.results[0].urls.regular
		) {
			return (
				<h3 onClick={showPrevModalImg} className="modal-prev">
					{'<<< Previous Image'}
				</h3>
			);
		} else {
			return <span></span>;
		}
	}

	function renderModalNext() {
		if (
			images.data !== undefined &&
			modalImage !==
				images.data.results[images.data.results.length - 1].urls.regular
		) {
			return (
				<h3 onClick={showNextModalImg} className="modal-next">
					{'Next Image >>>'}
				</h3>
			);
		}
	}

	function showPrevModalImg() {
		images.data.results.forEach((item, index) => {
			if (images.data.results[index - 1] !== undefined) {
				if (modalImage === images.data.results[index].urls.regular) {
					setModalImageUser(images.data.results[index - 1].user.name);
					setModalImageAvatar(
						images.data.results[index - 1].user.profile_image.medium
					);
					setModalUserLink(images.data.results[index - 1].user.links.html);
					setModalImage(images.data.results[index - 1].urls.regular);
				}
			}
		});
	}

	function showNextModalImg() {
		images.data.results.forEach((item, index) => {
			if (images.data.results[index + 1] !== undefined) {
				if (modalImage === images.data.results[index].urls.regular) {
					setModalImageUser(images.data.results[index + 1].user.name);
					setModalImageAvatar(
						images.data.results[index + 1].user.profile_image.medium
					);
					setModalUserLink(images.data.results[index + 1].user.links.html);
					setModalImage(images.data.results[index + 1].urls.regular);
				}
			}
		});
	}

	function openNewWindow() {
		var win = window.open(modalUserLink, '_blank');
		win.focus();
	}

	function openImageNewWindow() {
		var win = window.open(modalImage, '_blank');
		win.focus();
	}

	function renderModalUsername() {
		return (
			<div className="user-name-and-avatar">
				{renderModalPrev()}
				<span onClick={openNewWindow}>
					<img
						alt=""
						id="modal-user-avatar"
						className="user-name-and-avatar__avatar"
						src={modalImageAvatar}
					/>{' '}
					<span id="modal-image-user-name">{modalImageUser}</span>
				</span>
				{renderModalNext()}
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
					<img
						alt=""
						src="https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/21/63/db/2163db41-fede-7076-7478-e6adedb7eb0e/AppIcon-85-220-0-4-2x.png/1200x630bb.png"
					/>{' '}
				</a>
			</div>
		);
	}

	function renderNextButton() {
		return (
			<img
				alt=""
				src={nextImg}
				className={showNext ? 'next-image' : 'next-image inactive'}
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
				alt="prev"
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
							<div className="images-grid">
								{renderPrevButton()}
								{renderImages()}
								{renderNextButton()}
							</div>

							{renderUnsplashNotice()}
						</div>
					</ImagesDiv>
					<Modal>
						<div ref={modal} className={showModal ? 'modal' : 'hide-modal'}>
							<span className="huge-x" onClick={hideModal}>
								X{' '}
							</span>
							{renderModalUsername()}
							<div className="image">{renderModalImage()}</div>{' '}
						</div>
					</Modal>
				</React.Fragment>
			);
		} else {
			return <React.Fragment></React.Fragment>;
		}
	}

	return showImages();
}

export default Images;
