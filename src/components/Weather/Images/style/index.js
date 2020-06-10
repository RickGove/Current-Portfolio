import styled from 'styled-components';

// const border = `solid`;
const border = 'none';

export const ImagesDiv = styled.div`
	background-color: rgba(0, 0, 0, 0.8);
	color: white;
	overflow-x: scroll;
	overflow: hidden;
	padding: 4rem;

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.title {
		padding: 0.6rem;
		font-size: 2rem;
	}

	.unsplash-notice {
		padding: 0.3rem;
		border: 2px ${border} blue;
	}

	.unsplash-notice a {
		text-decoration: none;
		color: white;
		margin: 0.5rem;
	}
	.unsplash-notice a:hover {
		opacity: 0.6;
	}

	.unsplash-notice img {
		height: 2rem;
		vertical-align: middle;
	}

	.images-grid {
		display: grid;
		grid-template-columns: repeat(4, 25%);
	}

	.image-container-individual {
		display: grid;
		grid-template-rows: 90%, 10%;
		padding: 1rem;
		height: 100%;
		width: 100%;
		transition: 0.7s;
	}

	.image-container-individual:hover {
		transform: scale(1.4);
		transition: 0.4s;
		z-index: 5;
		opacity: 0.9;
	}

	.image-container-individual:hover .image__taker {
		display: none;
	}

	.image-container-no-animation {
		display: grid;
		grid-template-rows: 90%, 10%;
		padding: 1rem;
		height: 100%;
		width: 100%;
	}

	.image__preview {
		cursor: zoom-in;
		vertical-align: top;
		height: auto;
		width: 95%;
	}

	.image__taker {
		position: relative;
		top: -3.2rem;
		left: 0.5rem;
		text-decoration: none;
		color: white;
		cursor: zoom-in;
		vertical-align: middle;
	}

	.image__taker:hover {
		display: none;
	}

	.user-image {
		height: auto;
		width: 10%;
		border-radius: 2rem;
		vertical-align: middle;
	}

	.next-and-prev {
		display: grid;
		grid-template-columns: 50% 50%;
	}

	.next-image {
		justify-self: end;
		position: relative;
		height: 3rem;
		top: -13rem;
		right: -3rem;
		z-index: 5;
		cursor: pointer;
		transition: 0.3s;
	}

	.prev-image {
		position: relative;
		top: -13rem;
		left: -3rem;
		height: 3rem;
		cursor: pointer;
		transition: 0.3s;
		z-index: 5;
	}

	.next-image:hover,
	.prev-image:hover {
		opacity: 0.6;
		transform: scale(1.3);
		transition: 0.3s;
	}

	.inactive {
		opacity: 0.1;
		cursor: default;
	}

	.inactive:hover {
		opacity: 0;
		transform: scale(0);
		transition: 0.3s;
	}
`;

export const Modal = styled.div`
	* {
		box-sizing: border-box;
		z-index: 10000;
		margin: 0;
		padding: 0;
	}
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;

	.modal {
		color: white;
		position: sticky;
		top: 0;
		background: rgba(0, 0, 0, 0.9);
		height: 100vh;
		width: 100vw;
		opacity: 1;
		transition: 1s;
		display: grid;
		grid-template-columns: 10% auto 10%;
		grid-template-rows: 10% auto;
		grid-template-areas:
			'x username .'
			'prev image next';
	}

	.hide-modal {
		transform: scale(0);
		opacity: 0;
		transition: 1s;
	}

	.main-grid {
		text-align: middle;
		width: 100%;
		height: 100%;
	}

	.prev {
	}

	.next {
	}

	.huge-x {
		grid-area: x;
		position: relative;
		top: 0.3rem;
		left: 0.8rem;
		font-size: 3rem;
		cursor: pointer;
	}

	.huge-x:hover {
		opacity: 0.6;
	}

	.user-name-and-avatar {
		text-align: left;
		grid-area: username;
		vertical-align: middle;
		background: rgba(255, 255, 255, 1);
		border: 0.5px solid black;
		border-radius: 1rem;
		color: black;
		width: 100%;
		height: 100%;
		margin: auto;
	}

	.user-name-and-avatar span {
		position: relative;
		top: 25%;
		left: 1rem;
		cursor: pointer;
	}

	.user-name-and-avatar span:hover {
		opacity: 0.6;
	}

	.user-name-and-avatar__avatar {
		vertical-align: middle;
		border-radius: 2rem;
		height: 2rem;
	}

	.image {
		grid-area: image;
		background: rgba(255, 255, 255, 1);
		color: black;
		height: 80%;
		width: 100%;
		border: 0.5px solid black;
		border-radius: 1rem;
	}

	.image-image {
		width: auto;
		height: 75%;
		position: relative;
		top: 3%;
		cursor: pointer;
		transition: 0.3s;
	}
`;
