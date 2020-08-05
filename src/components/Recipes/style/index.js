import styled from 'styled-components';

const linGrad = `linear-gradient(to right bottom, #37b1fe, #655a56);`;
const mainColor = `#37b1fe`;

export const RecipeContainer = styled.div`
	.body-div {
		color: #655a56;
		background-image: ${linGrad};
		background-size: cover;
		background-repeat: no-repeat;
		height: 100vh;
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

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	.container {
		height: 90vh;
		width: 90vw;
		max-width: 120rem;
		background-color: #fff;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
		display: grid;
		grid-template-rows: 6rem minmax(100rem, auto);
		grid-template-columns: 1.3fr 2fr 1.1fr;
		grid-template-areas: 'head head head' 'list recipe shopping';
	}

	.btn,
	.btn-small,
	.btn-small:link,
	.btn-small:visited {
		background-image: ${linGrad};
		border-radius: 10rem;
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
		transform: scale(1.05);
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
		transform: skewY(-3deg);
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
		height: 6rem;
		width: 100%;
		grid-area: head;
		background-color: #f9f5f3;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header__logo {
		font-family: 'Holtwood One SC', serif;
		height: 4.5rem;
		width: 6rem;
		display: flex;
		font-size: 3rem;
		align-items: center;
		justify-content: center;
	}

	.header__logo span {
		background-image: ${linGrad};
		border-radius: 1rem;
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
		height: 3rem;
		background-color: #fff;
		border-radius: 10rem;
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

	.search:focus-within {
		box-shadow: 0 0.7rem 3rem #fbdb89;

		&::after {
			position: absolute;
			font-size: 1rem;
			content: 'Search name or ingredients';
			transform: translateY(135%);
			color: white;
			background-image: ${linGrad};
			border-radius: 2rem;
			padding: 0.2rem 1rem;
		}
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
		padding: 0 4rem;
		display: flex;
		align-items: center;
		height: 100%;
		transition: all 0.3s;
	}

	.likes__field:hover {
		background-color: #f2efee;
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

	.results__list,
	.likes__list {
		list-style: none;
	}

	.results__list-img-div {
		border-radius: 2rem;
		height: 2.7rem;
		width: 2.7rem;
		overflow: hidden;
		margin-right: 0.2rem;
	}

	.results__list-img-div img {
		height: 100%;
		width: 100%;
	}

	.results__link:link,
	.results__link:visited,
	.likes__link:link,
	.likes__link:visited {
		border: 1px solid ${mainColor};
		display: flex;
		padding: 0.1rem;
		align-items: center;
		transition: all 0.3s;
		text-decoration: none;
	}

	.results__link:hover,
	.likes__link:hover {
		background-color: #f9f5f3;
		opacity: 0.6;
	}

	.results__link--active,
	.likes__link--active {
		background-color: #f9f5f3;
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

	.results__name,
	.likes__name {
		margin-left: 0.5rem;
		font-size: 1rem;
		color: ${mainColor};
		text-transform: uppercase;
		font-weight: 600;
	}

	.results__detail {
		display: flex;
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

	.recipe__title {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translate(-50%, 20%) skewY(-6deg);
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
		align-items: center;
		padding: 8rem 3rem 3rem 3rem;
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
		background-image: ${linGrad};
		border-radius: 50%;
		border: none;
		cursor: pointer;
		height: 4.5rem;
		width: 4.5rem;
		margin-left: auto;
		transition: all 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.recipe__love:hover {
		transform: scale(1.07);
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
