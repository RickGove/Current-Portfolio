import React, { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setMatchReport, setShowMatchReport } from '../../../../actions';

import { BattleDiv } from './style';

import { CharCard } from '../CharacterCard/style';

export default function BattleScene() {
	//refs
	const statsA = useRef(null),
		statsB = useRef(null),
		intelA = useRef(null),
		intelB = useRef(null),
		combatA = useRef(null),
		combatB = useRef(null),
		duraA = useRef(null),
		duraB = useRef(null),
		strengthA = useRef(null),
		strengthB = useRef(null),
		powerA = useRef(null),
		powerB = useRef(null),
		speedA = useRef(null),
		speedB = useRef(null),
		intelIconB = useRef(null),
		strengthIconB = useRef(null),
		speedIconB = useRef(null),
		duraIconB = useRef(null),
		powerIconB = useRef(null),
		combatIconB = useRef(null),
		intelIconA = useRef(null),
		strengthIconA = useRef(null),
		speedIconA = useRef(null),
		duraIconA = useRef(null),
		powerIconA = useRef(null),
		combatIconA = useRef(null);

	// redux
	const fighterA = useSelector((state) => state.fighterA),
		fighterB = useSelector((state) => state.fighterB),
		dispatch = useDispatch();

	// global vars
	let champVar = '',
		fighterBStats = '',
		fighterAStats = '',
		fighterAUsableStatsVar,
		fighterBUsableStatsVar,
		intelWinVar = '',
		combatWinVar = '',
		duraWinVar = '',
		strengthWinVar = '',
		powerWinVar = '',
		speedWinVar = '',
		bCount = 0,
		aCount = 0;

	useEffect(() => {
		beginBattle();
	});

	function renderStatsA() {
		return (
			<React.Fragment>
				<p
					className="ind-stat"
					className={
						intelWinVar === 'A' || intelWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={intelA}>
					Intelligence: {fighterA[3].intelligence}
				</p>
				<p
					className="ind-stat"
					className={
						strengthWinVar === 'A' || strengthWinVar === 'tie'
							? 'winner'
							: 'loser'
					}
					ref={strengthA}>
					Strength: {fighterA[3].strength}
				</p>
				<p
					className="ind-stat"
					className={
						speedWinVar === 'A' || speedWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={speedA}>
					Speed: {fighterA[3].speed}
				</p>
				<p
					className="ind-stat"
					className={
						duraWinVar === 'A' || duraWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={duraA}>
					Durability: {fighterA[3].durability}
				</p>
				<p
					className="ind-stat"
					className={
						powerWinVar === 'A' || powerWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={powerA}>
					Power: {fighterA[3].power}
				</p>
				<p
					className="ind-stat"
					className={
						combatWinVar === 'A' || combatWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={combatA}>
					Combat: {fighterA[3].combat}
				</p>
			</React.Fragment>
		);
	}

	function renderStatsB() {
		return (
			<React.Fragment>
				<p
					className="ind-stat"
					className={
						intelWinVar === 'B' || intelWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={intelB}>
					Intelligence: {fighterB[3].intelligence}
				</p>
				<p
					className="ind-stat"
					className={
						strengthWinVar === 'B' || strengthWinVar === 'tie'
							? 'winner'
							: 'loser'
					}
					ref={strengthB}>
					Strength: {fighterB[3].strength}
				</p>
				<p
					className="ind-stat"
					className={
						speedWinVar === 'B' || speedWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={speedB}>
					Speed: {fighterB[3].speed}
				</p>
				<p
					className="ind-stat"
					className={
						duraWinVar === 'B' || duraWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={duraB}>
					Durability: {fighterB[3].durability}
				</p>
				<p
					className="ind-stat"
					className={
						powerWinVar === 'B' || powerWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={powerB}>
					Power : {fighterB[3].power}
				</p>
				<p
					className="ind-stat"
					className={
						combatWinVar === 'B' || combatWinVar === 'tie' ? 'winner' : 'loser'
					}
					ref={combatB}>
					Combat: {fighterB[3].combat}
				</p>
				<p></p>
			</React.Fragment>
		);
	}

	function makeGridA() {
		return (
			<div className="grid-icons">
				<span
					role="img"
					aria-label="intelligence"
					ref={intelIconA}
					className="hidden-icon">
					🧠
				</span>
				<span
					role="img"
					aria-label="strength"
					ref={strengthIconA}
					className="hidden-icon">
					💪
				</span>
				<span
					role="img"
					aria-label="speed"
					ref={speedIconA}
					className="hidden-icon">
					💨
				</span>
				<span
					role="img"
					aria-label="durability"
					ref={duraIconA}
					className="hidden-icon">
					🔋
				</span>
				<span
					role="img"
					aria-label="power"
					ref={powerIconA}
					className="hidden-icon">
					🦍
				</span>
				<span
					role="img"
					aria-label="combat"
					ref={combatIconA}
					className="hidden-icon">
					⚔️
				</span>
			</div>
		);
	}

	function makeGridB() {
		return (
			<div className="grid-icons">
				<span
					role="img"
					aria-label="intelligence"
					ref={intelIconB}
					className="hidden-icon">
					🧠
				</span>
				<span
					role="img"
					aria-label="strong"
					ref={strengthIconB}
					className="hidden-icon">
					💪
				</span>
				<span
					role="img"
					aria-label="speed"
					ref={speedIconB}
					className="hidden-icon">
					💨
				</span>
				<span
					role="img"
					aria-label="durability"
					ref={duraIconB}
					className="hidden-icon">
					🔋
				</span>
				<span
					role="img"
					aria-label="power"
					ref={powerIconB}
					className="hidden-icon">
					🦍
				</span>
				<span
					role="img"
					aria-label="combat"
					ref={combatIconB}
					className="hidden-icon">
					⚔️
				</span>
			</div>
		);
	}

	function showStatsA() {
		return (
			<div ref={statsA} className="stats-hidden">
				{makeGridA()}
				{renderStatsA()}
			</div>
		);
	}
	function showStatsB() {
		return (
			<div ref={statsB} className="stats-hidden">
				{makeGridB()}
				{renderStatsB()}
			</div>
		);
	}

	function decideChamp() {
		if (aCount > bCount) {
			champVar = 'A';
		} else if (bCount > aCount) {
			champVar = 'B';
		} else {
			champVar = 'tie';
		}
		if (champVar === 'B') {
		}
		writeMatchReport();
	}

	function writeMatchReport() {
		const a = fighterA[4];
		const b = fighterB[4];

		let winner,
			loser,
			winnerCount,
			loserCount,
			closeness,
			Wheight,
			Lheight,
			eyeColor,
			LeyeColor,
			race,
			Lrace,
			hairColor,
			LhairColor,
			placeOfBirth,
			LplaceOfBirth,
			publisher,
			Lpublisher,
			genderPronoun,
			LgenderPronoun,
			champName,
			loserName;

		if (champVar === 'A') {
			champName = fighterA[0];
			loserName = fighterB[0];
		} else {
			champName = fighterB[0];
			loserName = fighterA[0];
		}

		if (champVar !== 'tie') {
			if (champVar === 'A') {
				winner = a;
				loser = b;
				winnerCount = aCount;
				loserCount = bCount;
			} else {
				winner = b;
				loser = a;
				winnerCount = bCount;
				loserCount = aCount;
			}

			//closeness
			switch (winnerCount - loserCount) {
				case 6:
					closeness = 'absolute destruction of a';
					break;
				case 5:
					closeness = 'completely lopsided';
					break;
				case 4:
					closeness = 'far from close';
					break;
				case 3:
					closeness = 'hard-fought';
					break;
				case 2:
					closeness = 'intriguing';
					break;
				default:
					closeness = 'epic battle';
					break;
			}

			//winningcats
			// categories won by each combatant
			// asked question on stackOverflow
			let arr = [
				intelWinVar,
				combatWinVar,
				duraWinVar,
				strengthWinVar,
				powerWinVar,
				speedWinVar,
			];

			let names = [
				' intelligence',
				' combat',
				' durability',
				' strength',
				' power',
				' speed',
			];

			let aWins = [],
				bWins = [],
				champWins = [],
				loserWins = [];

			arr.map((item, index) => {
				if (item === 'A') {
					aWins.push(names[index]);
				} else if (item === 'B') {
					bWins.push(names[index]);
				}
			});

			if (champVar !== 'A') {
				champWins = aWins;
				loserWins = bWins;
			} else {
				champWins = bWins;
				loserWins = aWins;
			}

			// height

			Wheight = `${winner.appearance.height[1]} tall`;
			Lheight = `${loser.appearance.height[1]} tall`;

			if (Wheight === '0 cm tall') {
				Wheight = '';
			}
			if (Lheight === '0 cm tall') {
				Lheight = '';
			}
			//eyecolor
			eyeColor = `${winner.appearance['eyeColor']}-eyed`;
			LeyeColor = `${loser.appearance['eyeColor']}-eyed`;
			if (eyeColor === '--eyed') {
				eyeColor = '';
			}
			if (LeyeColor === '--eyed') {
				LeyeColor = '';
			}

			// hair color
			hairColor = winner.appearance['hairColor'];
			LhairColor = loser.appearance['hairColor'];

			if (hairColor === '-') {
				hairColor = '';
			} else if ((hairColor = 'no hair')) {
				hairColor = '';
			} else {
				hairColor = `${hairColor}-haired`;
			}

			if (LhairColor === '-') {
				LhairColor = '';
			} else if ((LhairColor = 'no hair')) {
				LhairColor = '';
			} else {
				LhairColor = `${LhairColor}-haired`;
			}

			// placeOfBirth
			placeOfBirth = winner.biography['placeOfBirth'];
			LplaceOfBirth = loser.biography['placeOfBirth'];

			if (placeOfBirth === '-') {
				placeOfBirth = 'parts unknown';
			}
			if (LplaceOfBirth === '-') {
				LplaceOfBirth = 'parts unknown';
			}

			//race

			race = winner.appearance['race'];
			Lrace = loser.appearance['race'];

			if (race === null) {
				race = '';
			}
			if (Lrace === null) {
				Lrace = '';
			}

			//publisher

			publisher = winner.biography['publisher'];
			Lpublisher = loser.biography['publisher'];
			if (publisher === null) {
				publisher = 'Superhero';
			}
			if (Lpublisher === null) {
				Lpublisher = 'Superhero';
			}

			//RACE
			if (race === 'null') {
				race = 'contestant';
			}
			if (Lrace === 'null') {
				Lrace = 'contestant';
			}
			//genderPronoun
			genderPronoun = 'their';
			LgenderPronoun = 'their';

			let winnerImg;
			if (champVar === 'A') winnerImg = fighterA[1];
			else winnerImg = fighterB[1];

			dispatch(
				setMatchReport({
					report: `In a ${closeness} battle, the ${Wheight} ${eyeColor} ${hairColor} ${race} from ${placeOfBirth} in the ${publisher} universe known as ${champName} was able to use their${loserWins} to defeat the ${Lheight} ${LeyeColor} ${LhairColor} ${Lrace} from ${LplaceOfBirth} in the ${Lpublisher} universe known as ${loserName}`,
					winner: champName,
					winnerImg: winnerImg,
					loser: loserName,
				})
			);
		} else {
			dispatch(
				setMatchReport({
					report: `In a battle that drew to a stalemate, a tie was had between ${champName} and ${loserName}.`,
					winner: champName,
					winnerImg: 'draw',
					loser: loserName,
				})
			);
		}
		if (champVar === 'A') {
		} else if (champVar === 'B') {
		}
	}

	function convertStrToIntAndRemoveNulls(obj) {
		let stats = [
			'intelligence',
			'strength',
			'speed',
			'durability',
			'power',
			'combat',
		];
		let newObj = new Object();
		let arr = [];
		for (const [key, value] of Object.entries(obj)) {
			if (value === 'null') {
				let random = Math.floor(Math.random() * 101);
				arr.push(random);
			} else {
				let newValue = parseInt(value);
				arr.push(newValue);
			}
		}

		newObj.intelligence = arr[0];
		newObj.strength = arr[1];
		newObj.speed = arr[2];
		newObj.durability = arr[3];
		newObj.power = arr[4];
		newObj.combat = arr[5];

		return newObj;
	}

	function decideWinner() {
		let fighterAStats = convertStrToIntAndRemoveNulls(fighterA[3]);
		let fighterBStats = convertStrToIntAndRemoveNulls(fighterB[3]);
		fighterAUsableStatsVar = fighterAStats;
		fighterBUsableStatsVar = fighterBStats;
		// removeNullsAnd100s(fighterAStats, fighterBStats);

		//intel
		if (fighterAStats.intelligence > fighterBStats.intelligence) {
			intelWinVar = 'A';
			aCount++;
		} else if (fighterAStats.intelligence === fighterBStats.intelligence) {
			intelWinVar = 'tie';
		} else {
			intelWinVar = 'B';
			bCount++;
		}

		//strength
		if (fighterAStats.strength > fighterBStats.strength) {
			strengthWinVar = 'A';
			aCount++;
		} else if (fighterAStats.strength === fighterBStats.strength) {
			strengthWinVar = 'tie';
		} else {
			strengthWinVar = 'B';
			bCount++;
		}

		//speed
		if (fighterAStats.speed > fighterBStats.speed) {
			speedWinVar = 'A';
			aCount++;
		} else if (fighterAStats.speed === fighterBStats.speed) {
			speedWinVar = 'tie';
		} else {
			speedWinVar = 'B';
			bCount++;
		}

		//combat
		if (fighterAStats.combat > fighterBStats.combat) {
			combatWinVar = 'A';
			aCount++;
		} else if (fighterAStats.speed === fighterBStats.speed) {
			combatWinVar = 'tie';
		} else {
			combatWinVar = 'B';
			bCount++;
		}

		//durability
		if (fighterAStats.durability > fighterBStats.durability) {
			duraWinVar = 'A';
			aCount++;
		} else if (fighterAStats.durability === fighterBStats.durability) {
			duraWinVar = 'tie';
		} else {
			duraWinVar = 'B';
			bCount++;
		}

		//power
		if (fighterAStats.power > fighterBStats.power) {
			powerWinVar = 'A';
			aCount++;
		} else if (fighterAStats.power === fighterBStats.power) {
			powerWinVar = 'tie';
		} else {
			powerWinVar = 'B';
			bCount++;
		}
		decideChamp();
	}

	function beginBattle() {
		decideWinner();

		const interval = 1500,
			winCol = 'green',
			losCol = 'maroon';

		// make stats box display block
		window.setTimeout(() => {
			statsA.current.style.visibility = 'unset';
		}, interval * 2);

		window.setTimeout(() => {
			statsB.current.style.visibility = 'unset';
		}, interval * 2);

		// begin displaying the stats

		// intel
		window.setTimeout(() => {
			intelA.current.style = 'opacity: 1;';
			intelA.current.style.transform = 'scale(1)';
		}, interval * 3);

		window.setTimeout(() => {
			intelB.current.style = 'opacity: 1;';
			intelB.current.style.transform = 'scale(1)';
		}, interval * 4);

		window.setTimeout(() => {
			// set previous winner
			if (intelWinVar === 'A') {
				intelA.current.style.color = winCol;
				intelB.current.style.color = losCol;
				intelIconA.current.classList.add('shown-icon');
				intelIconA.current.classList.remove('hidden-icon');
			} else if (intelWinVar === 'B') {
				intelA.current.style.color = losCol;
				intelB.current.style.color = winCol;
				intelIconB.current.classList.remove('hidden-icon');
				intelIconB.current.classList.add('shown-icon');
			}
		}, interval * 6);

		// strength
		window.setTimeout(() => {
			strengthA.current.style = 'opacity: 1;';
			strengthA.current.style.transform = 'scale(1)';
		}, interval * 7);

		window.setTimeout(() => {
			strengthB.current.style = 'opacity: 1;';
			strengthB.current.style.transform = 'scale(1)';
		}, interval * 8);

		// speed
		window.setTimeout(() => {
			// set previous winner
			if (strengthWinVar === 'A') {
				strengthB.current.style.color = losCol;
				strengthA.current.style.color = winCol;
				strengthIconA.current.classList.add('shown-icon');
				strengthIconA.current.classList.remove('hidden-icon');
			} else if (strengthWinVar === 'B') {
				strengthA.current.style.color = losCol;
				strengthB.current.style.color = winCol;
				strengthIconB.current.classList.add('shown-icon');
				strengthIconB.current.classList.remove('hidden-icon');
			}
		}, interval * 10);

		window.setTimeout(() => {
			speedA.current.style = 'opacity: 1;';
			speedA.current.style.transform = 'scale(1)';
		}, interval * 11);

		window.setTimeout(() => {
			speedB.current.style = 'opacity: 1;';
			speedB.current.style.transform = 'scale(1)';
		}, interval * 12);

		window.setTimeout(() => {
			// set previous winner
			if (speedWinVar === 'A') {
				speedA.current.style.color = winCol;
				speedB.current.style.color = losCol;
				speedIconA.current.classList.add('shown-icon');
				speedIconA.current.classList.remove('hidden-icon');
			} else if (speedWinVar === 'B') {
				speedA.current.style.color = losCol;
				speedB.current.style.color = winCol;
				speedIconB.current.classList.add('shown-icon');
				speedIconB.current.classList.remove('hidden-icon');
			}
		}, interval * 14);

		// dura
		window.setTimeout(() => {
			duraA.current.style = 'opacity: 1;';
			duraA.current.style.transform = 'scale(1)';
		}, interval * 15);

		window.setTimeout(() => {
			duraB.current.style = 'opacity: 1;';
			duraB.current.style.transform = 'scale(1)';
		}, interval * 16);

		window.setTimeout(() => {
			// set previous winner
			if (duraWinVar === 'A') {
				duraA.current.style.color = winCol;
				duraB.current.style.color = losCol;
				duraIconA.current.classList.add('shown-icon');
				duraIconA.current.classList.remove('hidden-icon');
			} else if (duraWinVar === 'B') {
				duraA.current.style.color = losCol;
				duraB.current.style.color = winCol;
				duraIconB.current.classList.add('shown-icon');
				duraIconB.current.classList.remove('hidden-icon');
			}
		}, interval * 18);

		// power
		window.setTimeout(() => {
			powerA.current.style = 'opacity: 1;';
			powerA.current.style.transform = 'scale(1)';
		}, interval * 19);

		window.setTimeout(() => {
			powerB.current.style = 'opacity: 1;';
			powerB.current.style.transform = 'scale(1)';
		}, interval * 20);

		window.setTimeout(() => {
			// set previous winner
			if (powerWinVar === 'A') {
				powerA.current.style.color = winCol;
				powerB.current.style.color = losCol;
				powerIconA.current.classList.add('shown-icon');
				powerIconA.current.classList.remove('hidden-icon');
			} else if (powerWinVar === 'B') {
				powerA.current.style.color = losCol;
				powerB.current.style.color = winCol;
				powerIconB.current.classList.add('shown-icon');
				powerIconB.current.classList.remove('hidden-icon');
			}
		}, interval * 22);

		// combat
		window.setTimeout(() => {
			combatA.current.style = 'opacity: 1;';
			combatA.current.style.transform = 'scale(1)';
		}, interval * 23);

		window.setTimeout(() => {
			combatB.current.style = 'opacity: 1;';
			combatB.current.style.transform = 'scale(1)';
		}, interval * 24);

		window.setTimeout(() => {
			// set previous winner
			if (combatWinVar === 'A') {
				combatA.current.style.color = winCol;
				combatB.current.style.color = losCol;
				combatIconA.current.classList.add('shown-icon');
				combatIconA.current.classList.remove('hidden-icon');
			} else if (combatWinVar === 'B') {
				combatA.current.style.color = losCol;
				combatB.current.style.color = winCol;
				combatIconB.current.classList.add('shown-icon');
				combatIconB.current.classList.remove('hidden-icon');
			}
		}, interval * 26);

		window.setTimeout(() => {
			dispatch(setShowMatchReport(true));
		}, interval * 28);
	}

	return (
		<BattleDiv lengthA={fighterA[0].length} lengthB={fighterB[0].length}>
			<div className="card-container">
				<div className="char-card">
					<CharCard>
						<div className="char-card">
							<div className="div-back-card-title">
								<div className="div-back-card-image">
									<img src={fighterA[1]} className="img-back-card" />
								</div>
								<h3 className="h3-back-card" id="name-A">
									{fighterA[0]}
								</h3>
							</div>
							{showStatsA()}
						</div>
					</CharCard>
				</div>

				<div className="vs-h1">
					<h1>VS</h1>
				</div>
				<div className="char-card">
					<CharCard>
						<div className="char-card">
							<div className="div-back-card-title">
								<div className="div-back-card-image">
									<img src={fighterB[1]} className="img-back-card" />
								</div>
								<h3 className="h3-back-card" id="name-B">
									{fighterB[0]}
								</h3>
							</div>
							{showStatsB()}
						</div>
					</CharCard>
				</div>
			</div>
		</BattleDiv>
	);
}
