const calcTemp = (temp) => {
	let newTemp;
	if (this.props.system === 'C') {
		let x = Math.round(parseFloat(temp - 273.15) * 9) / 5 + 32;

		return Math.round(x);
	} else {
		let x = Math.round(parseFloat(temp) - 273.15);
		return Math.round(x);
	}
};

export default calcTemp;
