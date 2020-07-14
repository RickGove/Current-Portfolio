import React, { useRef, useEffect } from 'react';

function IntroMain() {
	const imgArr = useRef([]);
	const imageDiv = useRef();

	useEffect(() => {
		window.addEventListener('resize', () => {
			{
				console.log('run');
				imageDiv.current.style.height = window.innerHeight * 0.97;
			}
		});
		window.setTimeout(() => {
			console.log('run');
			imageDiv.current.style.width = `${imgArr.current[0].offsetWidth - 30}px`;

			imageDiv.current.style.height = `${
				imgArr.current[0].offsetHeight - 40
			}px`;
			imageDiv.current.style.display = 'unset';
		}, 500);
	});

	function renderImages() {
		let arr = new Array();
		let i = 0;
		while (i < 5) {
			arr.push(i);
			i++;
		}
		arr[0] = 'hi';
		arr[4] = 'hello';
		return arr.map((x, idx) => {
			const imageFile = require(`../../img/INTRO/${idx + 1}.png`);
			return (
				<img ref={(ref) => imgArr.current.push(ref)} src={imageFile} key={x} />
			);
		});
	}

	return (
		<div id="outer-div" ref={imageDiv}>
			{renderImages()}
		</div>
	);
}

export default IntroMain;
