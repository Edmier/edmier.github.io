export const SITE_META = {
	title: 'Kameron Edmier | Portfolio',
	descripton:
		'Kameron Edmier is currently majoring in Games + Simulation at Miami University in Oxford Ohio with a focus on programming.',
	'og:site_name': 'kameron.edmier.com',
	image: '',
};

export const MAIN_INFO = {
	name: 'Kameron Edmier',
	title: 'Programmer | Game Developer',
	description:
		'Kameron Edmier is a programmer, game developer, and student at Miami University in Oxford Ohio. Currently focused on improving the modality of games with integration into websites and Discord to encourage community growth and engagement.',
	siteLogo: '/blackhole.jpg',
	education: [
		{
			name: 'Miami University',
			location: 'Oxford, Ohio',
			degree: 'B.S. Games + Simulation',
			graduation: 'May 2025',
			gpa: '3.9',
		},
	],
	contact: {
		messaging: {
			// Parts of contact address to (hopefully) prevent scraping
			p1: 'kameron',
			p2: 'edmier',
			p3: 'com',
		},
		accounts: [
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/kameron-edmier-ab3495220/',
				icon: 'https://www.linkedin.com/favicon.ico',
			},
			{
				name: 'Primary GitHub',
				url: 'https://github.com/ptlthg',
				icon: 'https://github.com/favicon.ico',
				invert: true,
			},
			{
				name: 'Work GitHub',
				url: 'https://github.com/edmier',
				icon: 'https://github.com/favicon.ico',
				invert: true,
			},
		],
	},
};
