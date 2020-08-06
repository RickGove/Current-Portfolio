import styled from 'styled-components';

import wallpaperA from '../img/wp.jpg';

const linGrad = `linear-gradient(to right bottom, #37b1fe, #655a56);`;
const mainColor = `#37b1fe`;
const mobileWidth = `@media (max-width:900px)`;

let wallPaperSettings = `
background-image: url(${wallpaperA});
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-attachment: fixed;`;

export const RecipeContainer = styled.div`
	* {
		font-family: 'Holtwood One SC', serif;
		list-style: none;
	}
	.body-div {
		color: #655a56;
		background-image: ${linGrad};
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media only screen and (max-width: 68.75em) {
		font-size: 50%;
	}

	* {
		box-sizing: border-box;
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 400;
		line-height: 1.6;
		margin: 0;
		font-size: unset;
		padding: 0;
		box-sizing: border-box;
	}

	.div-with-bg {
		${wallPaperSettings};
		grid-area: recipes;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	.container {
		width: 100vw;
		max-width: 120rem;
		background-color: #fff;
		box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
	}

	.pagination-div {
		padding-bottom: 1rem;
		display: flex;
		justify-content: center;
		padding-top: 0.1rem;
	}

	.page-btn {
		font-size: 1.8rem;
		border: none;
		background: none;
		cursor: pointer;
		outline: none;

		&:hover {
			opacity: 0.6;
		}
	}

	.hidden-page-button {
		visibility: hidden;
	}

	.search__btn {
		padding: 0.2rem 1.3rem;
	}

	.btn,
	.btn-small,
	.btn-small:link,
	.btn-small:visited {
		background-image: ${linGrad};
		border: none;
		text-transform: uppercase;
		color: #fff;
		cursor: pointer;
		display: flex;
		align-items: center;
		transition: all 0.2s;
	}
	.btn:hover,
	.btn-small:hover {
		opacity: 0.6;
	}
	.btn:focus,
	.btn-small:focus {
		outline: none;
	}
	.btn > *:first-child,
	.btn-small > *:first-child {
		margin-right: 1rem;
	}

	.btn {
		padding: 0.7rem 1rem;
		font-size: 1rem;
	}
	.btn svg {
		height: 2.25rem;
		width: 2.25rem;
		fill: currentColor;
	}

	.btn-small,
	.btn-small:link,
	.btn-small:visited {
		font-size: 1rem;
		padding: 1rem 1.75rem;
		text-decoration: none;
	}

	.btn-small svg,
	.btn-small:link svg,
	.btn-small:visited svg {
		height: 1.5rem;
		width: 1.5rem;
		fill: currentColor;
	}

	.btn-inline {
		color: ${mainColor};
		font-size: 1rem;
		border: none;
		background-color: #f9f5f3;
		padding: 0.8rem 1.2rem;
		border-radius: 10rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		transition: all 0.2s;
	}

	.btn-inline svg {
		height: 1.5rem;
		width: 1.5rem;
		fill: currentColor;
		margin: 0 0.2rem;
	}

	.btn-inline span {
		margin: 0 0.4rem;
	}

	.btn-inline:hover {
		color: #f48982;
		background-color: #f2efee;
	}

	.btn-inline:focus {
		outline: none;
	}

	.btn-tiny {
		height: 1.75rem;
		width: 1.75rem;
		border: none;
		background: none;
		cursor: pointer;
	}

	.btn-tiny svg {
		height: 100%;
		width: 100%;
		fill: ${mainColor};
		transition: all 0.3s;
	}

	.btn-tiny:focus {
		outline: none;
	}

	.btn-tiny:hover svg {
		fill: #f48982;
		transform: translateY(-1px);
	}

	.btn-tiny:active svg {
		fill: #f48982;
		transform: translateY(0);
	}

	.btn-tiny:not(:last-child) {
		margin-right: 0.3rem;
	}

	.heading-2 {
		font-size: 1.3rem;
		font-weight: 600;
		color: ${mainColor};
		text-transform: uppercase;
		margin-bottom: 2.5rem;
		text-align: center;
		transform: translateX(-2rem) skewY(-3deg);
	}

	.copyright {
		color: #968b87;
		font-size: 0.8rem;
		margin-top: auto;
	}

	.link:link,
	.link:visited {
		color: #968b87;
	}

	.loader {
		margin: 5rem auto;
		text-align: center;
	}

	.loader svg {
		height: 5.5rem;
		width: 5.5rem;
		fill: ${mainColor};
		transform-origin: 44% 50%;
		animation: rotate 1.5s infinite linear;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.header {
		z-index: 5;
		position: sticky;
		top: 0;
		height: 4rem;
		width: 100%;
		grid-area: head;
		background-color: #141414;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header__logo {
		height: 4rem;
		width: 6rem;
		display: flex;
		font-size: 2rem;
		align-items: center;
		justify-content: center;
	}

	.header__logo span {
		background-image: ${linGrad};
		border-radius: 0.3rem;
		padding: 0 0.5rem 0 0.5rem;
	}

	.search-container {
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search {
		border: 1.5px solid ${mainColor};
		height: 2rem;
		background-color: #fff;
		display: flex;
		align-items: center;
		padding-left: 3rem;
		transition: all 0.3s;
	}

	.search span {
		transform: translateX(-67%);
		font-size: 1.5rem;
		margin-right: 0.8rem;
	}

	.search button {
		padding: 0.2rem 1.3rem;
	}

	.search:focus-within {
		border: 1px rgba(74, 141, 185, 0.5);
	}

	.search__field {
		border: none;
		background: none;
		font-family: inherit;
		color: inherit;
		font-size: 1rem;
	}

	.search__field:focus {
		outline: none;
	}

	.search__field::placeholder {
		color: #dad0cc;
	}

	.likes {
		position: relative;
		align-self: stretch;
		padding: 0 !important;
	}

	.likes__field {
		cursor: pointer;
		display: flex;
		align-items: center;
		height: 100%;
		transition: all 0.3s;
	}

	.likes__field:hover {
		opacity: 0.6;
	}

	.likes__panel:hover,
	.likes__field:hover + .likes__panel {
		visibility: visible;
		opacity: 1;
	}

	.likes__icon {
		fill: ${mainColor};
		height: 3.75rem;
		width: 3.75rem;
	}

	.likes__panel {
		position: absolute;
		right: 0;
		top: 10rem;
		z-index: 10;
		padding: 2rem 0;
		width: 34rem;
		background-color: #fff;
		box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);
		visibility: hidden;
		opacity: 0;
		transition: all 0.5s 0.2s;
	}

	.likes {
		padding: 3rem 0;
	}

	.results {
		padding-top: 1.5rem;
		height: 0;
		width: 70%;
		grid-area: recipe;
	}

	.results__list,
	.likes__list {
		list-style: none;
	}

	.results__list-img-div {
		border-radius: 2rem;
		height: 3rem;
		width: 3rem;
		overflow: hidden;
		margin-right: 0.2rem;
	}

	.results__list-img-div img {
		height: 100%;
		width: 100%;
	}

	.results__link,
	.likes__link {
		opacity: 0;
		background: white;
		margin-bottom: 1px;
		box-sizing: border-box;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.1rem;
		align-items: center;
		transition: all 0.3s;
		text-decoration: none;
		cursor: pointer;
	}

	.results__link * {
	}

	.results__link:hover,
	.likes__link:hover {
		opacity: 0.95;
	}

	.results__link:hover .results__name {
		opacity: 1;
	}

	.results__fig,
	.likes__fig {
		flex: 0 0 5.5rem;
		border-radius: 50%;
		overflow: hidden;
		height: 3rem;
		margin-right: 2rem;
		position: relative;
		backface-visibility: hidden;
	}

	.results__fig::before,
	.likes__fig::before {
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: ${linGrad};
		opacity: 0.4;
	}

	.results__fig img,
	.likes__fig img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s;
	}

	.results__data {
		display: flex;
		align-items: center;
	}

	.results__name,
	.likes__name {
		width: 20rem;
		text-align: left;
		margin-left: 2.5rem;
		font-size: 1rem;
		color: ${mainColor};
		text-transform: uppercase;
		font-weight: 600;
		${mobileWidth} {
			font-size: 0.6rem;
		}
	}

	.results__detail {
		display: flex;
		${mobileWidth} {
			font-size: 0.4rem;
		}
	}

	.results__author,
	.likes__author {
		margin-left: 2rem;
		font-size: 0.6rem;
		color: #968b87;
		text-transform: uppercase;
		font-weight: 600;
	}

	.results__pages,
	.likes__pages {
		margin-top: 3rem;
		padding: 0 3rem;
	}

	.results__pages::after,
	.likes__pages::after {
		content: '';
		display: table;
		clear: both;
	}

	.results__btn--prev,
	.likes__btn--prev {
		float: left;
		flex-direction: row-reverse;
	}

	.results__btn--next,
	.likes__btn--next {
		float: right;
	}

	.recipe {
		position: relative;
		top: -0.1rem;
		background-color: #f9f5f3;
		border-top: 1px solid #fff;
	}

	.recipe__fig {
		height: 30rem;
		position: relative;
		transform: scale(1.04) translateY(-1px);
		transform-origin: top;
	}

	.recipe__fig::before {
		content: '';
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-image: ${linGrad};
		opacity: 0.6;
	}

	.recipe__img {
		width: 100%;
		display: block;
		height: 100%;
		object-fit: cover;
	}

	.recipe__title-wrap {
		background: ${wallPaperSettings};
		padding: 3rem 0 4rem 0;
		position: sticky;
		top: 4rem;
		box-sizing: border-box;
		z-index: 10;
		display: flex;
		justify-content: center;
	}

	.recipe__title {
		font-family: 'Playfair Display', serif;
		transform: skewY(-6deg);
		color: #fff;
		font-weight: 700;
		font-size: 2rem;
		text-transform: uppercase;
		width: 70%;
		line-height: 1.95;
		text-align: center;
	}

	.recipe__title span {
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
		padding: 1.3rem 2rem;
		background-image: ${linGrad};
	}

	.recipe__details {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 52%;
		padding: 5rem;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
	}

	.recipe__info {
		font-size: 1rem;
		text-transform: uppercase;
		display: flex;
		align-items: center;
	}

	.recipe__info:not(:last-child) {
		margin-right: 4rem;
	}

	.recipe__info-icon {
		height: 2rem;
		width: 2rem;
		fill: ${mainColor};
		margin-right: 1rem;
	}

	.recipe__info-data {
		margin-right: 0.4rem;
		font-weight: 600;
	}

	.recipe__info-buttons {
		display: flex;
		margin-left: 1.5rem;
		visibility: hidden;
		opacity: 0;
		transform: translateY(5px);
		transition: all 0.4s;
	}

	.recipe:hover .recipe__info-buttons {
		visibility: visible;
		opacity: 1;
		transform: translateY(0);
	}

	.recipe__love {
		font-size: 1rem;
		color: white;
		background-image: ${linGrad};
		border-radius: 50%;
		border: none;
		height: 3.5rem;
		width: 3.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.recipe__love:focus {
		outline: none;
	}

	.recipe__love svg {
		height: 2.75rem;
		width: 2.75rem;
		fill: #fff;
	}

	.recipe__ingredients {
		padding: 4rem 5rem;
		font-size: 1rem;
		line-height: 1.4;
		background-color: #f2efee;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.recipe__ingredient-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1.5rem;
		grid-row-gap: 2.5rem;
		list-style: none;
		margin-bottom: 3rem;
	}

	.recipe__item {
		display: flex;
	}

	.direction__li {
		padding-bottom: 1rem;
		font-size: 1.3rem;
	}

	.direction__li h3 {
		font-weight: bold;
	}

	.recipe__icon {
		height: 1.8rem;
		width: 1.8rem;
		fill: ${mainColor};
		border: 1px solid ${mainColor};
		border-radius: 50%;
		padding: 2px;
		margin-right: 1rem;
		flex: 0 0 auto;
		margin-top: 0.1rem;
	}

	.recipe__count {
		margin-right: 0.5rem;
		flex: 0 0 auto;
	}

	.recipe__directions {
		padding: 4rem;
		padding-bottom: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.recipe__more-info {
		padding: 4rem;
		padding-bottom: 5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #f2efee;
	}

	.recipe__more-info ul {
		font-size: 1.3rem;
	}

	.recipe__directions ul {
		width: 65%;
	}

	.recipe__directions-text {
		font-size: 1rem;
		text-align: center;
		width: 90%;
		margin-bottom: 3rem;
		color: #968b87;
	}

	.recipe__by {
		font-weight: 700;
	}

	.shopping {
		padding: 3rem 4rem;
		display: flex;
		flex-direction: column;
	}

	.shopping__list {
		list-style: none;
		max-height: 77rem;
		overflow: scroll;
	}

	.shopping__item {
		display: flex;
		align-items: flex-start;
		padding: 1.3rem 0;
		border-bottom: 1px solid #f2efee;
		position: relative;
	}

	.shopping__count {
		flex: 0 0 7.5rem;
		padding: 0.4rem 0.5rem;
		border: 1px solid #f2efee;
		border-radius: 3px;
		margin-right: 2rem;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
	}

	.shopping__count input {
		color: inherit;
		font-family: inherit;
		font-size: 1rem;
		text-align: center;
		border: none;
		width: 3.7rem;
		border-radius: 3px;
	}

	.shopping__count input:focus {
		outline: none;
		background-color: #f2efee;
	}

	.shopping__count p {
		font-size: 1rem;
	}

	.shopping__description {
		flex: 1;
		font-size: 1rem;
		margin-top: 0.4rem;
		margin-right: 1.5rem;
	}
	.shopping__delete {
		margin-top: 0.5rem;
		position: absolute;
		right: 0;
		background-image: linear-gradient(
			to right,
			transparent 0%,
			#fff 40%,
			#fff 100%
		);
		width: 3.75rem;
		padding-left: 2rem;
		visibility: hidden;
		opacity: 0;
		transition: all 0.5s;
	}

	.shopping__item:hover .shopping__delete {
		opacity: 1;
		visibility: visible;
	}
`;
