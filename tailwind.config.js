/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			scale: {
				101: '101%',
				99: '99%'
			},
			colors: {
				black: '#020202',
				'off-white': '#f2f2f2',
				'off-black': '#333333',
				purple: '#4b4a78',
				'light-purple': '#9f9efa',
				pink: '#d0577b'
			},
			boxShadow: {
				DEFAULT: '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.05)',
				'01dp': '0px 2.5px 2.5px -1.5px rgba(0, 0, 0, 0.12)',
				'04dp': '0px 6px 12px -6px rgba(0, 0, 0, 0.16)',
				'08dp': '0px 6px 12px -6px rgba(0, 0, 0, 0.2), 0px 8px 24px -4px rgba(0, 0, 0, 0.08)',
				'24dp': '0px 8px 16px 2px rgba(0, 0, 0, 0.1), 0px 4px 4px -2px rgba(0, 0, 0, 0.2)',
				red: '0px 0px 4px 1px rgba(246, 102, 111, 0.25)',
				gold: '0px 0px 4px 1px rgba(255, 122, 0, 0.45)',
				pink: '0px 0px 4px 1px rgba(208, 87, 123, .45)'
				// autofill: '0 0 0 30px var(--tw-shadow-color) inset !important '
			},
			dropShadow: {
				pink: '0px 0px 4px 1px rgba(208, 87, 123, .45)'
			},
			fontFamily: {
				spartan: ['League Spartan'],
				sans: ['DM Sans']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
