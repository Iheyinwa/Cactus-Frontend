module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '0px 104px 80px 32px rgba(33, 33, 33, 0.03)'
			},
			colors: {
				black: '#212121',
				"cactus-gray": 'rgba(33, 33, 33, 0.48);',
				'light-white': '#ffffff',
				'cactus-brown': '#B38B59'
			},
			backgroundImage: {
				auth: "url('/src/assets/auth-bg.png')",
				faqs: "url('/src/img/FAQS.jpg')"
			}
		}
	},
	plugins: []
};
