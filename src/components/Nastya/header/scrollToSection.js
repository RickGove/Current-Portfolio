export const scrollToSection = (s) => {
	let elm = document.getElementById(s);
	elm.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
	});
	setTimeout(() => {
		if (s === ' About') {
			window.scrollBy(0, 500);
		} else {
			window.scrollBy(0, 5);
		}
	}, 1000);
};
