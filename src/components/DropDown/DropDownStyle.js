import styled from 'styled-components';

import { data } from '../data/Data';

const media = {
	desktop: '@media (min-width: 1000px)',
	anchored: '@media (min-width: 760px)',
};

const mobile = `@media (max-width: 388px)`;

export const DDownDiv = styled.div`
	/* Style The Dropdown Image */
	.dropimg {
		padding: 5px;
		height: 50px;
		cursor: pointer;
		opacity: 0.8;

		/* ${media.desktop} {
			display: none;
		} */

		${mobile} {
			height: 38px;
		}
	}

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
		position: absolute;
		top: 25px;
		right: 3%;
		display: inline-block;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		padding: 6px;
		display: none;
		box-shadow: 0px 0px 8px 1px #37b1fe;
		position: absolute;
		right: 0.5rem;
		background-color: #f9f9f9;
		min-width: 100px;
		z-index: 1;

		${media.desktop} {
			top: 50px;
			display: none;
			box-shadow: none;
			background-color: transparent;
		}
	}

	/* Links inside the dropdown */
	.dropdown-content a {
		color: ${data.styles.accent};
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		opacity: 0.8;
		font-weight: bold;
		cursor: pointer;

		&:hover {
			opacity: 0.2;
		}
	}

	.dropdown-content .active {
		color: #37b1fe;
		cursor: pointer;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: bold;
	}

	.dropdown-content p {
		writing-mode: unset;
		position: unset;
		top: unset;
		left: unset;
		opacity: unset;
		font-size: unset;
		cursor: pointer;

		&:hover {
			background: grey;
			opacity: 0.6;
		}
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
		opacity: 0.5;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropdown:hover .dropimg {
		opacity: 0.2;
	}

	.hidden {
		display: none;
	}
`;

export const DDownDivAnchored = styled.div`
	.dropimg {
		padding: 5px;
		height: 50px;
		cursor: pointer;
		opacity: 0.8;
		vertical-align: middle;

		${media.anchored} {
			display: none;
		}
	}

	.dropdown {
		right: 3%;
		top: 25px;
		display: inline-block;
		/* border: 2px solid green; */
	}

	.dropdown-content {
		display: none;
		position: absolute;
		box-shadow: 0px 0px 8px 1px #37b1fe;
		background-color: #f9f9f9;
		min-width: 100px;
		z-index: 1;
	}

	.dropdown-content a {
		color: ${data.styles.accent};
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		opacity: 0.8;
		font-weight: bold;
		cursor: pointer;

		&:hover {
			opacity: 0.2;
		}
	}

	.dropdown-content .active {
		color: black;
		cursor: pointer;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: bold;
	}

	.dropdown-content p {
		padding: 6px;
		cursor: pointer;
	}

	.dropdown-content p:hover {
		background-color: grey;
		opacity: 0.5;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropdown:hover .dropimg {
		opacity: 0.2;
	}

	.hidden {
		display: none;
	}
`;
