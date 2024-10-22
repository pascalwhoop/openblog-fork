/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f9f9fa',
				primary: '#1069E0',
				secondary: '#35b88b',
				tertiary: '#73175a',
				// ec blue
				'denim': {  DEFAULT: '#1069E0',  50: '#AECEF9',  100: '#9BC3F8',  200: '#75ACF5',  300: '#4F95F2',  400: '#297EF0',  500: '#1069E0',  600: '#0C50AC',  700: '#093877',  800: '#051F43',  900: '#01070F',  950: '#000000'},
				// ec green
				'keppel': {  DEFAULT: '#35B88B',  50: '#BAEBDA',  100: '#AAE6D2',  200: '#8ADDC1',  300: '#6AD4B0',  400: '#4BCB9F',  500: '#35B88B',  600: '#288C6A',  700: '#1C6149',  800: '#0F3528',  900: '#030A07',  950: '#000000'},
				// ec red
				'disco': {  DEFAULT: '#73175A',  50: '#E062BD',  100: '#DC51B6',  200: '#D52FA8',  300: '#B7258F',  400: '#951E75',  500: '#73175A',  600: '#440E35',  700: '#150411',  800: '#000000',  900: '#000000',  950: '#000000'},

			},
			fontFamily: {
				body: ['Work Sans', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
