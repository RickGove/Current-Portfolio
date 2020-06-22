import axios from 'axios';

export const searchImagesByCountry = (country) => {
	axios
		.get('https://api.unsplash.com/search/photos', {
			params: { query: { country }, orientation: 'landscape' },
			headers: {
				Authorization: 'Client-ID SSXPrsRuHu6aoF0rSMsUJ7HHWCpV6UkYMaXtjRiv5xQ',
			},
		})
		.then((res) => {
			if (res.data.total === 0) {
			} else {
				return res;
			}
		})
		.catch((err) => {
			alert(err + ' build images for redux');
		});
};

export const searchImagesByCity = (city, country) => {
	console.log('unsplash city search');
	axios
		.get('https://api.unsplash.com/search/photos', {
			params: { query: city, orientation: 'landscape' },
			headers: {
				Authorization: 'Client-ID SSXPrsRuHu6aoF0rSMsUJ7HHWCpV6UkYMaXtjRiv5xQ',
			},
		})
		.then((res) => {
			if (res.data.total === 0) {
				searchImagesByCountry(country);
			} else {
				return res;
			}
		})
		.catch((err) => {
			alert(err + ' build images for redux');
		});
};
