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

		${media.desktop} {
			display: none;
		}

		${mobile} {
			height: 38px;
		}
	}

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
		position: absolute;
		right: 5%;
		top: 25px;
		display: inline-block;
		/* border: 2px solid green; */
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		right: -19px;
		background-color: #f9f9f9;
		min-width: 100px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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
		color: black;
		cursor: pointer;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: bold;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {
		background-color: #f1f1f1;
		opacity: 0.5;
	}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {
		display: block;
	}

	/* Change the background color of the dropdown image when the dropdown content is shown */
	.dropdown:hover .dropimg {
		opacity: 0.2;
	}
`;

export const DDownDivAnchored = styled.div`
	/* Style The Dropdown Image */
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

	/* The container <div> - needed to position the dropdown content */
	.dropdown {
		right: 3%;
		top: 25px;
		display: inline-block;
		/* border: 2px solid green; */
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		top: 3.5rem;
		left: 11rem;
		box-shadow: 0px 0px 8px 1px #37b1fe;
		background-color: #f9f9f9;
		min-width: 100px;
		z-index: 1;
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
		color: black;
		cursor: pointer;
		text-transform: uppercase;
		text-decoration: underline;
		font-weight: bold;
	}

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {
		background-color: #f1f1f1;
		opacity: 0.5;
	}

	/* Show the dropdown menu on hover */
	.dropdown:hover .dropdown-content {
		display: block;
	}

	/* Change the background color of the dropdown image when the dropdown content is shown */
	.dropdown:hover .dropimg {
		opacity: 0.2;
	}
`;
