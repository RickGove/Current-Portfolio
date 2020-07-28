import styled from 'styled-components';

const narrow = `@media (max-width: 700px)`;
const short = `@media (max-height: 440px)`;

export const DiceDiv = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
	background-image: linear-gradient(
		rgba(62, 20, 20, 0.4),
		rgba(62, 20, 20, 0.4)
	);

	background-size: cover;
	background-position: center;
	font-family: Lato, sans-serif;
	font-weight: 300;
	position: relative;
	height: 100vh;
	color: #555;

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.go-home__wrapper {
		max-height: 3.2rem;
		max-width: 3.2rem;
	}

	.final-score {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 28rem;
		color: #555;
		font-size: 18px;
		font-family: 'Lato';
		text-align: center;
		padding: 10px;
		width: 160px;
		text-transform: uppercase;
	}

	.final-score:focus {
		outline: none;
	}

	.hidden {
		display: none;
	}

	.dice-wrap {
		height: 80px;
		width: 80px;
		position: absolute;
		transform: translateX(-50%);
		left: 50%;
		top: 46%;
	}

	.clearfix::after {
		display: table;
		clear: both;
	}

	.wrapper {
		width: 98vw;
		height: 92vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}

	.player-0-panel,
	.player-1-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		width: 50%;
		float: left;
		height: 100%;
	}

	.player-name {
		font-size: 40px;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: 100;
		position: relative;

		${narrow} {
			font-size: 20px;
			top: 2rem;
		}
		${short} {
			font-size: 20px;
			top: 2rem;
		}
	}

	.playing {
		font-size: 45px;
		border-bottom: 1px solid #eb4d4c;
		color: #eb4d4d;
		animation: playing 5s infinite;

		${narrow} {
			font-size: 22px;
		}

		${short} {
			font-size: 22px;
		}
	}

	.player-score {
		text-align: center;
		font-size: 80px;
		font-weight: 100;
		color: #eb4d4d;
		margin-bottom: 130px;

		${short} {
			position: relative;
			top: 3.5rem;
		}
	}

	.active {
		background-color: #f7f7f7;
	}
	.active .player-name {
		font-weight: 300;
	}

	.active .player-name::after {
		font-size: 47px;
		position: absolute;
		color: #eb4d4d;
		top: -7px;
		right: 10px;
	}

	.player-current-box {
		background-color: #eb4d4d;
		color: #fff;
		width: 60%;
		margin: 0 auto;
		padding: 12px;
		text-align: center;
	}

	.player-current-label {
		text-transform: uppercase;
		margin-bottom: 10px;
		font-size: 12px;
		color: #222;
	}

	.player-current-score {
		font-size: 30px;
	}

	button {
		border: none;
		background: none;
		position: absolute;
		width: 200px;
		left: 50%;
		left: 50%;
		transform: translateX(-50%);
		color: #555;
		font-family: Lato;
		font-size: 20px;
		text-transform: uppercase;
		cursor: pointer;
		font-weight: 300;
		transition: background-color 0.3s, color 0.3s;

		${narrow} {
			font-size: 1rem;
		}

		${short} {
			font-size: 1rem;
		}
	}

	.rules-wrapper {
		z-index: 5;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		display: inline-block;
	}

	#rules-btn {
		top: 0.5rem;
	}

	#rules-btn:hover + .rules-div {
		transition: all 700ms ease-out;
		opacity: 1;
		height: 83vh;
		width: 80vw;
	}

	.show-rules {
		transition: all 700ms ease-out;
		opacity: 1;
		height: 75vh;
		width: 80vw;
	}

	.rules-div-hidden {
		opacity: 0;
		height: 0px;
		width: 0px;
		opacity: 0;
	}

	.rules-div {
		transition: all 700ms;
		display: flex;
		overflow: hidden;
		opacity: 0;
		transition: all 700ms ease-in;
		transform: translateX(-50%);
		height: 0px;
		width: 0px;
		position: absolute;
		overflow-y: scroll;
		left: 50%;
		top: 2.5rem;
		transform: translateX(-50%);
		background: white;
		flex-direction: column;
		z-index: 5;
		border: 2px solid gray;
		padding: 2rem;
		align-items: center;
		box-shadow: 5px 5px 5px gray;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	li {
		padding: 0.18rem;
	}

	.got-it-btn {
		border: 1px solid black;
		padding: 0.2rem 2rem;
		border-radius: 2rem;
		outline: none;
		position: relative;
		transform: translateX(0);
		width: unset;
		left: unset;
		top: unset;
	}

	button:hover {
		font-weight: 600;
	}
	button:hover span {
		margin-right: 20px;
	}

	button:focus {
		outline: none;
	}

	span {
		display: inline-block;
		margin-right: 15px;
		line-height: 1;
		vertical-align: text-top;
		transition: margin 0.3s;
	}

	.btn-new {
		top: 12rem;
	}
	.btn-roll {
		top: 23rem;
	}
	.btn-hold {
		position: relative;
		bottom: -2rem;
	}

	.dice {
		position: absolute;
		left: 50%;
		top: 178px;
		transform: translateX(-50%);
		height: 100px;
		box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);
	}

	.winner {
		background-color: #f7f7f7;
	}

	.winner .player-name {
		font-weight: 300;
		color: #eb4d4d;
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.6);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes playing {
		0% {
			letter-spacing: 0;
		}
		50% {
			letter-spacing: 0.3rem;
		}
		100% {
			letter-spacing: 0;
		}
	}
`;
