const prod = {
	url: {
		API_URL: `https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`,
	},
};

// added cors proxy for dev environment
const dev = {
	url: {
		API_URL:
			'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc',
	},
};

export const Config = process.env.NODE_ENV === 'development' ? dev : prod;
