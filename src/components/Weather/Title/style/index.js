import styled from 'styled-components';

const mobile = `@media (max-width: 1100px)`;

export const TitleCon = styled.div`
	* {
		box-sizing: border-box;
		margin: 0;
		/* overflow: hidden; */
	}

	.fill-screen {
		height: 1.5rem;
	}
	padding-top: 2rem;
	background: rgba(255, 255, 255, 0.5);

	text-align: center;

	@keyframes BEAT {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.4);
		}
		
		}
		100% {
			transform: scale(1);
		}
	}

	.fave-img {
		padding-right: 1rem;
		height: 2.5rem;
		vertical-align: middle;
		transition: 0.3s;
		cursor: pointer;

		&:hover {
			opacity: 0.6;
			animation: BEAT 0.5s 0s 25;

			${mobile}{
			animation: BEAT 0.5s 0s 4;

			}
		}
	}

	h1 {
		vertical-align: middle;
		font-size: 2rem;
	}

	img {
		margin-left: 1rem;
		vertical-align: middle;
		height: 2rem;
	}

	.huge-temp {
		font-size: 4rem;
		vertical-align: middle;
	}

	.icon {
		height: 6rem;
		vertical-align: middle;
	}
`;
