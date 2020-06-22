import React, { useState, useRef } from 'react';

function SearchBar(props) {
	// state
	const [valueA, setValueA] = useState('Search For Hero A');
	const [valueB, setValueB] = useState('Search For Hero B');

	// refs
	const inputA = useRef(null);
	const inputB = useRef(null);

	const resultsDiv = useRef(null);

	// const reduxState = useSelector((state) => state.searchedLocation);

	// const dispatch = useDispatch();

	function setPlaceHolder() {
		console.log(props);
		console.log('///////');
		if (props.comb === 'B') {
			return `Search Hero B`;
		} else {
			return `Search Hero A`;
		}
	}

	function handleChange() {
		// console.log(reduxState);
		// dispatch(newSearchLocation('HELL'));
	}

	function submitSearch() {
		console.log('search sbumitted');
	}

	function renderInput() {
		const refRef = `input${props.comb}`;
		if (props.comb === 'A') {
		} else {
			console.log('BBBBBBB is setting now');
		}
	}

	function showResultsB() {
		console.log('results B sadhjsdahsdahk**555**88');
	}

	function showResults() {
		console.log(inputA.current);
		console.log(inputB.current);

		if (resultsDiv.current != undefined) {
			resultsDiv.current.style = 'display: block;';
			resultsDiv.current.style = 'height: 0px;';
			resultsDiv.current.style =
				'box-shadow: 0 0 0 2pt rgba(255, 108, 35, 0.7)';
			window.setTimeout(() => {
				// resultsDiv.current.classList.remove('results');
				resultsDiv.current.classList.add('results-shown');
			}, 200);
		}
	}

	function hideResults() {
		resultsDiv.current.style = 'display: none;';
		resultsDiv.current.classList.add('results');
		resultsDiv.current.classList.remove('results-shown');
	}

	return (
		<React.Fragment>
			{renderInput()}

			<div id="results-div" ref={resultsDiv} className="results">
				<ul id="myUL">
					<li>
						<a href="#">Ant-man</a>
					</li>
					<li>
						<a href="#">Apocalyptico</a>
					</li>

					<li>
						<a href="#">Batman</a>
					</li>
					<li>
						<a href="#">Helboy</a>
					</li>

					<li>
						<a href="#">Venom</a>
					</li>
					<li>
						<a href="#">Deadpool</a>
					</li>
					<li>
						<a href="#">Iron Man</a>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}

export default SearchBar;
