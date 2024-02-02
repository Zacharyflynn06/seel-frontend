/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'off-white': '#f2f2f2',
				'off-black': '#333333',
				purple: '#4b4a78',
				'light-purple': '#9f9efa',
				pink: '#d0577b'
			}
		}
	},
	plugins: []
};
